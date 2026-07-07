import React from 'react';
import styles from './RequiredSkills.module.css';

const RequiredSkills = ({ skillsData }) => {
  if (!skillsData) return <p>No skills data available.</p>;

  const categories = [
    { key: 'beginner', label: 'Beginner', color: '#10b981' },
    { key: 'intermediate', label: 'Intermediate', color: '#3b82f6' },
    { key: 'advanced', label: 'Advanced', color: '#8b5cf6' },
    { key: 'expert', label: 'Expert', color: '#ef4444' }
  ];

  return (
    <div className={`animate-fade-in ${styles.skillsContainer}`}>
      <h2>Required Skills</h2>
      <p className={styles.subtitle}>Categorized skills needed to master this field.</p>
      
      <div className={styles.grid}>
        {categories.map(cat => (
          <div key={cat.key} className={`glass-panel ${styles.skillCard}`}>
            <div className={styles.cardHeader}>
              <h3 style={{ color: cat.color }}>{cat.label}</h3>
            </div>
            <div className={styles.skillTags}>
              {skillsData[cat.key]?.map((skill, index) => (
                <span key={index} className={styles.tag}>
                  {skill}
                </span>
              ))}
            </div>
            
            <div className={styles.progressContainer}>
              <div className={styles.progressHeader}>
                <span>Mastery Level</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ backgroundColor: cat.color, width: '0%' }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequiredSkills;
