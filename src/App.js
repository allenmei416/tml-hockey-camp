// src/App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="menu">
          <li><a href="#programs">Programs</a></li>
          <li><a href="#coaches">Coaches</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#register">Register</a></li>
        </ul>
      </nav>
      <div className="main-content">
        <div className="info-column">
          <h1>SUMMER CAMP REGISTRATION OPEN</h1>
          <h2>TML Hockey Camp</h2>
          <p>Join us for the 2024 Summer Season at Minto</p>
          <p>
            Get ready for an unforgettable summer at TML Hockey Camp, where young athletes can develop their skills, make lasting friendships, and experience the thrill of the game in a supportive and fun environment. Whether you're a beginner looking to learn the basics or an experienced player aiming to take your game to the next level, our camp offers top-notch coaching, state-of-the-art facilities, and a passion for hockey that's unmatched.
          </p>
          <p>Age 5-10 Advanced Camp for 9 weeks</p>
          <p>$400 per child</p>
          <p>Call 111-111-1111 for more information</p>
        </div>
        <div className="image-column">
          <img src="path/to/your/image.jpg" alt="Hockey Camp" />
        </div>
      </div>
    </div>
  );
};

export default App;
