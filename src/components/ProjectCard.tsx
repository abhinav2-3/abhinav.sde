import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "../lib/utils";

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  id,
  featured = false,
  liveLink,
  githubLink,
}: {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  id: string;
  featured?: boolean;
  liveLink?: string;
  githubLink?: string;
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    className={cn(
      `
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      backdrop-blur-2xl
      bg-white/4
      p-8
      space-y-6
      flex
      flex-col
      justify-between
      transition-all
      duration-500
      shadow-[0_10px_40px_rgba(0,0,0,0.18)]
      hover:bg-white/6
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    `,
      featured
        ? `
        border-primary-accent/25
        shadow-[0_0_35px_rgba(0,255,163,0.08)]
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
      from-white/10
      via-transparent
      to-transparent
      pointer-events-none
    "
    />

    {/* glow effect */}
    <div
      className={cn(
        `
        absolute
        -top-20
        -right-20
        h-40
        w-40
        rounded-full
        blur-3xl
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-700
      `,
        featured ? "bg-primary-accent/20" : "bg-white/10",
      )}
    />

    {/* project id */}
    <div
      className="
      absolute
      top-0
      right-0
      p-5
      font-mono
      text-[9px]
      text-white/10
      uppercase
      tracking-[0.25em]
      select-none
    "
    >
      ID: {id}
    </div>

    <div className="relative z-10 space-y-5">
      <div className="flex justify-between items-start gap-4">
        <h3
          className={cn(
            `
            text-2xl
            font-bold
            tracking-tight
            transition-colors
            duration-300
          `,
            featured
              ? "text-primary-accent"
              : "text-white group-hover:text-primary-accent",
          )}
        >
          {title}
        </h3>

        <div className="flex gap-3 text-white/40">
          <a
            href={liveLink}
            className="
            p-2
            rounded-full
            bg-white/3
            border
            border-white/10
            hover:bg-primary-accent/10
            hover:border-primary-accent/20
            hover:text-primary-accent
            transition-all
            duration-300
          "
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={17} />
          </a>

          <a
            href={githubLink}
            className="
            p-2
            rounded-full
            bg-white/3
            border
            border-white/10
            hover:bg-primary-accent/10
            hover:border-primary-accent/20
            hover:text-primary-accent
            transition-all
            duration-300
          "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} />
          </a>
        </div>
      </div>

      <p
        className="
        text-white/60
        leading-relaxed
        text-sm
        group-hover:text-white/75
        transition-colors
        duration-300
      "
      >
        {description}
      </p>

      {/* tags */}
      <div className="flex flex-wrap gap-2 pt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
            relative
            overflow-hidden
            px-3
            py-1.5
            rounded-full
            border
            border-primary-accent/15
            bg-primary-accent/5
            backdrop-blur-xl
            text-primary-accent
            font-mono
            text-[10px]
            uppercase
            tracking-[0.2em]
            shadow-[0_0_12px_rgba(0,255,163,0.06)]
            transition-all
            duration-300
            hover:bg-primary-accent/10
          "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* image */}
    {image && (
      <div
        className="
        relative
        z-10
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/3
        backdrop-blur-xl
      "
      >
        <div
          className="
          absolute
          inset-0
          bg-linear-to-t
          from-black/40
          via-transparent
          to-white/5
          z-10
          pointer-events-none
        "
        />

        <img
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
          className="
          w-full
          h-60
          object-cover
          opacity-60
          grayscale
          scale-100
          group-hover:grayscale-0
          group-hover:opacity-90
          group-hover:scale-105
          transition-all
          duration-700
        "
        />
      </div>
    )}
  </motion.div>
);

export default ProjectCard;
