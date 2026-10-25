import TerminalScramble from "./TerminalScramble";

const SectionHeader = ({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-6 md:mb-8 group">
    <div className="font-mono text-primary-accent text-xs md:text-sm tracking-widest uppercase mb-1.5 flex items-center gap-1">
      <span className="opacity-70">// {id}.</span>{" "}
      <TerminalScramble text={title} triggerOnHover autoStart />
    </div>
    {subtitle && (
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
        {subtitle}
      </h2>
    )}
  </div>

);

export default SectionHeader;