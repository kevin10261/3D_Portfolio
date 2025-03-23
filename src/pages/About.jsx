import React, { useEffect, useState } from 'react';
import './About.css';
import { experiences, skills } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  const [showText, setShowText] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showWorkExperience, setShowWorkExperience] = useState(false);

  // Trigger the typing effect after the component mounts
  useEffect(() => {
    setShowText(true);

    const timer1 = setTimeout(() => {
      setShowDescription(true);
    }, 1000); 

    const timer2 = setTimeout(() => {
      setShowSkills(true);
    }, 2000); 

    const timer3 = setTimeout(() => {
      setShowWorkExperience(true);
    }, 3000); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <section className='max-container'>
        <h1 className='head-text text-white'>
          {showText && (
            <span className="typing-text">
              Hello, I'm <span className="typing-name">Seongeun</span>
              <span className="emoji">👋</span>
            </span>
          )}
        </h1>

        {/* Show description with fade-in effect after typing effect */}
        {showDescription && (
          <div>
            <p className="description fade-in text-slate-400">
              My name is Seongeun, and I am a software engineering student, whose expertise is in the language Python. I have a strong interest in machine learning and Artificial Intelligence, hoping to work with A.I.!
            </p>
          </div>
        )}

        {/* Show skills with fade-in effect after description */}
        {showSkills && (
          <div className='py-10 flex flex-col fade-in'>
            <h3 className="subhead-text text-white"> My Skills</h3>
            <div className='mt-16 flex flex-wrap gap-12'>
              {skills.map((skill) => (
                <div className='block-container w-20 h-20' key={skill.name}>
                  <div className='btn-back rounded-xl'/>
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className='w-1.2 h-1/2 object-contain'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Show work experience with fade-in effect after skills */}
        {showWorkExperience && (
          <div className='py-16 fade-in'>
            <h3 className='subhead-text text-white'> Work Experience</h3>
            <div className='mt-5 flex flex-col gap-3 text-slate-400'>
              <p>
                I've worked with a variety of companies and organizations, gaining experience in different fields, such as software development, data analysis, and machine learning. Here's the rundown:
              </p>
            </div>
            <div className='mt-12 flex'>
              <VerticalTimeline>
                {experiences.map((experience, index) => (
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={<div className='text-indigo-400'>{experience.date}</div>}
                    icon={<div className='flex items-center justify-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>}
                    iconStyle={{
                      background: experience.iconBg,
                    }}
                    contentStyle={{
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderBottomColor: experience.iconBg,
                      boxShadow: 'none',
                    }}
                  >
                    <div>
                      <h3 className='text-black text-xl font-poppins font-semibold'>
                        {experience.title}
                      </h3>
                      <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                        {experience.company_name}
                      </p>
                    </div>
                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point, index) => (
                        <li key={index} className='text-black-500/50 pl-1 text-sm'>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
