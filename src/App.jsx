import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  User, 
  Briefcase, 
  GraduationCap,
  Building2,
  ChevronRight, 
  Menu, 
  X,
  Terminal,
  Cpu,
  Globe,
  Calendar
} from 'lucide-react';

const Github = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- モックデータ（ご自身の情報に書き換えてください） ---

const PROFILE = {
  name: "tankj21",
  role: "Software Engineer / Frontend Developer",
  bio: "ユーザー体験を重視したモダンなWebアプリケーションの開発に情熱を注いでいます。ReactやTypeScriptを用いたフロントエンド開発が得意です。",
  github: "https://github.com/tankj21",
  linkedin: "https://linkedin.com/in/your-profile", // LinkedInのURL
  email: "your-email@example.com"
};

const EXPERIENCE = [
  {
    id: 1,
    role: "フロントエンドエンジニア",
    company: "株式会社〇〇",
    period: "2023年4月 - 現在",
    description: "Reactを用いた自社SaaSプロダクトの開発。UI/UXの改善、パフォーマンスチューニングを担当し、ロード時間を30%削減。"
  },
  {
    id: 2,
    role: "Webエンジニア（インターン）",
    company: "△△テクノロジー",
    period: "2022年8月 - 2023年3月",
    description: "Next.jsとTypeScriptを使用したコーポレートサイトのリニューアルプロジェクトに参画。レスポンシブ対応やCMS連携を実装。"
  }
];

const EDUCATION = [
  {
    id: 1,
    degree: "情報理工学部 情報科学科",
    school: "〇〇大学",
    period: "2019年4月 - 2023年3月",
    description: "計算機科学の基礎、アルゴリズム、データ構造を学ぶ。研究室では機械学習を用いた自然言語処理を専攻。"
  },
  {
    id: 2,
    degree: "普通科",
    school: "〇〇県立〇〇高等学校",
    period: "2016年4月 - 2019年3月",
    description: "プログラミング部に所属し、競技プログラミングに取り組む。"
  }
];

