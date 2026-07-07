import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, Moon, Sun, Briefcase, Code, Terminal, Cpu, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';
import styles from './Home.module.css';

const examples = [
  "VLSI", "Artificial Intelligence", "Data Science", "Cyber Security", 
  "Embedded Systems", "PCB Design", "Cloud Computing", "Robotics", 
  "Full Stack Development", "UI/UX Design"
];

const trending = [
  { title: "AI Prompt Engineer", icon: <Sparkles size={20} /> },
  { title: "Cloud Architect", icon: <Briefcase size={20} /> },
  { title: "Cyber Security Analyst", icon: <Terminal size={20} /> },
  { title: "Data Scientist", icon: <Code size={20} /> },
];

const Home = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState('light');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState('login');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const openAuthModal = (view) => {
    setAuthModalView(view);
    setIsAuthModalOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/dashboard?q=${encodeURIComponent(query)}`);
    }
  };

  const handleExampleClick = (example) => {
    navigate(`/dashboard?q=${encodeURIComponent(example)}`);
  };

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Cpu className={styles.logoIcon} />
          <span>NextPath AI</span>
        </div>
        <div className={styles.navActions}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          {isAuthenticated ? (
            <div className={styles.userProfile}>
              <div className={styles.avatar}>
                <User size={16} />
                <span>{user?.name}</span>
              </div>
              <button onClick={logout} className={styles.logoutBtn} aria-label="Logout">
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <>
              <button onClick={() => openAuthModal('login')} className={`btn-outline ${styles.loginBtn}`}>Log in</button>
              <button onClick={() => openAuthModal('signup')} className={`btn-primary ${styles.signupBtn}`}>Sign up</button>
            </>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialView={authModalView} 
      />

      <main className={styles.mainContent}>
        <section className={`animate-fade-in ${styles.hero}`}>
          <div className={styles.heroBadge}>
            <Sparkles size={16} /> <span>Powered by Advanced AI</span>
          </div>
          <h1 className={styles.title}>AI Career Guidance Portal</h1>
          <p className={styles.subtitle}>Discover your career roadmap with AI.</p>
          
          <div className={styles.searchContainer}>
            <form onSubmit={handleSearch} className={`glass-panel ${styles.searchBar}`}>
              <Search className={styles.searchIcon} size={24} />
              <input 
                type="text" 
                placeholder="Search any career, technology, or job role..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={`btn-primary ${styles.searchBtn}`}>
                Generate Roadmap
              </button>
            </form>
            
            <div className={styles.examples}>
              <span className={styles.exampleLabel}>Try:</span>
              <div className={styles.exampleTags}>
                {examples.slice(0, 5).map(ex => (
                  <button 
                    key={ex} 
                    className={styles.tag} 
                    onClick={() => handleExampleClick(ex)}
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`animate-fade-in ${styles.trendingSection}`}>
          <h2 className={styles.sectionTitle}>Trending Careers</h2>
          <div className={styles.cardGrid}>
            {trending.map((career, index) => (
              <div 
                key={index} 
                className={`glass-panel ${styles.careerCard}`}
                onClick={() => handleExampleClick(career.title)}
              >
                <div className={styles.cardIcon}>{career.icon}</div>
                <h3>{career.title}</h3>
                <p>High demand • High growth</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
