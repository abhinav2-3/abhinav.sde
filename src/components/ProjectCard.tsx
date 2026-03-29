import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../lib/utils';

const ProjectCard = ({
    title,
    description,
    tags,
    image,
    id,
    featured = false,
    liveLink,
    githubLink
}: {
    title: string,
    description: string,
    tags: string[],
    image?: string,
    id: string,
    featured?: boolean
    liveLink?: string,
    githubLink?: string
}) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={cn(
            "group relative bg-surface p-8 space-y-6 transition-all border border-outline/10 flex flex-col justify-between overflow-hidden",
            featured && "border-l-4 border-l-primary-accent"
        )}
    >
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-10 uppercase tracking-tighter select-none">
            ID: {id}
        </div>

        <div className="space-y-4">
            <div className="flex justify-between items-start">
                <h3 className={cn("text-2xl font-bold", featured ? "text-primary-accent" : "text-white")}>
                    {title}
                </h3>
                <div className="flex gap-3 text-muted">
                    <a href={liveLink} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="hover:text-primary-accent cursor-pointer transition-colors" />
                    </a>
                    <a href={githubLink} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                        <Github size={18} className="hover:text-primary-accent cursor-pointer transition-colors" />
                    </a>
                </div>
            </div>

            <p className="text-muted leading-relaxed text-sm">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
                {tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-primary-accent/5 text-primary-accent font-mono text-[10px] uppercase tracking-wider border border-primary-accent/10">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {image && (
            <div className="border-t border-outline/10 pt-6 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-60 object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                />
            </div>
        )}
    </motion.div>
);

export default ProjectCard;