const SKILLS = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6 mb-4 text-blue-400" />,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"]
  },
  {
    category: "Backend",
    icon: <Terminal className="w-6 h-6 mb-4 text-green-400" />,
    items: ["Node.js", "Express", "Python", "REST API", "GraphQL"]
  },
  {
    category: "Tools & Others",
    icon: <Cpu className="w-6 h-6 mb-4 text-purple-400" />,
    items: ["Git/GitHub", "Docker", "AWS", "Figma", "Agile/Scrum"]
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce プラットフォーム",
    description: "Next.jsとStripeを使用したフルスタックのECサイト。カート機能から決済処理までを一貫して実装しました。",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "タスク管理アプリケーション",
    description: "ReactとFirebaseを活用したリアルタイムタスク管理ツール。ドラッグ＆ドロップでのステータス変更に対応。",
    tags: ["React", "Firebase", "Zustand", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "天気予報ダッシュボード",
    description: "OpenWeather APIを利用し、現在地や指定した都市の天気をグラフィカルに表示するダッシュボード。",
    tags: ["Vue.js", "Chart.js", "REST API", "CSS Modules"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

// --- コンポーネント ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'History', href: '#history' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-slate-100 hover:text-blue-400 transition-colors">
          tankj21<span className="text-blue-500">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 border-l border-slate-700 pl-6">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 shadow-xl py-6 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-200 hover:text-blue-400 font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-slate-700 w-1/2 justify-center">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">
              <Github className="w-6 h-6" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center pt-20">
      <div className="space-y-6 max-w-3xl">
        <p className="text-blue-400 font-mono text-lg flex items-center">
          <Terminal className="w-5 h-5 mr-2" />
          Hello, world! I am
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight">
          {PROFILE.name}
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-400 mt-2">
          {PROFILE.role}
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mt-6">
          {PROFILE.bio}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center"
          >
            プロジェクトを見る
            <ChevronRight className="w-4 h-4 ml-2" />
          </a>
          <a 
            href={`mailto:${PROFILE.email}`} 
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-lg transition-all flex items-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            連絡する
          </a>
          {/* Social Links on Mobile Hero */}
          <div className="md:hidden flex items-center space-x-4 ml-2">
             <a href={PROFILE.github} className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400">
                <Github className="w-5 h-5" />
             </a>
             <a href={PROFILE.linkedin} className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="flex items-center space-x-4 mb-10">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center">
          <User className="w-8 h-8 mr-3 text-blue-400" />
          私について
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
      </div>
      
      {/* 画像を削除し、テキストのコンテナを全幅（max-w-3xl）に調整しました */}
      <div className="max-w-3xl space-y-4 text-slate-400 leading-relaxed">
        <p>
          はじめまして。私はWeb技術の進化に常にアンテナを張り、使いやすく美しいUI/UXを実現することを目指しているエンジニアです。
        </p>
        <p>
          プログラミングを始めたきっかけから現在に至るまで、様々な技術スタックに触れてきましたが、特にReactエコシステムを用いたフロントエンド開発において強みを持っています。
        </p>
        <p>
          チームでの開発経験も豊富で、アジャイルな環境でのコミュニケーションや、コードレビューを通じた品質向上にも貢献できます。休日は新しい技術の学習や個人開発に取り組んでいます。
        </p>
      </div>
    </section>
  );
};

const HistorySection = () => {
  return (
    <section id="history" className="scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience Timeline */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
              職歴
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative flex items-start group">
                <div className="absolute left-0 mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 border border-blue-500 group-hover:bg-blue-500 transition-colors z-10"></div>
                <div className="ml-10">
                  <h3 className="text-xl font-bold text-slate-200">{job.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-slate-400 mt-1 mb-3 space-y-1 sm:space-y-0 sm:space-x-4">
                    <span className="flex items-center"><Building2 className="w-4 h-4 mr-1" />{job.company}</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{job.period}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-400" />
              学歴
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="relative flex items-start group">
                <div className="absolute left-0 mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 border border-purple-500 group-hover:bg-purple-500 transition-colors z-10"></div>
                <div className="ml-10">
                  <h3 className="text-xl font-bold text-slate-200">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-slate-400 mt-1 mb-3 space-y-1 sm:space-y-0 sm:space-x-4">
                    <span className="flex items-center"><Building2 className="w-4 h-4 mr-1" />{edu.school}</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{edu.period}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="flex items-center space-x-4 mb-10">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center">
          <Code2 className="w-8 h-8 mr-3 text-blue-400" />
          スキルセット
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
            {skillGroup.icon}
            <h3 className="text-xl font-bold text-slate-200 mb-4">{skillGroup.category}</h3>
            <ul className="space-y-2">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="flex items-center text-slate-400 before:content-['▹'] before:text-blue-500 before:mr-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center space-x-4 mb-10">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center">
          <Code2 className="w-8 h-8 mr-3 text-blue-400" />
          プロジェクト
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
            <div className="flex justify-between items-start mb-4">
              <Code2 className="w-10 h-10 text-blue-400" />
              <div className="flex space-x-3">
                <a href={project.githubUrl} className="text-slate-400 hover:text-blue-400 transition-colors" title="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.liveUrl} className="text-slate-400 hover:text-blue-400 transition-colors" title="Live Demo">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <li key={i} className="text-xs font-mono text-blue-300 bg-blue-900/30 px-2 py-1 rounded-md">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 text-center max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-slate-100 mb-6">お問い合わせ</h2>
      <p className="text-slate-400 mb-8 leading-relaxed">
        現在、新しい機会を探しています。質問がある場合や、ただ挨拶したいだけの場合でも、お気軽にご連絡ください。できる限り早く返信いたします。
      </p>
      <a 
        href={`mailto:${PROFILE.email}`}
        className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium rounded-lg transition-all"
      >
        <Mail className="w-5 h-5 mr-2" />
        メッセージを送る
      </a>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-slate-500 text-sm font-mono">
          Designed & Built by {PROFILE.name}
        </p>
        <p className="text-slate-600 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        <Hero />
        <About />
        <HistorySection />
        <SkillsSection />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
