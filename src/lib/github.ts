import { graphql } from "@octokit/graphql";

const github = graphql.defaults({
  headers: {
    authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

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

export async function getGithubContributions(year: number) {
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const from = oneYearAgo.toISOString().replace(/\.\d{3}Z$/, "Z");
  const to = today.toISOString().replace(/\.\d{3}Z$/, "Z");

  try {
    const response: any = await github(query, {
      username: import.meta.env.VITE_GITHUB_USERNAME,
      from,
      to,
    });

    return response.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return null;
  }
}
