import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Star, Code2, Terminal } from 'lucide-react';

const GithubIcon = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
import './index.css';

const extraProjects = [
  {
    name: 'Noctis',
    description: 'PythonでのDiscordBot開発。公開してません。',
    html_url: 'https://github.com/tankj21/Noctis',
    language: 'Python',
    stargazers_count: 0,
    isPrivate: true
  }
];

const customImages = {
  'kabukicho': 'https://github.com/tankj21/kabukicho/blob/main/source/img/kabuki_title.png?raw=true'
};

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/tankj21/repos?sort=updated');
        if (!response.ok) throw new Error('Network response was not ok');
        const repos = await response.json();
        
        const publicRepos = repos.filter(repo => !repo.fork);
        setProjects([...extraProjects, ...publicRepos]);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="logo">tankj21</a>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container" style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section id="hero" className="section">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="https://avatars.githubusercontent.com/u/69007235?v=4" 
              alt="tankj21" 
              className="mb-8"
              style={{ width: '160px', height: '160px', borderRadius: '50%', border: '4px solid var(--accent-primary)', padding: '4px' }}
              onError={(e) => { e.target.src = 'https://placehold.co/160x160/4F46E5/FFFFFF?text=tankj21' }}
            />
            <h1 className="mb-4">
              こんにちは <span className="gradient-text">tankj21</span> です。
            </h1>
            <p className="text-secondary mb-8" style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
              I'm a student at International Professional University of Technology in Tokyo.
            </p>
            <a href="#projects" className="btn btn-primary">
              <Code2 size={20} />
              See the projects!!
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>About Me</h2>
            <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="flex gap-4 items-center mb-6">
                <Terminal size={32} className="gradient-text" />
                <h3 style={{ fontSize: '1.5rem' }}>Profile</h3>
              </div>
              <p className="text-secondary mb-8" style={{ fontSize: '1.1rem' }}>
                東京国際工科専門職大学 学生 AI戦略コース 在籍中<br/><br/>
                気分で開発することが多いです。モダンなUIと効率的なバックエンドに興味があります。
              </p>
              
              <h3 className="mb-4" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Tech Stack</h3>
              <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
                {['Java', 'JavaScript', 'C / C++ / C#', 'Python', 'Node.js', 'React', 'HTML5/CSS3'].map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Projects</h2>
            
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="spinner mb-4"></div>
                <p className="text-secondary">Loading projects from GitHub...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((repo, i) => {
                  const imageUrl = customImages[repo.name] || `https://placehold.co/600x400/12121a/6366f1?text=${encodeURIComponent(repo.name)}`;
                  
                  return (
                    <motion.div 
                      key={repo.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-panel flex flex-col"
                      style={{ padding: '1.5rem' }}
                    >
                      <img 
                        src={imageUrl} 
                        alt={repo.name} 
                        className="card-image"
                        onError={(e) => { e.target.src = `https://placehold.co/600x400/12121a/6366f1?text=${encodeURIComponent(repo.name)}` }}
                      />
                      <div className="flex-grow flex flex-col">
                        <h3 className="mb-2" style={{ fontSize: '1.25rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={repo.name}>
                          {repo.name}
                        </h3>
                        <p className="text-secondary mb-4 flex-grow" style={{ fontSize: '0.9rem' }}>
                          {repo.description || '説明がありません。'}
                        </p>
                        
                        <div className="flex gap-2 mb-6" style={{ flexWrap: 'wrap' }}>
                          {repo.language && (
                            <span className="badge" style={{ fontSize: '0.75rem', padding: '0.1rem 0.5rem' }}>
                              {repo.language}
                            </span>
                          )}
                          {!repo.isPrivate && (
                            <span className="badge flex items-center gap-1" style={{ fontSize: '0.75rem', padding: '0.1rem 0.5rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.1)' }}>
                              <Star size={12} />
                              {repo.stargazers_count}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex gap-4 mt-auto">
                          {repo.homepage && (
                            <a href={repo.homepage} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', flex: 1 }}>
                              <ExternalLink size={16} /> Site
                            </a>
                          )}
                          <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', flex: 1 }}>
                            <GithubIcon size={16} /> GitHub
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
            
            {!loading && projects.length === 0 && (
              <p className="text-center text-secondary">公開されているプロジェクトがありません。</p>
            )}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ minHeight: '60vh' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <h2>Get In Touch</h2>
            <p className="text-secondary mb-8" style={{ maxWidth: '500px' }}>
              お仕事の依頼、技術的なディスカッション、または単なる挨拶でも、お気軽にご連絡ください。
            </p>
            
            <a href="mailto:your-email@example.com" className="btn btn-primary mb-12">
              <Mail size={20} />
              Say Hello
            </a>
            
            <div className="flex gap-6">
              <a href="https://github.com/tankj21" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors">
                <GithubIcon size={32} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors">
                <TwitterIcon size={32} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors">
                <LinkedinIcon size={32} />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="text-center text-secondary py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>&copy; {new Date().getFullYear()} tankj21. All rights reserved.</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Built with React & Framer Motion</p>
      </footer>
    </>
  );
}

export default App;
