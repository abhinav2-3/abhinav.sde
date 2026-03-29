import { cn } from '../lib/utils';

const ExperienceItem = ({
    year,
    role,
    company,
    description,
    isLast = false,
    reverse = false
}: {
    year: string,
    role: string,
    company: string,
    description: string,
    isLast?: boolean,
    reverse?: boolean
}) => (
    <div className={cn("relative mb-20 md:flex items-center justify-between", reverse && "md:flex-row-reverse")}>
        <div className={cn("md:w-5/12 mb-4 md:mb-0", reverse ? "text-left" : "text-left md:text-right")}>
            <div className="font-mono text-primary-accent mb-2">{year}</div>
            <h3 className="text-xl font-bold">{role}</h3>
            <p className="text-muted text-xs mt-1 uppercase tracking-widest">{company}</p>
        </div>

        <div className="absolute left-[-32px] md:left-1/2 top-0 md:top-auto w-4 h-4 bg-background border-2 border-outline rounded-full -translate-x-1/2 z-10 flex items-center justify-center">
            {year.includes('Present') && <div className="w-1.5 h-1.5 bg-primary-accent rounded-full animate-ping" />}
        </div>

        <div className="md:w-5/12 bg-surface p-6 border border-outline/10 hover:border-primary-accent/20 transition-colors">
            <p className="text-muted text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

export default ExperienceItem;