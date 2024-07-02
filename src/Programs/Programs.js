// src/Programs.js
import React, { useState } from 'react';
import './Programs.css';

const programsData = [
  {
    id: 1,
    title: 'Advanced Hockey Skills',
    ageGroup: '5-10',
    skillLevel: 'Advanced',
    girlsOnly: 'No',
  },
  {
    id: 2,
    title: 'Beginner Hockey Camp',
    ageGroup: '11-15',
    skillLevel: 'Beginner',
    girlsOnly: 'Yes',
  },
  // Add more programs as needed
];

const Programs = () => {
  const [ageGroup, setAgeGroup] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [girlsOnly, setGirlsOnly] = useState('');

  const handleAgeGroupChange = (event) => {
    setAgeGroup(event.target.value);
  };

  const handleSkillLevelChange = (event) => {
    setSkillLevel(event.target.value);
  };

  const handleGirlsOnlyChange = (event) => {
    setGirlsOnly(event.target.value);
  };

  const filteredPrograms = programsData.filter((program) => {
    return (
      (ageGroup ? program.ageGroup === ageGroup : true) &&
      (skillLevel ? program.skillLevel === skillLevel : true) &&
      (girlsOnly ? program.girlsOnly === girlsOnly : true)
    );
  });

  return (
    <div className="programs-container">
      <div className="faceted-search">
        <h2>Programs</h2>
        <div className="facet">
          <label>Age Group</label>
          <select value={ageGroup} onChange={handleAgeGroupChange}>
            <option value="">Type...</option>
            <option value="5-10">5-10</option>
            <option value="11-15">11-15</option>
          </select>
        </div>
        <div className="facet">
          <label>Skill Level</label>
          <select value={skillLevel} onChange={handleSkillLevelChange}>
            <option value="">Type...</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className="facet">
          <label>Girls Only</label>
          <select value={girlsOnly} onChange={handleGirlsOnlyChange}>
            <option value="">Type...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="program-cards">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="program-card">
            <h3>{program.title}</h3>
            <p>Age Group: {program.ageGroup}</p>
            <p>Skill Level: {program.skillLevel}</p>
            <p>Girls Only: {program.girlsOnly}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
