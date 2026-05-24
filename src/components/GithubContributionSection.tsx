import { useEffect, useState } from "react";
import { getGithubContributions } from "../lib/github";
import GithubHeatmap from "./Github-Heatmap";

type ContributionData = {
  totalContributions: number;
  weeks: {
    contributionDays: {
      contributionCount: number;
      date: string;
      color: string;
    }[];
  }[];
};

export default function GithubContributionSection() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await getGithubContributions(2026);
        setData(response);
      } catch (error) {
        console.error("Failed to fetch contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <p>Loading contributions...</p>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div
      className="
    relative
    overflow-hidden

    text-center
    rounded-4xl
    border
    border-white/10
    bg-white/ 4
    backdrop-blur-2xl
    px-4
    py-8
    md:px-10
    shadow-[0_10px_50px_rgba(0,0,0,0.2)]
  "
    >
      {/* glass reflection */}
      <div
        className="
      absolute
      inset-0
      bg-linear-to-br
      from-white/10
      via-transparent
      to-transparent
      pointer-events-none
    "
      />

      {/* ambient glow */}
      <div
        className="
      absolute
      -top-20
      left-1/2
      -translate-x-1/2
      h-52
      w-52
      rounded-full
      bg-primary-accent/10
      blur-3xl
      opacity-70
      pointer-events-none
    "
      />

      <div className="relative z-10">
        <h2
          className="
        text-3xl
        md:text-4xl
        font-bold
        tracking-tight
        text-white
        mb-4
      "
        >
          Contributions in the last year
        </h2>

        <p
          className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-primary-accent/15
        bg-primary-accent/5
        px-5
        py-2
        mb-8
        font-mono
        text-sm
        text-primary-accent
        shadow-[0_0_20px_rgba(0,255,163,0.08)]
      "
        >
          <span className="w-2 h-2 rounded-full bg-primary-accent shadow-[0_0_10px_#00FFA3]" />
          Total Contributions: {data.totalContributions}
        </p>

        <div
          className="
        relative
        overflow-x-auto
        rounded-2xl
        border
        border-white/10
        bg-black/10
        backdrop-blur-xl
        p-5
      "
        >
          <div className="flex gap-1 justify-center min-w-max">
            {data.weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-1">
                {week.contributionDays.map((day) => (
                  <div
                    key={day.date}
                    title={`${day.date} — ${day.contributionCount} contributions`}
                    className="
                  h-3
                  w-3
                  rounded-[3px]
                  transition-all
                  duration-300
                  hover:scale-125
                  hover:brightness-125
                  hover:shadow-[0_0_12px_rgba(255,255,255,0.35)]
                "
                    style={{
                      backgroundColor: day.color,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
