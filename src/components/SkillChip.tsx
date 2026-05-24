const SkillChip = ({ name }: { name: string }) => (
  <span
    className="
      group
      relative
      overflow-hidden
      px-5
      py-2.5
      rounded-full
      border
      border-white/10
      bg-white/4
      backdrop-blur-xl
      font-mono
      text-xs
      text-white/75
      flex
      items-center
      gap-2.5
      shadow-[0_4px_20px_rgba(0,0,0,0.15)]
      hover:bg-white/[0.07]
      hover:border-primary-accent/30
      hover:text-white
      hover:shadow-[0_0_20px_rgba(0,255,163,0.12)]
      transition-all
      duration-300
    "
  >
    {/* glass reflection */}
    <span
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

    {/* glowing dot */}
    <span
      className="
        relative
        z-10
        w-1.5
        h-1.5
        rounded-full
        bg-primary-accent
        shadow-[0_0_10px_#00FFA3]
        group-hover:scale-125
        transition-transform
        duration-300
      "
    />

    <span className="relative z-10 tracking-wide">{name}</span>
  </span>
);

export default SkillChip;
