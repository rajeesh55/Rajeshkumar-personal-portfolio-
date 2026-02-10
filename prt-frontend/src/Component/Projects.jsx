import React from 'react';
import './Projects.css';
import project1 from './images/Screenshot (429).png';
import project2 from './images/Screenshot (430).png';
import project3 from './images/Screenshot (431).png';
import project4 from './images/IT-1.png';
import project5 from './images/Screenshot-2024-01-25-125829.jpg';
import project6 from './images/1722bfb47a1f67aab0d5311948f6c67c.jpg';
import project7 from './images/original-a75567fe503d9e04c06ebeed8273ae35.webp';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Course Registration System',
      description: 'A comprehensive course registration platform with student enrollment, course management, and admin dashboard features.',
      image: project1,
      tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
      github: 'https://github.com',
      live: '#'
    },
    {
      id: 2,
      title: 'Employee Management System',
      description: 'An enterprise solution for managing employee records, attendance tracking, payroll, and performance reviews.',
      image: project2,
      tech: ['Java', 'Spring Boot', 'Hibernate', 'SQL', 'JSP'],
      github: 'https://github.com',
      live: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'An interactive portfolio website with animations and responsive design to showcase work.',
      image: project3,
      tech: ['HTML', 'CSS', 'React', 'JavaScript'],
      github: 'https://github.com',
      live: '#'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A real-time weather application providing current conditions, forecasts, and weather alerts for any location worldwide.',
      image: project5,
      tech: ['React', 'JavaScript', 'Weather API', 'CSS3'],
      github: 'https://github.com',
      live: '#'
    },
    
    {
      id: 5,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop and real-time collaboration features.',
      image: project6,
      tech: ['HTML', 'CSS', 'JavaScript','React'],
      github: 'https://github.com',
      live: '#'
    },
    {
      id: 6,
      title: 'AI-Powered Grocery Management System',
      description: 'An intelligent grocery management system that uses AI to recommend products, predict demand, and optimize inventory.',
      image: project7,
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Machine Learning'],
      github: 'https://github.com',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
