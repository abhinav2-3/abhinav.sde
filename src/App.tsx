import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Terminal,
  Download,
  Mail,
  ChevronDown,
} from "lucide-react";
import { cn } from "./lib/utils";
import ProjectCard from "./components/ProjectCard";
import ExperienceItem from "./components/ExperienceCard";
import SectionHeader from "./components/SectionHeader";
import StatCard from "./components/StatCard";
import SkillChip from "./components/SkillChip";
import GithubContributionSection from "./components/GithubContributionSection";
import { renderPortfolioIcon } from "./components/IconRenderer";
import TerminalScramble from "./components/TerminalScramble";
import { useLenisScroll } from "./lib/useLenisScroll";

import portfolioData from "./data/portfolio.json";
import { PortfolioData } from "./types/portfolio";

const data = portfolioData as PortfolioData;

const Navbar = ({
  navigation,
  handle,
}: {
  navigation: PortfolioData["navigation"];
  handle: string;
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-6",
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
        <div
          className={cn(
            "flex justify-between items-center rounded-2xl border transition-all duration-500",
            scrolled
              ? `
            bg-white/5
            backdrop-blur-2xl
            border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            supports-backdrop-filter:bg-white/5
          `
              : `
            bg-white/3
            backdrop-blur-xl
            border-white/6
          `,
          )}
        >
          <div className="w-full px-6 py-4 flex justify-between items-center">
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="
            text-xl
            font-bold
            font-mono
            tracking-tighter
            uppercase
            text-white
            drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
          "
            >
              <span className="text-primary-accent">{handle}</span>
            </motion.a>

            <div className="hidden md:flex gap-4 items-center">
              {navigation.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="
                relative
                px-4
                py-2
                rounded-xl
                font-mono
                text-sm
                text-white/70
                border
                border-transparent
                hover:text-white
                hover:bg-white/5
                hover:border-white/10
                transition-all
                duration-300
              "
                >
                  <span className="opacity-40">// {link.id}.</span> {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="
              relative
              overflow-hidden
              rounded-xl
              border
              border-primary-accent/30
              bg-primary-accent/10
              backdrop-blur-xl
              px-5
              py-2.5
              font-mono
              text-sm
              font-bold
              text-primary-accent
              shadow-[0_0_20px_rgba(0,255,163,0.15)]
              hover:bg-primary-accent/20
              hover:shadow-[0_0_30px_rgba(0,255,163,0.25)]
              active:scale-95
              transition-all
              duration-300
            "
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
                <span className="relative z-10">&gt; console.log</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  // Initialize Lenis smooth momentum scrolling synced with GSAP
  useLenisScroll();

  const {
    profile,
    navigation,
    about,
    skills,
    projects,
    experience,
    contact,
    footer,
  } = data;

  const watermarkString = JSON.stringify(profile.watermark) + " ";

  return (
    <div className="min-h-screen bg-background text-[#EAEAEA]">
      <Navbar navigation={navigation} handle={profile.handle} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 pt-20">
        {/* Background Watermark */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none font-mono text-[10px] leading-relaxed overflow-hidden p-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {watermarkString.repeat(3)}
            </div>
          ))}
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-primary-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-primary-accent/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-6xl md:text-9xl font-bold text-primary-accent tracking-tighter"
          >
            <TerminalScramble
              text={profile.handle}
              triggerOnHover
              autoStart
              speed={45}
            />
            <span className="cursor-blink">|</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center px-4"
          >
            <div
              className="
                relative
                overflow-hidden
                w-full
                max-w-fit
                rounded-2xl
                border
                border-white/10
                bg-white/4
                backdrop-blur-2xl
                py-4
                px-6
                shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                supports-backdrop-filter:bg-white/4
              "
            >
              {/* subtle glass reflection */}
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

              <motion.div
                className="
                  relative
                  z-10
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-2
                  gap-y-2
                  text-sm
                  md:text-lg
                  font-mono
                  text-white/75
                  leading-relaxed
                  tracking-wide
                  text-center
                "
              >
                <span className="text-primary-accent">//</span>
                {profile.heroBadges.map((badge, idx) => (
                  <span key={badge} className="inline-flex items-center gap-2">
                    <span className="hover:text-white transition-colors duration-300">
                      {badge}
                    </span>
                    {idx < profile.heroBadges.length - 1 && (
                      <span className="text-white/20 hidden sm:inline">·</span>
                    )}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-5 pt-8"
          >
            {/* Primary Button */}
            <a
              href="#projects"
              className="
                group
                relative
                overflow-hidden
                md:w-auto
                rounded-2xl
                border
                border-primary-accent/20
                bg-primary-accent/10
                backdrop-blur-2xl
                px-8
                py-4
                font-mono
                font-bold
                text-primary-accent
                shadow-[0_8px_32px_rgba(0,255,163,0.12)]
                hover:bg-primary-accent/20
                hover:shadow-[0_0_35px_rgba(0,255,163,0.25)]
                active:scale-[0.98]
                transition-all
                duration-300
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-linear-to-br
                  from-white/15
                  via-transparent
                  to-transparent
                  opacity-70
                  pointer-events-none
                "
              />
              <Terminal
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:rotate-6"
              />
              <span className="relative z-10">&gt; View Projects</span>
            </a>

            {/* Secondary Button */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                md:w-auto
                rounded-2xl
                border
                border-white/10
                bg-white/4
                backdrop-blur-2xl
                px-8
                py-4
                font-mono
                text-white/80
                shadow-[0_8px_32px_rgba(0,0,0,0.18)]
                hover:bg-white/[0.07]
                hover:border-primary-accent/20
                hover:text-primary-accent
                active:scale-[0.98]
                transition-all
                duration-300
                flex
                items-center
                justify-center
                gap-3
              "
            >
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
              <Download
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span className="relative z-10">Download Resume</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 px-8 max-w-screen-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <SectionHeader
            id={about.id}
            title={about.title}
            subtitle={about.subtitle}
          />
          <p className="text-muted text-lg leading-relaxed">{about.bio}</p>
          <div className="pt-4">
            <div className="inline-flex items-center gap-3 p-4 bg-surface border border-outline/20">
              <div className="w-3 h-3 bg-primary-accent rounded-full shadow-[0_0_10px_#00FFA3]" />
              <span className="font-mono text-sm">{about.currentStatus}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {about.stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              highlight={stat.highlight}
            />
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-8 bg-[#070708]">
        <div className="max-w-screen-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeader
              id={skills.id}
              title={skills.title}
              subtitle={skills.subtitle}
            />
            <div className="text-muted font-mono text-xs mb-12 md:mb-0">
              LOAD_VERSION: {skills.version}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skills.categories.map((cat) => (
              <div key={cat.name} className="space-y-6">
                <h3 className="font-mono font-bold flex items-center gap-2">
                  {renderPortfolioIcon(cat.icon, {
                    size: 16,
                    className: "text-primary-accent",
                  })}
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((s) => (
                    <SkillChip key={s} name={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 px-8">
        <SectionHeader
          id={projects.id}
          title={projects.title}
          subtitle={projects.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.items.map((proj) => (
            <ProjectCard key={proj.id} {...proj} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-28 px-8 bg-[#070708]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            id={experience.id}
            title={experience.title}
            subtitle={experience.subtitle}
          />

          <div className="relative pl-8 md:pl-0 mt-16">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-outline -translate-x-1/2 hidden md:block" />

            {experience.items.map((item) => (
              <ExperienceItem
                key={item.company + item.year}
                year={item.year}
                role={item.role}
                company={item.company}
                description={item.description}
                isLast={item.isLast}
                reverse={item.reverse}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Contribution Section */}
      <section
        id="contribution"
        className="py-28 px-8 bg-[#070708] justify-center"
      >
        <GithubContributionSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-28 px-8 overflow-hidden">
        {/* ambient glow */}
        <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            h-72
            w-72
            rounded-full
            bg-primary-accent/10
            blur-3xl
            opacity-70
            pointer-events-none
          "
        />

        <div className="relative z-10">
          <div
            className="
              relative
              overflow-hidden
              rounded-4xl
              border
              border-white/10
              bg-white/4
              backdrop-blur-2xl
              px-8
              py-14
              md:px-14
              shadow-[0_15px_60px_rgba(0,0,0,0.25)]
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

            <div className="relative z-10 text-center space-y-12">
              <SectionHeader
                id={contact.id}
                title={contact.title}
                subtitle={contact.subtitle}
              />

              <p
                className="
                  text-white/65
                  text-lg
                  leading-relaxed
                  max-w-2xl
                  mx-auto
                "
              >
                {contact.description}
              </p>

              <div className="flex flex-col gap-10 items-center pt-4">
                {/* email glass card */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href={`mailto:${contact.email}`}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-primary-accent/20
                    bg-primary-accent/5
                    backdrop-blur-2xl
                    px-6
                    py-5
                    md:px-10
                    shadow-[0_0_35px_rgba(0,255,163,0.08)]
                    hover:bg-primary-accent/10
                    hover:shadow-[0_0_45px_rgba(0,255,163,0.18)]
                    transition-all
                    duration-500
                  "
                >
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

                  <div
                    className="
                      relative
                      z-10
                      font-mono
                      text-sm
                      md:text-2xl
                      lg:text-3xl
                      text-primary-accent
                      flex
                      items-center
                      gap-4
                      break-all
                    "
                  >
                    <Mail
                      size={30}
                      className="group-hover:rotate-6 transition-transform duration-300"
                    />
                    {contact.email}
                  </div>
                </motion.a>

                {/* socials */}
                <div className="flex flex-wrap justify-center gap-5 pt-2">
                  {contact.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-full
                        border
                        border-white/10
                        bg-white/4
                        backdrop-blur-xl
                        px-5
                        py-3
                        text-white/65
                        hover:text-primary-accent
                        hover:border-primary-accent/20
                        hover:bg-primary-accent/5
                        transition-all
                        duration-300
                        flex
                        items-center
                        gap-3
                        font-mono
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        shadow-[0_6px_25px_rgba(0,0,0,0.12)]
                      "
                    >
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
                      <span className="relative z-10">
                        {renderPortfolioIcon(social.icon, { size: 18 })}
                      </span>
                      <span className="relative z-10">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="
          relative
          overflow-hidden
          py-10
          px-8
          border-t
          border-white/10
          bg-white/2
          backdrop-blur-2xl
        "
      >
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            h-px
            w-1/2
            bg-primary-accent/20
            blur-sm
          "
        />

        <div
          className="
            max-w-screen-2xl
            mx-auto
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-8
            relative
            z-10
          "
        >
          <div
            className="
              text-white
              font-bold
              font-mono
              tracking-tight
              text-2xl
              drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]
            "
          >
            <span className="text-primary-accent">{footer.handle}</span>
          </div>

          <div
            className="
              text-white/40
              font-mono
              text-[10px]
              uppercase
              tracking-[0.3em]
            "
          >
            // {new Date().getFullYear()}. {footer.copyrightTagline}
          </div>

          <div
            className="
              text-white/40
              font-mono
              text-[10px]
              uppercase
              tracking-[0.3em]
            "
          >
            {footer.credit}
          </div>
        </div>
      </footer>
    </div>
  );
}
