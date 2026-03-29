const SectionHeader = ({ id, title, subtitle }: { id: string, title: string, subtitle?: string }) => (
    <div className="mb-12">
        <div className="font-mono text-primary-accent text-sm tracking-widest uppercase mb-2">
      // {id}. {title}
        </div>
        {subtitle && (
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {subtitle}
            </h2>
        )}
    </div>
);

export default SectionHeader;