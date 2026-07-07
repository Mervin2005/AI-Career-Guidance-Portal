import React from 'react';
import { Target, ArrowDown, Wrench, BookOpen, Briefcase, ChevronRight } from 'lucide-react';
import styles from './CareerRoadmap.module.css';

export default function CareerRoadmap({ roadmapData }) {
  if (!roadmapData || !roadmapData.steps) return <p>No detailed roadmap available.</p>;

  return (
    <div className={`animate-fade-in ${styles.roadmapContainer}`}>
      <h2>AI Generated Learning Roadmap</h2>
      <p className={styles.subtitle}>Comprehensive step-by-step path from Beginner to Expert.</p>
      
      {/* Steps Timeline */}
      <div className={styles.timeline}>
        {roadmapData.steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={styles.timelineItem}>
              <div className={styles.stepBox}>
                <h3>{step.title}</h3>
                <ul className={styles.topicList}>
                  {step.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Render Arrow pointing to next step, except for the last step */}
            {index < roadmapData.steps.length - 1 && (
              <div className={styles.arrowContainer}>
                <div className={styles.arrowLine}></div>
                <ArrowDown size={24} className={styles.arrowIcon} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Target Goal Banner */}
      <div className={`glass-panel ${styles.goalBanner}`}>
        <Target size={28} className={styles.goalIcon} />
        <h3>Become an Expert in this Field!</h3>
      </div>

      {/* Summary Cards Grid */}
      <div className={styles.summaryGrid}>
        
        {/* Tools */}
        {roadmapData.essentialTools && (
          <div className={`glass-panel ${styles.summaryCard}`}>
            <div className={styles.cardHeader}>
              <Wrench size={20} className={styles.cardIcon} />
              <h4>Essential Tools to Learn</h4>
            </div>
            <ul className={styles.cleanList}>
              {roadmapData.essentialTools.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Learning Order */}
        {roadmapData.learningOrder && (
          <div className={`glass-panel ${styles.summaryCard}`}>
            <div className={styles.cardHeader}>
              <BookOpen size={20} className={styles.cardIcon} />
              <h4>Recommended Learning Order</h4>
            </div>
            <ol className={styles.orderedList}>
              {roadmapData.learningOrder.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Career Roles */}
        {roadmapData.careerRoles && (
          <div className={`glass-panel ${styles.summaryCard}`}>
            <div className={styles.cardHeader}>
              <Briefcase size={20} className={styles.cardIcon} />
              <h4>Career Roles</h4>
            </div>
            <div className={styles.tagsContainer}>
              {roadmapData.careerRoles.map((role, i) => (
                <span key={i} className={styles.roleTag}>{role}</span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
