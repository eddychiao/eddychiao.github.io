import React from 'react';
import { IconComponent } from './TechStack';
import './TagPill.css';

interface TagPillProps {
  label: string;
  color: string;
  Icon?: IconComponent;
}

const TagPill: React.FC<TagPillProps> = ({ label, color, Icon }) => (
  <span className="TagPill" style={{ color, borderColor: color }}>
    {Icon && <Icon size={11} className="TagPill-icon" />}
    {label}
  </span>
);

export default TagPill;
