import { cn } from "../lib/utils";

const ExperienceItem = ({
  year,
  role,
  company,
  description,
  isLast = false,
  reverse = false,
}: {
  year: string;
  role: string;
  company: string;
  description: string;
  isLast?: boolean;
  reverse?: boolean;
}) => (
  <div
    className={cn(
      "relative mb-20 md:flex items-center justify-between gap-10",
      reverse && "md:flex-row-reverse",
    )}
  >
    {/* Left Content */}
    <div
      className={cn(
        "md:w-5/12 mb-6 md:mb-0 relative z-10",
        reverse ? "text-left" : "text-left md:text-right",
      )}
    >
      <div
        className="
        inline-block
        px-4
        py-2
        rounded-full
        border
        border-primary-accent/20
        bg-primary-accent/5
        backdrop-blur-xl
        font-mono
        text-primary-accent
        text-sm
        shadow-[0_0_15px_rgba(0,255,163,0.08)]
      "
      >
        {year}
      </div>

      <h3
        className="
        mt-4
        text-2xl
        font-bold
        text-white
        tracking-tight
      "
      >
        {role}
      </h3>

      <p
        className="
        text-white/45
        text-xs
        mt-2
        uppercase
        tracking-[0.25em]
        font-mono
      "
      >
        {company}
      </p>
    </div>

    {/* Timeline Dot */}
    <div
      className="
      absolute
      -left-8
      md:left-1/2
      top-1
      md:top-auto
      -translate-x-1/2
      z-20
      flex
      items-center
      justify-center
    "
    >
      {/* outer glass circle */}
      <div
        className="
        relative
        w-5
        h-5
        rounded-full
        border
        border-white/15
        bg-white/6
        backdrop-blur-2xl
        shadow-[0_0_20px_rgba(255,255,255,0.08)]
        flex
        items-center
        justify-center
      "
      >
        {/* active pulse */}
        {year.includes("Present") && (
          <>
            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-primary-accent/20
              animate-ping
            "
            />

            <div
              className="
              w-2
              h-2
              rounded-full
              bg-primary-accent
              shadow-[0_0_12px_#00FFA3]
            "
            />
          </>
        )}

        {!year.includes("Present") && (
          <div
            className="
            w-1.5
            h-1.5
            rounded-full
            bg-white/50
          "
          />
        )}
      </div>
    </div>

    {/* Right Card */}
    <div
      className="
      relative
      overflow-hidden
      md:w-5/12
      rounded-3xl
      border
      border-white/10
      bg-white/4
      backdrop-blur-2xl
      p-7
      shadow-[0_10px_40px_rgba(0,0,0,0.18)]
      hover:bg-white/6
      hover:border-primary-accent/20
      hover:shadow-[0_0_35px_rgba(0,255,163,0.08)]
      transition-all
      duration-500
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

      <p
        className="
        relative
        z-10
        text-white/65
        text-sm
        leading-relaxed
        tracking-[0.01em]
      "
      >
        {description}
      </p>
    </div>
  </div>
);

export default ExperienceItem;
