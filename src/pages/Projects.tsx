import React from 'react';
import './Projects.css';

// import * as constants from '../const/enum';

interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

interface ProjectsProps {
  theme: Theme;
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  return (
    <div className="Projects">
      <header className="Projects-body">
        <p>
          Projects PAGE
        </p>
      </header>
      <div>
        handleCloseNavMenuh
        helhaldf
        awegj;wgrjkawr
        awlergkjwarla

      </div>
    </div>
  );
}

export default Projects;
