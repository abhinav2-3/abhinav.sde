export interface WatermarkData {
  identity: string;
  role: string;
  stack: string[];
  philosophy: string;
  location: string;
  status: string;
}

export interface ProfileInfo {
  name: string;
  handle: string;
  watermark: WatermarkData;
  heroBadges: string[];
  resumeUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface AboutInfo {
  id: string;
  title: string;
  subtitle: string;
  bio: string;
  currentStatus: string;
  stats: StatItem[];
}

export interface SkillCategory {
  name: string;
  icon: "Code2" | "Database" | "Cloud" | "CodeXml" | string;
  skills: string[];
}

export interface SkillsInfo {
  id: string;
  title: string;
  subtitle: string;
  version: string;
  categories: SkillCategory[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  liveLink?: string;
  githubLink?: string;
}

export interface ProjectsInfo {
  id: string;
  title: string;
  subtitle: string;
  items: ProjectItem[];
}

export interface ExperienceItemData {
  year: string;
  role: string;
  company: string;
  description: string;
  isLast?: boolean;
  reverse?: boolean;
}

export interface ExperienceInfo {
  id: string;
  title: string;
  subtitle: string;
  items: ExperienceItemData[];
}

export interface SocialLink {
  name: string;
  icon: "Terminal" | "Globe" | "MessageSquare" | string;
  href: string;
}

export interface ContactInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  socials: SocialLink[];
}

export interface NavigationLink {
  id: string;
  name: string;
  href: string;
}

export interface FooterInfo {
  handle: string;
  copyrightTagline: string;
  credit: string;
}

export interface PortfolioData {
  profile: ProfileInfo;
  navigation: NavigationLink[];
  about: AboutInfo;
  skills: SkillsInfo;
  projects: ProjectsInfo;
  experience: ExperienceInfo;
  contact: ContactInfo;
  footer: FooterInfo;
}
