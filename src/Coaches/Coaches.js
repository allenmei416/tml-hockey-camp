// src/Coaches.js
import React from 'react';
import './Coaches.css';

const coachesData = [
  {
    id: 1,
    name: 'Coach John Doe',
    bio: 'With over 20 years of experience, Coach John has trained numerous young athletes to become professional hockey players.',
    image: 'path/to/john_image.jpg'
  },
  {
    id: 2,
    name: 'Coach Jane Smith',
    bio: 'Coach Jane is known for her innovative training techniques and her ability to motivate players to reach their full potential.',
    image: 'path/to/jane_image.jpg'
  },
  {
    id: 3,
    name: 'Coach Bob Brown',
    bio: 'Specializing in defense, Coach Bob has a knack for improving defensive skills and strategies among young players.',
    image: 'path/to/bob_image.jpg'
  }
];

const Coaches = () => {
  return (
    <div className="coaches-container">
      {coachesData.map((coach) => (
        <div key={coach.id} className="coach-card">
          <img src={coach.image} alt={coach.name} className="coach-image" />
          <h3>{coach.name}</h3>
          <p>{coach.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Coaches;
