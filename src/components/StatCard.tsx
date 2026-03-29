import { cn } from "../lib/utils";

const StatCard = ({ value, label, highlight = false }: { value: string, label: string, highlight?: boolean }) => (
    <div className={cn(
        "p-8 bg-surface border-l-2 flex flex-col justify-between aspect-square transition-colors hover:bg-surface-high",
        highlight ? "border-primary-accent" : "border-outline/30"
    )}>
        <span className="text-primary-accent font-mono text-4xl font-bold">{value}</span>
        <span className="text-muted font-mono text-xs uppercase tracking-widest leading-snug">
            {label}
        </span>
    </div>
);

export default StatCard;
