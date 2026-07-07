import React from 'react';
import { Building2, Building, Rocket } from 'lucide-react';
import styles from './TopCompanies.module.css';

const TopCompanies = ({ companiesData }) => {
  if (!companiesData) return <p>Top companies data not available.</p>;

  return (
    <div className={`animate-fade-in ${styles.companiesContainer}`}>
      <h2>Top Companies Hiring</h2>
      <p className={styles.subtitle}>Explore the different types of companies hiring in this field.</p>

      <div className={styles.grid}>
        {companiesData.product && (
          <div className={`glass-panel ${styles.companyCard}`}>
            <div className={styles.cardHeader}>
              <Building2 size={24} className={styles.icon} />
              <h3>Product Companies</h3>
            </div>
            <div className={styles.tagsArea}>
              {companiesData.product.map((c, i) => (
                <span key={i} className={styles.companyTag}>{c}</span>
              ))}
            </div>
          </div>
        )}

        {companiesData.consulting && (
          <div className={`glass-panel ${styles.companyCard}`}>
            <div className={styles.cardHeader}>
              <Building size={24} className={styles.icon} />
              <h3>Consulting Companies</h3>
            </div>
            <div className={styles.tagsArea}>
              {companiesData.consulting.map((c, i) => (
                <span key={i} className={styles.companyTag}>{c}</span>
              ))}
            </div>
          </div>
        )}

        {companiesData.startups && (
          <div className={`glass-panel ${styles.companyCard}`}>
            <div className={styles.cardHeader}>
              <Rocket size={24} className={styles.icon} />
              <h3>Startups</h3>
            </div>
            <div className={styles.tagsArea}>
              {companiesData.startups.map((c, i) => (
                <span key={i} className={styles.companyTag}>{c}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopCompanies;
