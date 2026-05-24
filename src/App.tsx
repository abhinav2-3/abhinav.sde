import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Terminal,
  Download,
  Code2,
  Database,
  Cloud,
  Mail,
  ChevronDown,
  Globe,
  MessageSquare,
  CodeXml,
} from "lucide-react";
import { cn } from "./lib/utils";
import ProjectCard from "./components/ProjectCard";
import ExperienceItem from "./components/ExperienceCard";
import SectionHeader from "./components/SectionHeader";
import StatCard from "./components/StatCard";
import SkillChip from "./components/SkillChip";
import GithubContributionSection from "./components/GithubContributionSection";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "about", href: "#about", id: "01" },
    { name: "skills", href: "#skills", id: "02" },
    { name: "projects", href: "#projects", id: "03" },
    { name: "contact", href: "#contact", id: "04" },
  ];

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
            <motion.div
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
              <span className="text-primary-accent">Abhinav</span>_
            </motion.div>

            <div className="hidden md:flex gap-4 items-center">
              {navLinks.map((link, i) => (
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

              <motion.button
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
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen bg-background text-[#EAEAEA]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 pt-20">
        {/* Background Watermark */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none font-mono text-[10px] leading-relaxed overflow-hidden p-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {`{ "identity": "Abhinav", "role": "Backend Architect", "stack": ["Node.js", "TypeScript", "Go", "AWS", "PostgreSQL", "Redis", "Docker", "Kubernetes"], "philosophy": "Scale or Die", "location": "Global", "status": "Available" } `}
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
            Abhinav_<span className="cursor-blink">|</span>
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
      md:px-6
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

                <span className="hover:text-white transition-colors duration-300">
                  Backend Engineer
                </span>

                <span className="text-white/20 hidden sm:inline">·</span>

                <span className="hover:text-white transition-colors duration-300">
                  Node.js
                </span>

                <span className="text-white/20 hidden sm:inline">·</span>

                <span className="hover:text-white transition-colors duration-300">
                  AWS
                </span>

                <span className="text-white/20 hidden sm:inline">·</span>

                <span className="hover:text-white transition-colors duration-300">
                  Docker
                </span>

                <span className="text-white/20 hidden sm:inline">·</span>

                <span className="hover:text-white transition-colors duration-300">
                  Redis
                </span>
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
              {/* glass reflection */}
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
              href="https://drive.google.com/file/d/1OiMRLJkQVnhNbErYbsAwlJjJVLBDcojd/view?usp=drive_link"
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
            id="01"
            title="who_am_i"
            subtitle="Engineering resilient systems for the modern web."
          />
          <p className="text-muted text-lg leading-relaxed">
            I specialize in building scalable backend architectures that handle
            high-concurrency traffic with ease. My approach combines the raw
            efficiency of system-level thinking with the flexibility of modern
            cloud-native technologies.
          </p>
          <div className="pt-4">
            <div className="inline-flex items-center gap-3 p-4 bg-surface border border-outline/20">
              <div className="w-3 h-3 bg-primary-accent rounded-full shadow-[0_0_10px_#00FFA3]" />
              <span className="font-mono text-sm">
                Currently optimizing microservices at SCALE_TECH
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <StatCard value="1.5+" label="years of heavy coding" highlight />
          <StatCard value="1200+" label="commits pushed" />
          <StatCard value="99.9%" label="percent uptime target" />
          <StatCard value="5+" label="modules built" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-8 bg-[#070708]">
        <div className="max-w-screen-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeader
              id="02"
              title="technical_stack"
              subtitle="Core Competencies"
            />
            <div className="text-muted font-mono text-xs mb-12 md:mb-0">
              LOAD_VERSION: 2.4.0-STABLE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="font-mono font-bold flex items-center gap-2">
                <Code2 size={16} className="text-primary-accent" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {["TypeScript", "Node.js", "JavaScript", "Java"].map((s) => (
                  <SkillChip key={s} name={s} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-mono font-bold flex items-center gap-2">
                <Database size={16} className="text-primary-accent" />
                Infrastructure
              </h3>
              <div className="flex flex-wrap gap-3">
                {["MongoDB", "Express", "PostgreSQL", "Prisma", "Redis"].map(
                  (s) => (
                    <SkillChip key={s} name={s} />
                  ),
                )}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-mono font-bold flex items-center gap-2">
                <Cloud size={16} className="text-primary-accent" />
                DevOps
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "AWS (Lambda, S3, EC2, etc)",
                  "Docker",
                  "Serverless",
                  "Git",
                  "GCP (Basic)",
                ].map((s) => (
                  <SkillChip key={s} name={s} />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-mono font-bold flex items-center gap-2">
                <CodeXml size={16} className="text-primary-accent" />
                FrontEnd
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "Framer Motion",
                  "Tailwind CSS",
                  "Redux",
                ].map((s) => (
                  <SkillChip key={s} name={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 px-8">
        <SectionHeader
          id="03"
          title="built_with_logic"
          subtitle="Selected Projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            id="0xf7c3a1"
            title="Backend SAM Infra"
            description="Architected and deployed a production-ready serverless backend on AWS SAM - solo. Hybrid microservices + monolith design where every feature maps to its own Lambda, enabling macro-to-micro scaling by just plugging in a new function. Includes Lambda layers for shared deps, Secrets Manager for env management across dev/prod, S3, API Gateway, EventBridge, and SQS - all wired for local, dev, and production parity."
            tags={[
              "AWS SAM",
              "Lambda",
              "Node.js",
              "TypeScript",
              "Secrets Manager",
              "API Gateway",
              "S3",
              "SQS",
              "EventBridge",
              "...",
            ]}
            featured
          />
          <ProjectCard
            id="0x9d3e81"
            title="Studio(GYM) Booking System"
            description="A full-stack platform for booking gym/studio slots, consisting of a user-facing website, a dedicated mobile app for studio owners to list and manage their gyms, and an admin panel to handle users, bookings, payments, and support queries."
            tags={[
              "Node.js",
              "Express.js",
              "MongoDB",
              "AWS",
              "Redis",
              "Serverless",
              "...",
            ]}
            liveLink="https://www.fitnearn.com/"
          />
          <ProjectCard
            id="0x4f2a99"
            title="Avira.ai "
            description="A voice-based mock interview platform that generates interview sessions tailored to a candidate’s resume and job description."
            tags={["Next.JS", "Gemini API", "MongoDB", "TypeScript"]}
            image="https://github.com/abhinav2-3/Assets/blob/master/Screenshot%202026-03-07%20121033.png?raw=true"
            featured
            liveLink="https://avira-interview-ai.vercel.app/"
            githubLink="https://github.com/abhinav2-3/Avira-Interview-AI.git"
          />
          <ProjectCard
            id="0x7b1c42"
            title="PayTM Wallet"
            description="A digital wallet app that allows users to add and transfer money, view transaction history, and make payments using secure protocols."
            tags={["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma"]}
            image="https://raw.githubusercontent.com/abhinav2-3/Assets/refs/heads/master/project/PaytmWallet.jpeg"
            liveLink="https://paytm-user-app-wine.vercel.app/"
            githubLink="https://github.com/abhinav2-3/paytm.git"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-28 px-8 bg-[#070708]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            id="04"
            title="professional_timeline"
            subtitle="Career Journey"
          />

          <div className="relative pl-8 md:pl-0 mt-16">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-outline -translate-x-1/2 hidden md:block" />

            <ExperienceItem
              year="June (2025) - Present"
              role="Full Stack Engineer (Full-Time)"
              company="FitnEarn"
              description="Owned and shipped the complete Studio module end-to-end - website, app, and backend - all in production. Contributed significantly across 5+ modules in both the website and admin panel. Currently leading the migration of the entire backend to a custom AWS SAM setup with a distributed microservices infrastructure designed for independent service scaling."
            />
            <ExperienceItem
              year="November (2024) - June (2025)"
              role="Full Stack Engineer (Intern)"
              company="FitnEarn"
              description="Integrated PayU payment gateway for in-app transactions. Built the e-commerce backend covering both the website and admin panel. Developed the studio listing system for the public-facing website."
              reverse
            />
            <ExperienceItem
              year="July (2024) - Novemeber(2024)"
              role="Backend Developer Intern"
              company="Rablo"
              description="Built and maintained online tutoring platform for K-12 students. Implemented features like tutor onboard journey, tutor search, and subscription based payments."
              isLast
            />
          </div>
        </div>
      </section>

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

        <div className=" relative z-10">
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
                id="05"
                title="initiate_handshake"
                subtitle="Let's build something."
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
                I'm currently looking for new opportunities to solve complex
                technical challenges. Whether you have a question or just want
                to talk shop, my inbox is open.
              </p>

              <div className="flex flex-col gap-10 items-center pt-4">
                {/* email glass card */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="mailto:abhinavmaurya476@gmail.com"
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
                  {/* reflection */}
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
                    abhinavmaurya476@gmail.com
                  </div>
                </motion.a>

                {/* socials */}
                <div className="flex flex-wrap justify-center gap-5 pt-2">
                  {[
                    {
                      name: "github",
                      icon: <Terminal size={18} />,
                      href: "https://github.com/abhinav2-3",
                      target: "_blank",
                    },
                    {
                      name: "linkedin",
                      icon: <Globe size={18} />,
                      href: "https://www.linkedin.com/in/abhinav-maurya-02b7b225b/",
                      target: "_blank",
                    },
                    {
                      name: "twitter",
                      icon: <MessageSquare size={18} />,
                      href: "https://x.com/Abhinav_2_3",
                      target: "_blank",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.target}
                      rel="noopener noreferrer"
                      className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
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
                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                      />

                      <span className="relative z-10">{social.icon}</span>

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
        {/* subtle top glow */}
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
            <span className="text-primary-accent">Abhinav</span>_
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
            // {new Date().getFullYear()}. built_with_logic
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
            Designed & Built by Abhinav
          </div>
        </div>
      </footer>
    </div>
  );
}
