import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
  CodeXml
} from 'lucide-react';
import { cn } from './lib/utils';
import ProjectCard from './components/ProjectCard';
import ExperienceItem from './components/ExperienceCard';
import SectionHeader from './components/SectionHeader';
import StatCard from './components/StatCard';
import SkillChip from './components/SkillChip';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'about', href: '#about', id: '01' },
    { name: 'skills', href: '#skills', id: '02' },
    { name: 'projects', href: '#projects', id: '03' },
    { name: 'contact', href: '#contact', id: '04' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      scrolled
        ? "bg-background/80 backdrop-blur-xl border-outline/20 py-4 shadow-[0_0_20px_rgba(0,255,163,0.05)]"
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold font-mono text-primary-accent tracking-tighter uppercase"
        >
          Abhinav_
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="font-mono text-sm text-muted hover:text-primary-accent transition-colors"
            >
              <span className="opacity-50">// {link.id}.</span> {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-primary-accent text-background px-4 py-2 font-mono text-sm font-bold active:scale-95 transition-transform"
          >
            &gt; console.log
          </motion.button>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        {/* Background Watermark */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none font-mono text-[10px] leading-relaxed overflow-hidden p-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {`{ "identity": "Abhinav", "role": "Backend Architect", "stack": ["Node.js", "TypeScript", "Go", "AWS", "PostgreSQL", "Redis", "Docker", "Kubernetes"], "philosophy": "Scale or Die", "location": "Global", "status": "Available" } `}
            </div>
          ))}
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-accent/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-6xl md:text-9xl font-bold text-primary-accent tracking-tighter"
          >
            Abhinav_<span className="cursor-blink">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl font-mono text-muted max-w-2xl mx-auto leading-relaxed"
          >
            <span className="text-primary-accent">//</span> Backend Engineer · Node.js · AWS · Docker
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6"
          >
            <a href="#projects" className="w-full md:w-auto px-8 py-4 bg-primary-accent text-background font-mono font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2">
              <Terminal size={18} />
              &gt; View Projects
            </a>
            <a href="https://drive.google.com/file/d/1OiMRLJkQVnhNbErYbsAwlJjJVLBDcojd/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-8 py-4 border border-outline/30 text-primary-accent font-mono hover:bg-primary-accent/5 transition-all flex items-center justify-center gap-2">
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted/30"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <SectionHeader id="01" title="who_am_i" subtitle="Engineering resilient systems for the modern web." />
          <p className="text-muted text-lg leading-relaxed">
            I specialize in building scalable backend architectures that handle high-concurrency traffic with ease. My approach combines the raw efficiency of system-level thinking with the flexibility of modern cloud-native technologies.
          </p>
          <div className="pt-4">
            <div className="inline-flex items-center gap-3 p-4 bg-surface border border-outline/20">
              <div className="w-3 h-3 bg-primary-accent rounded-full shadow-[0_0_10px_#00FFA3]" />
              <span className="font-mono text-sm">Currently optimizing microservices at SCALE_TECH</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <StatCard value="1.3+" label="years of heavy coding" highlight />
          <StatCard value="1200+" label="commits pushed" />
          <StatCard value="99.9%" label="percent uptime target" />
          <StatCard value="5+" label="modules built" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-[#070708]">
        <div className="max-w-screen-xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeader id="02" title="technical_stack" subtitle="Core Competencies" />
            <div className="text-muted font-mono text-xs mb-12 md:mb-0">LOAD_VERSION: 2.4.0-STABLE</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="font-mono font-bold flex items-center gap-2">
                <Code2 size={16} className="text-primary-accent" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {['TypeScript', 'Node.js', 'JavaScript', 'Java'].map(s => <SkillChip key={s} name={s} />)}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-mono font-bold flex items-center gap-2">
                <Database size={16} className="text-primary-accent" />
                Infrastructure
              </h3>
              <div className="flex flex-wrap gap-3">
                {['MongoDB', 'Express', 'PostgreSQL', 'Prisma', 'Redis'].map(s => <SkillChip key={s} name={s} />)}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-mono font-bold flex items-center gap-2">
                <Cloud size={16} className="text-primary-accent" />
                DevOps
              </h3>
              <div className="flex flex-wrap gap-3">
                {['AWS (Lambda, S3, EC2, etc)', 'Docker', 'Serverless', 'Git', 'GCP (Basic)'].map(s => <SkillChip key={s} name={s} />)}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-mono font-bold flex items-center gap-2">
                <CodeXml size={16} className="text-primary-accent" />
                FrontEnd
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'Redux'].map(s => <SkillChip key={s} name={s} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-screen-xl mx-auto">
        <SectionHeader id="03" title="built_with_logic" subtitle="Selected Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            id="0xf7c3a1"
            title="Backend SAM Infra"
            description="Architected and deployed a production-ready serverless backend on AWS SAM - solo. Hybrid microservices + monolith design where every feature maps to its own Lambda, enabling macro-to-micro scaling by just plugging in a new function. Includes Lambda layers for shared deps, Secrets Manager for env management across dev/prod, S3, API Gateway, EventBridge, and SQS - all wired for local, dev, and production parity."
            tags={['AWS SAM', 'Lambda', 'Node.js', 'TypeScript', 'Secrets Manager', 'API Gateway', 'S3', 'SQS', 'EventBridge', '...']}
            featured
          />
          <ProjectCard
            id="0x9d3e81"
            title="Studio(GYM) Booking System"
            description="A full-stack platform for booking gym/studio slots, consisting of a user-facing website, a dedicated mobile app for studio owners to list and manage their gyms, and an admin panel to handle users, bookings, payments, and support queries."
            tags={['Node.js', 'Express.js', 'MongoDB', 'AWS', 'Redis', 'Serverless', '...']}
            liveLink='https://www.fitnearn.com/'
          />
          <ProjectCard
            id="0x4f2a99"
            title="Avira.ai "
            description="A voice-based mock interview platform that generates interview sessions tailored to a candidate’s resume and job description."
            tags={['Next.JS', 'Gemini API', 'MongoDB', 'TypeScript']}
            image="https://github.com/abhinav2-3/Assets/blob/master/Screenshot%202026-03-07%20121033.png?raw=true"
            featured
            liveLink="https://avira-interview-ai.vercel.app/"
            githubLink="https://github.com/abhinav2-3/Avira-Interview-AI.git"
          />
          <ProjectCard
            id="0x7b1c42"
            title="PayTM Wallet"
            description="A digital wallet app that allows users to add and transfer money, view transaction history, and make payments using secure protocols."
            tags={['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma']}
            image="https://raw.githubusercontent.com/abhinav2-3/Assets/refs/heads/master/project/PaytmWallet.jpeg"
            liveLink='https://paytm-user-app-wine.vercel.app/'
            githubLink='https://github.com/abhinav2-3/paytm.git'
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-[#070708]">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader id="04" title="professional_timeline" subtitle="Career Journey" />

          <div className="relative pl-8 md:pl-0 mt-16">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-outline/20 -translate-x-1/2 hidden md:block" />

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

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-screen-md mx-auto text-center space-y-12">
          <SectionHeader id="05" title="initiate_handshake" subtitle="Let's build something." />

          <p className="text-muted text-lg">
            I'm currently looking for new opportunities to solve complex technical challenges. Whether you have a question or just want to talk shop, my inbox is open.
          </p>

          <div className="flex flex-col gap-8 items-center pt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:abhinavmaurya476@gmail.com"
              className="group font-mono text-l md:text-4xl text-primary-accent flex items-center gap-4 hover:opacity-80 transition-all"
            >
              <Mail size={32} />
              abhinavmaurya476@gmail.com
            </motion.a>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              {[
                { name: 'github', icon: <Terminal size={18} />, href: 'https://github.com/abhinav2-3', target: "_blank" },
                { name: 'linkedin', icon: <Globe size={18} />, href: 'https://www.linkedin.com/in/abhinav-maurya-02b7b225b/', target: "_blank" },
                { name: 'twitter', icon: <MessageSquare size={18} />, href: 'https://x.com/Abhinav_2_3', target: "_blank" },
              ].map(social => (
                <a key={social.name} href={social.href} target={social.target} rel='noopener noreferrer' className="text-muted hover:text-primary-accent font-mono text-sm uppercase tracking-widest flex items-center gap-2 transition-colors">
                  {social.icon} {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-outline/10 bg-background">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white font-bold font-mono tracking-tighter text-xl">Abhinav_</div>

          <div className="text-muted font-mono text-[10px] uppercase tracking-widest">
            // {new Date().getFullYear()}. built_with_logic
          </div>

          <div className="text-muted font-mono text-[10px] uppercase tracking-widest">
            Designed & Built by Abhinav
          </div>
        </div>
      </footer>
    </div>
  );
}
