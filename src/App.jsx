import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
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
  Calendar,
  Star,
  GitFork
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

const Paiza = (props) => (
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
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 8v8" />
    <path d="M9 8h4.5a3.5 3.5 0 0 1 0 7H9" />
  </svg>
);

const Wantedly = (props) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M7 9l2.5 6.5L12 11l2.5 4.5L17 9" />
  </svg>
);

// --- モックデータ（ご自身の情報に書き換えてください） ---

const PROFILE = {
  name: "tankj21",
  role: "Software Engineer / Frontend Developer",
  bio: "ユーザー体験を重視したモダンなWebアプリケーションの開発に情熱を注いでいます。ReactやTypeScriptを用いたフロントエンド開発が得意です。",
  github: "https://github.com/tankj21",
  linkedin: "https://www.linkedin.com/in/%E5%84%AA%E5%A4%AA-%E5%BE%8C%E8%97%A4-38a019352/?skipRedirect=true", // LinkedInのURL
  paiza: "https://paiza.jp/user/your-profile", // paizaのURL
  wantedly: "https://www.wantedly.com/id/yuta_goto_iput", // WantedlyのURL
  email: "yutaj21@gmail.com"
};

const EXPERIENCE = [
  {
    id: 1,
    role: "時間帯責任者/SHM",
    company: "日本マクドナルド株式会社",
    period: "2021年12月 - 現在",
    description: "時間帯責任者として店舗の運営業務全般を担当。"
  },
  {
    id: 2,
    role: "PdM（インターン）",
    company: "株式会社パブリックテクノロジーズ",
    period: "2026年1月 - 2026年2月",
    description: "行政向けAIサービスの新規ワークフロー案の作成・提案、社内AI活用の施策検討"
  }
];

const EDUCATION = [
  {
    id: 1,
    degree: "工科学部 情報工学科",
    school: "東京国際工科専門職大学",
    period: "2024年4月 - 2028年3月",
    description: "プログラミングからデータベースまで基本的な技術を授業内で学んでおります。AIコースはAIについてより深く学び、仕組み、利用法などを主にPythonを利用し学んでいます。"
  },
  {
    id: 2,
    degree: "普通科",
    school: "S高等学校",
    period: "2021年4月 - 2024年3月",
    description: ""
  }
];

const SKILLS = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6 mb-4 text-blue-400" />,
    items: [
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
      { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain colored" },
      { name: "HTML/CSS", iconClass: "devicon-html5-plain colored" }
    ]
  },
  {
    category: "Backend",
    icon: <Terminal className="w-6 h-6 mb-4 text-green-400" />,
    items: [
      { name: "Node.js", iconClass: "devicon-nodejs-plain-wordmark colored" },
      { name: "Express", iconClass: "devicon-express-original" },
      { name: "Python", iconClass: "devicon-python-plain colored" },
      { name: "REST API", iconClass: "devicon-fastapi-plain colored" },
      { name: "GraphQL", iconClass: "devicon-graphql-plain colored" }
    ]
  },
  {
    category: "Tools & Others",
    icon: <Cpu className="w-6 h-6 mb-4 text-purple-400" />,
    items: [
      { name: "Git/GitHub", iconClass: "devicon-github-original" },
      { name: "Docker", iconClass: "devicon-docker-plain colored" },
      { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Figma", iconClass: "devicon-figma-plain colored" },
      { name: "Agile/Scrum", iconClass: "devicon-jira-plain colored" }
    ]
  }
];

// --- コンポーネント ---

