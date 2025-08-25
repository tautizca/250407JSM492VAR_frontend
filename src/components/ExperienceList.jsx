import React from 'react';
import './About.css';

const ExperienceList = ({ items = [] }) => {
  return (
    <div className="experience-list">
      <h2 className="experience-title">Mano technologijų patirtis</h2>
      <ul className="experience-ul">
        {items.map((it, idx) => (
          <li key={idx} className="experience-item">
            <strong className="tech-name">{it.name}</strong>
            <span className="tech-years"> — {it.years} metai</span>
            <p className="tech-desc">{it.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceList;
