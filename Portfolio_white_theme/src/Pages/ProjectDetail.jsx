import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/ProjectDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFire, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faPython, faAngular, faAws, faDocker, faGitAlt, faJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const techIcons = { 'React': faReact, 'ReactJS': faReact, 'React JS (Vite)': faReact, 'NodeJS': faNodeJs, 'Python': faPython, 'Angular': faAngular, 'Firebase': faFire, 'Firebase Authentication': faFire, 'AWS': faAws, 'Docker': faDocker,  'Git': faGitAlt, 'JavaScript': faJs, 'HTML': faHtml5, 'CSS': faCss3Alt, 'MongoDB': faDatabase, 'MongoAtlas': faDatabase, 'PostgreSQL': faDatabase, 'Redis': faDatabase, 'TailwindCSS': faCss3Alt, 'Autho': faCode, 'GeminiAI': faCode };

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectData = {
    '01': {
      title: 'Devin Ajent',
      description: 'An AI-powered collaboration tool built using Gemini AI, enabling project management teams to live chat and coordinate seamlessly. With the @ai function, users can interact with AI to brainstorm and solve problems together in real-time.',
      technologies: ['React', 'NodeJS', 'TailwindCSS', 'Autho', 'MongoAtlas', 'Redis', 'GeminiAI'],
      // videoUrl: 'https://www.youtube.com/embed/your-video-id',
      figmaLink: 'https://www.figma.com/your-design',
      githubLink: 'https://github.com/your-repo',
      organization: 'Devin Ajent'
    },
    '02': {
      title: 'Customer Relationship Management',
      description: 'Developed a full-stack Event Management CRM tool using React and Node.js, featuring client management, scheduling, Live Client and supplier communication, Online Ticket part budget tracking for efficient event planning etc.',
      technologies: ['React JS (Vite)', 'NodeJS', 'TailwindCSS', 'Firebase Authentication', 'MongoAtlas'],
      // videoUrl: 'https://www.youtube.com/embed/your-video-id',
      figmaLink: 'https://www.figma.com/your-design',
      githubLink: 'https://github.com/your-repo',
      organization: 'Customer Relationship Management'
    },
    '03': {
      title: 'Code Analytics',
      description: 'An intelligent, end‑to‑end web application that leverages advanced AI to supercharge developer workflows. Built with a modern React frontend and a scalable microservices backend, this platform delivers real‑time, context‑aware code analysis and automated refactoring suggestions across multiple languages.',
      technologies: ['ReactJS (Vite)', 'NodeJS', 'Gemini-2.0-Flash'],
      // videoUrl: 'https://www.youtube.com/embed/your-video-id',
      figmaLink: 'https://www.figma.com/your-design',
      githubLink: 'https://github.com/your-repo',
      organization: 'Code Analytics'
    },
    '04': {
      title: 'RNTOS',
      description: 'RNTOS is designed for users who want a smart digital companion to manage emotional moments, technical work, research, personal goals, and communication in one intelligent system — with a strong, personal human–AI bond.',
      technologies: ['Angular', 'Python', 'Grok-Gemini-OpenAI-Claud(API)', 'PostgreSQL'],
      // videoUrl: 'https://www.youtube.com/embed/your-video-id',
      figmaLink: 'https://www.figma.com/your-design',
      githubLink: 'https://github.com/your-repo',
      organization: 'RNTOS'
    },
    '05': {
      title: 'TheFeature.com',
      description: 'This is a new feature of AI which is only designed to help students, in which they can test any tech language from basic to advanced parts with in-depth examples, along with practicing interviews, and if they want to become a UI for a project, they can also perform within this.',
      technologies: ['Angular', 'Python', 'AI', 'ML', 'NPL', 'PostgreSQL', 'FireBase Authentication'],
      // videoUrl: 'https://www.youtube.com/embed/your-video-id',
      figmaLink: 'https://www.figma.com/your-design',
      githubLink: 'https://github.com/your-repo',
      organization: 'TheFeature.com'
    }
  };

  const project = projectData[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <button className="back-button" onClick={() => navigate('/projects')}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
      </button>

      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-org">Organization: {project.organization}</p>
      </div>

      <div className="project-content">
        {project.videoUrl && (
          <div className="project-video">
            <h2>Project Demo</h2>
            <div className="video-container">
              <iframe
                src={project.videoUrl}
                title="Project Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="project-description">
          <h2>Project Description</h2>
          <p>{project.description}</p>
        </div>

        <div className="project-technologies">
          <h2>Technologies Used</h2>
          <div className="tech-grid">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                <FontAwesomeIcon icon={techIcons[tech] || faCode} />
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-links">
          <h2>Project Links</h2>
          <div className="links-container">
            {project.figmaLink && (
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fab fa-figma"></i> View Figma Design
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fab fa-github"></i> View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail; 