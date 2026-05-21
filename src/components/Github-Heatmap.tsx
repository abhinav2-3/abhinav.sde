type Day = {
  contributionCount: number;
  date: string;
  color: string;
};

export default function GithubHeatmap({
  weeks,
}: {
  weeks: {
    contributionDays: Day[];
  }[];
}) {
  return (
    <div className="flex gap-0.5 overflow-x-auto justify-center">
      {weeks.map((week, i) => (
        <div key={i} className="flex flex-col gap-0.5">
          {week.contributionDays.map((day) => (
            <div
              key={day.date}
              title={`${day.date} — ${day.contributionCount} contributions`}
              className="h-3 w-3 rounded-sm"
              style={{
                backgroundColor: day.color,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
