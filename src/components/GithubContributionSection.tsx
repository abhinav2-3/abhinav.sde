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
    <div className="max-w-7xl mx-auto text-center justify-center">
      <h2 className="text-3xl font-bold mb-6">
        Contributions in the last year
      </h2>

      <p className="mb-4 text-gray-400">
        Total Contributions: {data.totalContributions}
      </p>

      <GithubHeatmap weeks={data.weeks} />
    </div>
  );
}
