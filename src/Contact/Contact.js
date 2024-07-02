// src/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item">
          <h3>Address</h3>
          <p>1234 Innovation Drive</p>
          <p>Metropolis, CA</p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p><a href="mailto:TMLhockey@gmail.com">TMLhockey@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <h3>Phone Number</h3>
          <p><a href="tel:111-111-1111">111-111-1111</a></p>
        </div>
      </div>
      <div className="map-container">
        <img src="path/to/your/map-image.jpg" alt="Map to TML Hockey Camp" />
      </div>
      <div className="chat-container">
        <h3>Live Chat</h3>
        <div className="chat-box">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
