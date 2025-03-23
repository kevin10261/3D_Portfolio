import React from 'react';
import { Link } from 'react-router-dom';
import './HomeInformation.css';  // Ensure the correct path to your CSS

const FloatingActionButton = ({ link, btnText, description }) => (
  <div className="floating-action-button-container text-center">
    {description && (
      <p className="button-description text-indigo-500 fade-in">{description}</p>
    )}
    <Link to={link} className="neo-btn-small circular-button">
      <button className="button-text text-indigo-500">{btnText}</button>
      <div className="arrow-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="arrow-icon">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 2L12 17M12 17l5-5M12 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-indigo-500 mx-5 fade-in">
      Hello! I'm 
      <span className="font-semibold">
        <span className="bouncing-letter">S</span>
        <span className="bouncing-letter">e</span>
        <span className="bouncing-letter">o</span>
        <span className="bouncing-letter">n</span>
        <span className="bouncing-letter">g</span>
        <span className="bouncing-letter">e</span>
        <span className="bouncing-letter">u</span>
        <span className="bouncing-letter">n</span>
      </span> 🇰🇷
      <br />
      A Software Engineer based in Canada 🇨🇦
    </h1>
  ),
  2: (
    <FloatingActionButton
      link="/about"
      btnText="Learn More"
      description="Find out more about me and my journey."
    />
  ),
  3: (
    <FloatingActionButton
      link="/projects"
      btnText="Visit my portfolio"
      description="Check out some of my recent work and projects."
    />
  ),
  4: (
    <FloatingActionButton
      link="/contact"
      btnText="Let's Connect"
      description="Get in touch with me for collaborations or inquiries."
    />
  ),
};

const HomeInformation = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInformation;
