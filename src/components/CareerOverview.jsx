import React from 'react';
import { Target, Briefcase, GraduationCap, TrendingUp, Globe, Users } from 'lucide-react';
import styles from './CareerOverview.module.css';

const CareerOverview = ({ overviewData }) => {
  if (!overviewData) return <p>No overview data available.</p>;

  return (
    <div className={`animate-fade-in ${styles.overviewContainer}`}>
      <h2>{overviewData.title}</h2>
      <p className={styles.intro}>{overviewData.introduction}</p>

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <div className={`glass-panel ${styles.contentCard}`}>
            <h3><Target size={20} className={styles.icon} /> What is this field?</h3>
            <p>{overviewData.whatIsIt}</p>
          </div>

          <div className={`glass-panel ${styles.contentCard}`}>
            <h3><Briefcase size={20} className={styles.icon} /> Key Responsibilities</h3>
            <ul className={styles.responsibilityList}>
              {overviewData.keyResponsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={`glass-panel ${styles.statCard}`}>
            <div className={styles.statHeader}>
              <TrendingUp size={24} className={styles.statIcon} />
              <h4>Industry Demand</h4>
            </div>
            <p>{overviewData.industryDemand}</p>
          </div>

          <div className={`glass-panel ${styles.statCard}`}>
            <div className={styles.statHeader}>
              <GraduationCap size={24} className={styles.statIcon} />
              <h4>Required Education</h4>
            </div>
            <p>{overviewData.requiredEducation}</p>
          </div>

          <div className={`glass-panel ${styles.statCard}`}>
            <div className={styles.statHeader}>
              <Globe size={24} className={styles.statIcon} />
              <h4>Work Environment</h4>
            </div>
            <p>{overviewData.workEnvironment}</p>
          </div>
          
          <div className={`glass-panel ${styles.statCard}`}>
            <div className={styles.statHeader}>
              <Target size={24} className={styles.statIcon} />
              <h4>Future Scope</h4>
            </div>
            <p>{overviewData.futureScope}</p>
          </div>
        </div>
      </div>

      <div className={`glass-panel ${styles.opportunitiesCard}`}>
        <h3><Users size={20} className={styles.icon} /> Common Career Opportunities</h3>
        <div className={styles.tagGrid}>
          {overviewData.careerOpportunities.map((role, index) => (
            <span key={index} className={styles.roleTag}>{role}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerOverview;
