import React from 'react';
import {
  SiPython, SiJavascript, SiTypescript, SiCsharp,
  SiMicrosoftazure, SiMicrosoftsqlserver,
  SiReact, SiFlask, SiNodedotjs, SiExpress,
  SiAngular, SiDotnet, SiD3Dotjs, SiNextdotjs, SiPytorch,
  SiGithub, SiPostman, SiJupyter, SiDocker,
  SiPostgresql,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { BsCursorFill, BsRobot } from 'react-icons/bs';
import './TechStack.css';
import { Theme } from '../context/ThemeContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconComponent = React.ComponentType<any>;

interface TechItem {
  name: string;
  Icon: IconComponent;
  color: string;
}

interface TechGroup {
  label: string;
  items: TechItem[];
}

// ── Add / remove entries here ──────────────────────────────────────────────
const techGroups: TechGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'Python',     Icon: SiPython,              color: '#3776AB' },
      { name: 'Java',       Icon: DiJava,                color: '#ED8B00' },
      { name: 'C#',         Icon: SiCsharp,              color: '#239120' },
      { name: 'JavaScript', Icon: SiJavascript,          color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript,          color: '#3178C6' },
      { name: 'SQL',        Icon: SiMicrosoftsqlserver,  color: '#CC2927' },
      { name: 'Kusto',      Icon: SiMicrosoftazure,      color: '#0078D4' }, // KQL / Azure Data Explorer
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'React',   Icon: SiReact,    color: '#61DAFB' },
      { name: 'Flask',   Icon: SiFlask,    color: '#9E9E9E' },
      { name: 'PyTorch', Icon: SiPytorch,  color: '#EE4C2C' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', Icon: SiExpress,  color: '#9E9E9E' },
      { name: 'Angular', Icon: SiAngular,  color: '#DD0031' },
      { name: '.NET',    Icon: SiDotnet,   color: '#512BD4' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#9E9E9E' },
      { name: 'D3',      Icon: SiD3Dotjs,  color: '#F9A03C' },
      
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'GitHub Copilot',   Icon: SiGithub,        color: '#9E9E9E' }, // no Copilot icon
      { name: 'Claude Code',      Icon: BsRobot,         color: '#D97757' }, // no Anthropic icon
      { name: 'Cursor',           Icon: BsCursorFill,    color: '#9E9E9E' }, // no Cursor icon
      { name: 'Postman',          Icon: SiPostman,       color: '#FF6C37' },
      { name: 'Jupyter Notebook', Icon: SiJupyter,       color: '#F37626' },
      { name: 'Docker',           Icon: SiDocker,        color: '#2496ED' },
      { name: 'Azure',            Icon: SiMicrosoftazure, color: '#0078D4' },
      { name: 'PostgreSQL',       Icon: SiPostgresql,    color: '#4169E1' },
    ],
  },
];
// ────────────────────────────────────────────────────────────────────────────

export const techMap: Record<string, { Icon: IconComponent; color: string }> =
  Object.fromEntries(
    techGroups.flatMap((g) => g.items.map((item) => [item.name, { Icon: item.Icon, color: item.color }]))
  );

const TechStack: React.FC<{ theme: Theme }> = ({ theme }) => (
  <div className="TechStack">
    {techGroups.map(({ label, items }) => (
      <div key={label} className="TechStack-group">
        <div className="TechStack-group-label" style={{ color: theme.textColor }}>
          {label}
        </div>
        <div className="TechStack-grid">
          {items.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="TechStack-item"
              style={{ color: theme.textColor }}
            >
              <span className="TechStack-icon" style={{ color }}>
                <Icon size={18} />
              </span>
              <span className="TechStack-label">{name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default TechStack;
