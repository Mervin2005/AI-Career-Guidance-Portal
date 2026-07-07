import React, { useState, useEffect } from 'react';
import { Target, AlertCircle, ArrowRight } from 'lucide-react';
import styles from './SkillGapAnalysis.module.css';

const SkillGapAnalysis = ({ skillsData }) => {
  if (!skillsData) return <p>No skills data available for analysis.</p>;

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [analysisResult, setAnalysisResult] = useState(null);

  // Flatten all skills for the selection interface
  const allSkills = [
    ...(skillsData.beginner || []),
    ...(skillsData.intermediate || []),
    ...(skillsData.advanced || []),
    ...(skillsData.expert || [])
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const calculateGap = () => {
    const total = allSkills.length;
    const known = selectedSkills.length;
    const score = total > 0 ? Math.round((known / total) * 100) : 0;
    
    const missing = allSkills.filter(s => !selectedSkills.includes(s));
    
    let nextStep = "Start with the basics.";
    if (score > 80) nextStep = "You are ready for advanced projects or applying for jobs!";
    else if (score > 50) nextStep = "Focus on advanced topics to polish your profile.";
    else if (score > 20) nextStep = "Solidify intermediate concepts before moving on.";

    setAnalysisResult({ score, missing, nextStep });
  };

  return (
    <div className={`animate-fade-in ${styles.gapContainer}`}>
      <h2>AI Skill Gap Analysis</h2>
      <p className={styles.subtitle}>Select the skills you already know to evaluate your readiness.</p>

      {!analysisResult ? (
        <div className={styles.selectionArea}>
          <div className={styles.skillTags}>
            {allSkills.map(skill => (
              <button 
                key={skill}
                className={`${styles.tag} ${selectedSkills.includes(skill) ? styles.selected : ''}`}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
          <button 
            className={`btn-primary ${styles.analyzeBtn}`} 
            onClick={calculateGap}
            disabled={selectedSkills.length === 0}
          >
            Analyze My Profile
          </button>
        </div>
      ) : (
        <div className={`glass-panel ${styles.resultArea}`}>
          <div className={styles.scoreSection}>
            <div className={styles.scoreCircle}>
              <svg viewBox="0 0 36 36" className={styles.circularChart}>
                <path className={styles.circleBg}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className={styles.circle}
                  strokeDasharray={`${analysisResult.score}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className={styles.percentage}>{analysisResult.score}%</text>
              </svg>
            </div>
            <div className={styles.scoreInfo}>
              <h3>Readiness Score</h3>
              <p>Based on industry standards for this role.</p>
            </div>
          </div>

          <div className={styles.recommendationBox}>
            <h4><Target size={20} /> Recommended Next Step</h4>
            <p>{analysisResult.nextStep}</p>
          </div>

          <div className={styles.missingSkillsBox}>
            <h4><AlertCircle size={20} /> Missing Skills to Learn</h4>
            <div className={styles.skillTags}>
              {analysisResult.missing.slice(0, 5).map(skill => (
                <span key={skill} className={styles.missingTag}>{skill}</span>
              ))}
              {analysisResult.missing.length > 5 && (
                <span className={styles.missingTag}>+{analysisResult.missing.length - 5} more</span>
              )}
            </div>
          </div>

          <button className={`btn-outline ${styles.resetBtn}`} onClick={() => setAnalysisResult(null)}>
            Recalculate
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillGapAnalysis;
