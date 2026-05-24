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
      `
      group
      relative
      overflow-hidden
      p-8
      rounded-3xl
      border
      backdrop-blur-2xl
      flex
      flex-col
      justify-between
      aspect-square
      transition-all
      duration-500
      bg-white/4
      hover:bg-white/[0.07]
      shadow-[0_8px_32px_rgba(0,0,0,0.2)]
      hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
      hover:-translate-y-1
    `,
      highlight
        ? `
        border-primary-accent/30
        shadow-[0_0_30px_rgba(0,255,163,0.12)]
      `
        : `
        border-white/10
      `,
    )}
  >
    {/* glass reflection */}
    <div
      className="
      absolute
      inset-0
      bg-linear-to-br
      from-white/12
      via-transparent
      to-transparent
      opacity-80
      pointer-events-none
    "
    />

    {/* glow orb */}
    <div
      className={cn(
        `
        absolute
        -top-10
        -right-10
        h-28
        w-28
        rounded-full
        blur-3xl
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
      `,
        highlight ? "bg-primary-accent/20" : "bg-white/10",
      )}
    />

    <span
      className="
      relative
      z-10
      text-primary-accent
      font-mono
      md:text-4xl
      text-3xl
      font-bold
      tracking-tight
      drop-shadow-[0_0_20px_rgba(0,255,163,0.35)]
    "
    >
      {value}
    </span>

    <span
      className="
      relative
      z-10
      text-white/60
      group-hover:text-white/80
      font-mono
      md:text-sm
      text-[10px]
      uppercase
      tracking-[0.25em]
      leading-snug
      transition-colors
      duration-300
    "
    >
      {label}
    </span>
  </div>
);

export default StatCard;
