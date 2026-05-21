import { cn } from "../lib/utils";

const StatCard = ({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) => (
  <div
    className={cn(
      "p-8 bg-surface border-l-2 flex flex-col justify-between aspect-square transition-colors hover:bg-surface-high",
      highlight ? "border-primary-accent" : "border-outline/30",
    )}
  >
    <span className="text-primary-accent font-mono md:text-4xl text-3xl font-bold">
      {value}
    </span>
    <span className="text-muted font-mono md:text-sm text-[10px] uppercase tracking-widest leading-snug">
      {label}
    </span>
  </div>
);

export default StatCard;
