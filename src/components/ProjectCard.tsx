import React from 'react';
import { useNavigate } from 'react-router-dom';
import TagPill from './TagPill';
import { techMap } from './TechStack';
import { Project } from '../const/projectdata';
import { Theme } from '../context/ThemeContext';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  theme: Theme;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme }) => {
  const navigate = useNavigate();

  return (
    <div
      className="ProjectCard"
      onClick={() => navigate(`/projects/${project.id}`)}
      style={{ borderColor: theme.buttonColor + '55' }}
    >
      <div className="ProjectCard-year" style={{ color: theme.buttonColor }}>
        {project.year}
      </div>
      <div className="ProjectCard-title" style={{ color: theme.headerColor }}>
        {project.title}
      </div>
      <div className="ProjectCard-description" style={{ color: theme.textColor }}>
        {project.shortDescription}
      </div>
      <div className="ProjectCard-spacer" />
      <div className="ProjectCard-tags">
        {project.tags.map((tag) => {
          const tech = techMap[tag];
          return (
            <TagPill
              key={tag}
              label={tag}
              color={tech?.color ?? theme.buttonColor}
              Icon={tech?.Icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
