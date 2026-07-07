import React from 'react';
import { PlayCircle, Book, LayoutTemplate } from 'lucide-react';
import styles from './ResourcesAndProjects.module.css';

const ResourcesAndProjects = ({ resourcesData, projectsData }) => {
  if (!resourcesData || !projectsData) return <p>Data not available.</p>;

  return (
    <div className={`animate-fade-in ${styles.rpContainer}`}>
      <h2>Learning Resources & Projects</h2>
      <p className={styles.subtitle}>Curated materials and hands-on projects to build your portfolio.</p>

      <div className={styles.contentGrid}>
        <div className={styles.column}>
          <h3><Book size={24} /> Top Learning Resources</h3>
          <div className={styles.cardsList}>
            {resourcesData.map((res, i) => (
              <a key={i} href={res.link} target="_blank" rel="noreferrer" className={`glass-panel ${styles.resourceCard}`}>
                <div className={styles.resIcon}>
                  {res.type === 'Course' ? <PlayCircle size={20} /> : <Book size={20} />}
                </div>
                <div className={styles.resInfo}>
                  <h4>{res.title}</h4>
                  <span>{res.provider} • {res.type}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3><LayoutTemplate size={24} /> Recommended Projects</h3>
          <div className={styles.cardsList}>
            {projectsData.map((proj, i) => (
              <div key={i} className={`glass-panel ${styles.projectCard}`}>
                <div className={styles.projHeader}>
                  <h4>{proj.title}</h4>
                  <span className={`${styles.difficulty} ${styles[proj.difficulty.toLowerCase()]}`}>
                    {proj.difficulty}
                  </span>
                </div>
                <p>{proj.description}</p>
                <div className={styles.projMeta}>
                  <span><strong>Time:</strong> {proj.time}</span>
                  <div className={styles.projTechs}>
                    {proj.techs.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesAndProjects;
