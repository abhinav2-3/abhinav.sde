import { graphql } from "@octokit/graphql";
import portfolioData from "../data/portfolio.json";

export interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

const LEVEL_COLORS: Record<number, string> = {
  0: "#161b22",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
};

// Fallback: Fetch public contribution data without needing any secret personal access token
async function fetchPublicContributions(
  username: string,
): Promise<ContributionCalendar | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    );
    if (!res.ok) {
      throw new Error(`Public contributions API failed with status ${res.status}`);
    }

    const json = await res.json();
    const days: Array<{ date: string; count: number; level: number }> =
      json.contributions || [];

    const weeks: ContributionWeek[] = [];
    let currentWeek: ContributionDay[] = [];

    for (const day of days) {
      currentWeek.push({
        contributionCount: day.count,
        date: day.date,
        color: LEVEL_COLORS[day.level] || "#161b22",
      });

      if (currentWeek.length === 7) {
        weeks.push({ contributionDays: currentWeek });
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      weeks.push({ contributionDays: currentWeek });
    }

    const total =
      json.total?.lastYear ??
      days.reduce((sum, d) => sum + (d.count || 0), 0);

    return {
      totalContributions: total,
      weeks,
    };
  } catch (err) {
    console.warn("Public contributions fallback failed:", err);
    return null;
  }
}

export async function getGithubContributions(
  _year?: number,
): Promise<ContributionCalendar | null> {
  // Extract username from portfolio.json or env
  const githubSocial = portfolioData.contact.socials.find(
    (s) => s.name.toLowerCase() === "github",
  );
  const usernameFromUrl = githubSocial?.href.split("/").pop();
  const username =
    import.meta.env.VITE_GITHUB_USERNAME || usernameFromUrl || "abhinav2-3";

  const token = import.meta.env.VITE_GITHUB_TOKEN;

  // If a token is provided and not empty, attempt the GraphQL API
  if (token && token.trim().length > 0 && !token.includes("your_token_here")) {
    try {
      const github = graphql.defaults({
        headers: {
          authorization: `token ${token.trim()}`,
        },
      });

      const today = new Date();
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(today.getFullYear() - 1);

      const from = oneYearAgo.toISOString().replace(/\.\d{3}Z$/, "Z");
      const to = today.toISOString().replace(/\.\d{3}Z$/, "Z");

      const query = `
        query($username:String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    color
                  }
                }
              }
            }
          }
        }
      `;

      const response: any = await github(query, {
        username,
        from,
        to,
      });

      if (response?.user?.contributionsCollection?.contributionCalendar) {
        return response.user.contributionsCollection.contributionCalendar;
      }
    } catch {
      // If token expired, revoked, or returned 401, seamlessly switch to public endpoint
      // without failing the page or throwing unhandled errors
    }
  }

  // Fallback to tokenless public API
  return await fetchPublicContributions(username);
}