const Navbar = ({ currentView, setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view, e) => {
    if (view === 'repositories') {
      e.preventDefault();
      setCurrentView('repositories');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else {
      if (currentView !== 'home') {
        setCurrentView('home');
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentView === 'repositories' ? 'bg-slate-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleNavClick('home', e)} className="text-xl font-bold tracking-tighter text-slate-100 hover:text-blue-400 transition-colors">
          tankj21<span className="text-blue-500">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" onClick={(e) => handleNavClick('home', e)} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">About</a>
          <a href="#history" onClick={(e) => handleNavClick('home', e)} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">History</a>
          <a href="#skills" onClick={(e) => handleNavClick('home', e)} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Skills</a>
          <a href="#" onClick={(e) => handleNavClick('repositories', e)} className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">Repositories</a>

          <div className="flex items-center space-x-4 border-l border-slate-700 pl-6">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={PROFILE.wantedly} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="Wantedly">
              <Wantedly className="w-5 h-5" />
            </a>
            <a href={PROFILE.paiza} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="paiza">
              <Paiza className="w-5 h-5" />
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
          <a href="#about" onClick={(e) => handleNavClick('home', e)} className="text-slate-200 hover:text-blue-400 font-medium text-lg">About</a>
          <a href="#history" onClick={(e) => handleNavClick('home', e)} className="text-slate-200 hover:text-blue-400 font-medium text-lg">History</a>
          <a href="#skills" onClick={(e) => handleNavClick('home', e)} className="text-slate-200 hover:text-blue-400 font-medium text-lg">Skills</a>
          <a href="#" onClick={(e) => handleNavClick('repositories', e)} className="text-blue-400 hover:text-blue-300 font-medium text-lg">Repositories</a>

          <div className="flex space-x-6 pt-4 border-t border-slate-700 w-2/3 justify-center">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400" title="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400" title="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={PROFILE.wantedly} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400" title="Wantedly">
              <Wantedly className="w-6 h-6" />
            </a>
            <a href={PROFILE.paiza} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400" title="paiza">
              <Paiza className="w-6 h-6" />
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
          <div className="md:hidden flex items-center space-x-3 ml-2">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={PROFILE.wantedly} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400" title="Wantedly">
              <Wantedly className="w-5 h-5" />
            </a>
            <a href={PROFILE.paiza} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400" title="paiza">
              <Paiza className="w-5 h-5" />
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
      <div className="flex flex-col gap-16">
        {/* Experience Timeline */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
              職歴
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
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
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
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
            <h3 className="text-xl font-bold text-slate-200 mb-6">{skillGroup.category}</h3>
            <ul className="space-y-4">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="flex items-center text-slate-300 group">
                  <div className="w-8 h-8 rounded bg-slate-900/50 flex items-center justify-center mr-3 group-hover:bg-slate-700 transition-colors">
                    <i className={`${item.iconClass} text-xl`}></i>
                  </div>
                  <span className="font-medium group-hover:text-blue-400 transition-colors">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const ReadmeModal = ({ repo, onClose }) => {
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!repo) return;

    setLoading(true);
    fetch(`https://api.github.com/repos/tankj21/${repo.name}/readme`)
      .then(res => res.json())
      .then(data => {
        if (data.download_url) {
          return fetch(data.download_url).then(r => r.text());
        }
        throw new Error('No README');
      })
      .then(text => {
        setReadme(text);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setReadme('READMEが見つかりませんでした。');
        setLoading(false);
      });
  }, [repo]);

  if (!repo) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div
        className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <Code2 className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-slate-100 truncate">{repo.name}</h3>
          </div>
          <div className="flex items-center space-x-4">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 flex items-center text-sm transition-colors hidden sm:flex">
              <Github className="w-5 h-5 mr-1" /> View on GitHub
            </a>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-900">
          {loading ? (
            <div className="flex justify-center items-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <article className="prose prose-invert prose-blue max-w-none prose-img:rounded-xl prose-img:shadow-lg prose-a:text-blue-400 hover:prose-a:text-blue-300">
              <ReactMarkdown>{readme}</ReactMarkdown>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/tankj21/repos?sort=updated&per_page=10')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const filtered = data.filter(repo => !repo.fork);
          setProjects(filtered.slice(0, 6)); // Display top 6 on home page
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedRepo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedRepo]);

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center space-x-4 mb-10">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center">
          <Code2 className="w-8 h-8 mr-3 text-blue-400" />
          最近のプロジェクト
        </h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedRepo(project)}
              className="min-w-[320px] md:min-w-[400px] snap-start shrink-0 bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col h-64 cursor-pointer hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-blue-500/50 group"
            >
              <div className="flex justify-between items-start mb-4">
                <Code2 className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                  {project.homepage && (
                    <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors truncate" title={project.name}>
                {project.name}
              </h3>

              <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                {project.description || "説明がありません。クリックしてREADMEを読む"}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-slate-400 text-xs">
                    <Star className="w-3.5 h-3.5 mr-1 text-yellow-500" />
                    {project.stargazers_count}
                  </div>
                  <div className="flex items-center text-slate-400 text-xs">
                    <GitFork className="w-3.5 h-3.5 mr-1" />
                    {project.forks_count}
                  </div>
                </div>
                {project.language && (
                  <span className="text-xs font-mono text-blue-300 bg-blue-900/30 px-2 py-1 rounded-md">
                    {project.language}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedRepo && (
        <ReadmeModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
      )}
    </section>
  );
};

const RepositoriesPage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    if (selectedRepo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedRepo]);

  useEffect(() => {
    fetch('https://api.github.com/users/tankj21/repos?sort=updated')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-500 min-h-screen">
      <div className="flex items-center space-x-4 mb-10">
        <h1 className="text-4xl font-extrabold text-slate-100 flex items-center">
          <Github className="w-10 h-10 mr-4 text-blue-400" />
          Repositories
        </h1>
      </div>

      <p className="text-slate-400 mb-12 text-lg">
        GitHubからのすべての公開レポジトリ一覧です。
      </p>

      {loading ? (
        <div className="flex justify-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              onClick={() => setSelectedRepo(repo)}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col h-full hover:border-blue-500/50 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="flex justify-between items-start mb-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-lg font-bold text-blue-400 group-hover:text-blue-300 hover:underline truncate"
                  title={repo.name}
                >
                  {repo.name}
                </a>
                <div className="flex space-x-2 text-slate-400" onClick={(e) => e.stopPropagation()}>
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="Live Demo">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-6 flex-grow">
                {repo.description || "説明がありません。クリックしてREADMEを読む"}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                <div className="flex items-center space-x-4">
                  {repo.language && (
                    <div className="flex items-center text-slate-400 text-xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></div>
                      {repo.language}
                    </div>
                  )}
                  <div className="flex items-center text-slate-400 text-xs">
                    <Star className="w-3.5 h-3.5 mr-1 text-yellow-500" />
                    {repo.stargazers_count}
                  </div>
                </div>
                <div className="text-xs text-slate-500">
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedRepo && (
        <ReadmeModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
      )}
    </div>
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
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={PROFILE.wantedly} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="Wantedly">
            <Wantedly className="w-6 h-6" />
          </a>
          <a href={PROFILE.paiza} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="paiza">
            <Paiza className="w-6 h-6" />
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
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      <main className="max-w-6xl mx-auto px-6">
        {currentView === 'home' ? (
          <div className="py-12 space-y-32">
            <Hero />
            <About />
            <HistorySection />
            <SkillsSection />
            <ProjectsSection />
            <Contact />
          </div>
        ) : (
          <RepositoriesPage />
        )}
      </main>

      <Footer />
    </div>
  );
}
