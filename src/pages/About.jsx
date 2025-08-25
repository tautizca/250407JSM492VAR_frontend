import React from 'react';
import Profile from '../components/Profile';
import ExperienceList from '../components/ExperienceList';

const About = () => {
  const experiences = [
    { name: 'React', years: 4, notes: 'Komponentų architektūra, hooks, performance tuning.' },
    { name: 'TypeScript', years: 3, notes: 'Tipų saugumas ir integracija su React projektais.' },
    { name: 'Node.js', years: 5, notes: 'Server-side JS, REST API kūrimas ir optimizavimas.' },
    { name: 'Express', years: 4, notes: 'API struktūra, middleware ir autentifikacija.' },
    { name: 'Next.js', years: 2, notes: 'SSR/SSG sprendimai ir puslapių optimizacija.' },
    { name: 'Vite', years: 2, notes: 'Greitas dev serveris ir modernus bundlingas.' },
    { name: 'GraphQL', years: 2, notes: 'Schema dizainas ir efektyvios užklausos.' },
    { name: 'Postgres', years: 3, notes: 'Duomenų modeliavimas ir indeksavimas.' },
    { name: 'Docker', years: 3, notes: 'Konteinerizacija ir deployment darbo eiga.' },
    { name: 'Tailwind CSS', years: 3, notes: 'Utility-first stilizavimas ir responsive dizainas.' },
  ];

  return (
    <div className="rounded-xl bg-white shadow border border-slate-200 p-6">
      <Profile />
      <ExperienceList items={experiences} />
    </div>
  );
}

export default About;
