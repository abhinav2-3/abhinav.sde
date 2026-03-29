const SkillChip = ({ name }: { name: string }) => (
    <span className="px-4 py-2 bg-background border border-outline/30 rounded-full font-mono text-xs flex items-center gap-2 hover:border-primary-accent/50 transition-colors">
        <span className="w-1 h-1 bg-primary-accent rounded-full shadow-[0_0_5px_#00FFA3]" />
        {name}
    </span>
);

export default SkillChip;
