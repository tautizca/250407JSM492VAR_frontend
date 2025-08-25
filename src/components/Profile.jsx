import React from 'react';
import '../components/About.css';

const Profile = () => {
  return (
    <div className="about-profile">
      <img
        src="https://placehold.co/240x240?text=Tautvydas"
        alt="Tautvydas"
        className="about-photo"
      />

      <div className="about-bio">
        <h1 className="about-title">Tautvydas — Profesionalus web technologijų programuotojas</h1>
        <p className="about-text">
          Esu Tautvydas, profesionalus web technologijų programuotojas, turintis praktinės
          patirties kuriant skalę ištverčias, prieinamas ir našias internetines aplikacijas.
          Dirbu su moderniomis frontend ir backend technologijomis, vertinu švarų kodą,
          automatizuotą testavimą ir gerą UX. Mėgstu optimizuoti našumą ir spręsti sudėtingas
          architektūrines problemas komandiniame kontekste.
        </p>
      </div>
    </div>
  );
};

export default Profile;
