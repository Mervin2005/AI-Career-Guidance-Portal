import React from 'react';
import { TrendingUp, IndianRupee } from 'lucide-react';
import styles from './SalaryInsights.module.css';

const SalaryInsights = ({ salaryData }) => {
  if (!salaryData || salaryData.length === 0) return <p>Salary data not available.</p>;

  return (
    <div className={`animate-fade-in ${styles.salaryContainer}`}>
      <h2>Salary Insights (India)</h2>
      <p className={styles.subtitle}>Estimated salary ranges based on experience levels.</p>

      <div className={styles.chartArea}>
        {salaryData.map((item, index) => (
          <div key={index} className={`glass-panel ${styles.salaryRow}`}>
            <div className={styles.experienceLevel}>
              <TrendingUp size={20} className={styles.icon} />
              <h4>{item.experience}</h4>
            </div>
            <div className={styles.salaryRange}>
              <IndianRupee size={20} className={styles.rupeeIcon} />
              <span className={styles.amount}>{item.range}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryInsights;
