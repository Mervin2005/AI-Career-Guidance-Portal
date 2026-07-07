import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Map, BookOpen, Briefcase, FileText, 
  TrendingUp, Award, Building, Download, MessageSquare, 
  ChevronLeft, Menu, X, Cpu, CheckSquare, Target, Loader2, User, LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';
import styles from './Dashboard.module.css';
import { generateAIData } from '../data/aiService';
import CareerOverview from '../components/CareerOverview';
import CareerRoadmap from '../components/CareerRoadmap';
import RequiredSkills from '../components/RequiredSkills';
import SkillGapAnalysis from '../components/SkillGapAnalysis';
import ResourcesAndProjects from '../components/ResourcesAndProjects';
import InterviewPrep from '../components/InterviewPrep';
import SalaryInsights from '../components/SalaryInsights';
import TopCompanies from '../components/TopCompanies';

const navItems = [
  { id: 'overview', label: 'Career Overview', icon: <LayoutDashboard size={20} /> },
  { id: 'roadmap', label: 'AI Roadmap', icon: <Map size={20} /> },
  { id: 'skills', label: 'Required Skills', icon: <Target size={20} /> },
  { id: 'gap-analysis', label: 'Skill Gap Analysis', icon: <CheckSquare size={20} /> },
  { id: 'resources', label: 'Resources & Projects', icon: <BookOpen size={20} /> },
  { id: 'interview', label: 'Interview Prep', icon: <MessageSquare size={20} /> },
  { id: 'salary', label: 'Salary Insights', icon: <TrendingUp size={20} /> },
  { id: 'companies', label: 'Top Companies', icon: <Building size={20} /> },
];

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || 'Unknown Career';

  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  const { user, isAuthenticated, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState('login');

  const openAuthModal = (view) => {
    setAuthModalView(view);
    setIsAuthModalOpen(true);
  };

  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      setLoading(true);
      const result = await generateAIData(query);
      if (isMounted) {
        setData(result);
        setLoading(false);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, [query]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}>
          <Loader2 className={styles.spinner} size={48} />
          <h2>AI is generating your {query} dashboard...</h2>
          <p>Analyzing skills, market demand, and roadmaps.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo} onClick={() => navigate('/')}>
            <Cpu className={styles.logoIcon} />
            {sidebarOpen && <span>NextPath AI</span>}
          </div>
          <button className={styles.closeBtn} onClick={toggleSidebar}>
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <div className={styles.queryBadge}>
          {sidebarOpen ? (
            <>Target: <strong>{query}</strong></>
          ) : (
            <strong>{query.substring(0,2).toUpperCase()}</strong>
          )}
        </div>

        <nav className={styles.navMenu}>
          {navItems.map(item => (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => setActiveSection(item.id)}
              title={item.label}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              {sidebarOpen && <span className={styles.navLabel}>{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.mainHeader}>
          <div className={styles.headerLeft}>
            <button className={styles.mobileMenuBtn} onClick={toggleSidebar}>
              <Menu size={24} />
            </button>
            <div className={styles.headerInfo}>
              <h1>{navItems.find(i => i.id === activeSection)?.label}</h1>
            </div>
          </div>
          <div className={styles.headerRight}>
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
              <div className={styles.authButtons}>
                <button onClick={() => openAuthModal('login')} className={`btn-outline ${styles.loginBtn}`}>Log in</button>
                <button onClick={() => openAuthModal('signup')} className={`btn-primary ${styles.signupBtn}`}>Sign up</button>
              </div>
            )}
          </div>
        </header>

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
          initialView={authModalView} 
        />

        <div className={styles.contentArea}>
          {/* Section Rendering */}
          {activeSection === 'overview' && <CareerOverview overviewData={data.careerOverview} />}
          
          {activeSection === 'roadmap' && <CareerRoadmap roadmapData={data.roadmapData} />}
          
          {activeSection === 'skills' && <RequiredSkills skillsData={data.skills} />}
          
          {activeSection === 'gap-analysis' && <SkillGapAnalysis skillsData={data.skills} />}
          
          {activeSection === 'resources' && <ResourcesAndProjects resourcesData={data.resources} projectsData={data.projects} />}

          {activeSection === 'interview' && <InterviewPrep prepData={data.interviewPrep} />}
          
          {activeSection === 'salary' && <SalaryInsights salaryData={data.salaryInsights} />}
          
          {activeSection === 'companies' && <TopCompanies companiesData={data.topCompanies} />}

          {/* Placeholders for remaining sections */}
          {!['overview', 'roadmap', 'skills', 'gap-analysis', 'resources', 'interview', 'salary', 'companies'].includes(activeSection) && (
            <div className={`glass-panel animate-fade-in ${styles.placeholderPanel}`}>
              <Cpu size={48} className={styles.placeholderIcon} />
              <h3>{navItems.find(i => i.id === activeSection)?.label} component</h3>
              <p>This section is currently under development.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
