import React from 'react';
import { MessageSquare, Code, Users } from 'lucide-react';
import styles from './InterviewPrep.module.css';

const InterviewPrep = ({ prepData }) => {
  if (!prepData) return <p>Interview preparation data not available.</p>;

  return (
    <div className={`animate-fade-in ${styles.prepContainer}`}>
      <h2>Interview Preparation</h2>
      <p className={styles.subtitle}>Get ready for your interviews with these common questions and topics.</p>

      <div className={styles.grid}>
        {prepData.technicalQuestions && (
          <div className={`glass-panel ${styles.card}`}>
            <div className={styles.cardHeader}>
              <MessageSquare size={24} className={styles.icon} />
              <h3>Technical Questions</h3>
            </div>
            <ul className={styles.list}>
              {prepData.technicalQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        )}

        {prepData.codingPractice && (
          <div className={`glass-panel ${styles.card}`}>
            <div className={styles.cardHeader}>
              <Code size={24} className={styles.icon} />
              <h3>Coding Practice</h3>
            </div>
            <ul className={styles.list}>
              {prepData.codingPractice.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        )}

        {prepData.hrQuestions && (
          <div className={`glass-panel ${styles.card}`}>
            <div className={styles.cardHeader}>
              <Users size={24} className={styles.icon} />
              <h3>HR Questions</h3>
            </div>
            <ul className={styles.list}>
              {prepData.hrQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewPrep;
