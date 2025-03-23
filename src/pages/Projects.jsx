import React, { useEffect, useState } from 'react';
import {  projects } from '../constants';
import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg';

const Projects = () => {
  const [showText, setShowText] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  // Trigger the typing effect and description after the component mounts
  useEffect(() => {
    setShowText(true);

    // Set a timeout to show the description after the typing effect is done
    const timer1 = setTimeout(() => {
      setShowDescription(true);
    }, 1000); // Adjust this to match the typing effect duration

    return () => {
      clearTimeout(timer1); // Cleanup the timeout
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <section className="max-container">
        <h1 className="head-text text-white">
          {showText && (
            <span className="typing-text">
              My <span className="typing-name">Projects </span>
              <span className="emoji"> 📖</span>
            </span>
          )}
        </h1>

        {/* Show description with fade-in effect after typing effect */}
        {showDescription && (
          <div>
            <p className="description fade-in text-slate-400">
              Welcome to my projects page! Here you can find a list of projects I have worked on over the years. Feel free to check them out!
            </p>
          </div>
        )}
        <div className='flex flex-wrap my-20 gap-16'>
            {projects.map((project) => (
              <div className='lg:w-[400px] w-full' key = {project.name}>
                <div className='block-container w-12 h-12'> 
                  <div className={`btn-back rounded-xl ${project.theme}`}/>
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img 
                    src = {project.iconUrl}
                    alt = "Project Icon"
                    className='w-1/2 h-1/2 object-contain'
                    />
                    </div>
                </div>
                <div className='mt-5 flex flex-col'>
                  <h4 className='text-2xl text-white font-poppins font-semibold'>
                    {project.name}
                  </h4>
                  <p className='text-slate-400 mt-2'>
                    {project.description}
                  </p>
                  <div className='mt-5 flex items-center gap-2 font-poppins'>
                    <Link
                      to={project.link}
                      target = "_blank"
                      rel ="noopener noreferrer"
                      className= "font-semibold text-blue-600"
                      >
                        GitHub Link
                    </Link>
                    <img 
                    src={arrow} 
                    alt="arrow" 
                    className='w-4 h-4 object-contain' 
                    />
                  </div>

                </div>
                
              </div>

            ))}

          </div>
      </section>
    </div>
  );
};

export default Projects;
