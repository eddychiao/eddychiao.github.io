import React from 'react';
import './TimelineAbout.css';

interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

type EntryType = 'education' | 'professional experience' | 'internship';

interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  type: EntryType;
}

// ── Add / remove entries here ──────────────────────────────────────────────
const entries: TimelineEntry[] = [
  { year: '2021-2025', title: 'Microsoft',                       subtitle: 'Software Engineer I → II',        type: 'professional experience'      },
  { year: '2020-2021', title: 'Georgia Institute of Technology', subtitle: 'M.S. in Computer Science (Artificial Intelligence)',           type: 'education' },
  { year: '2020', title: 'American Express',                subtitle: 'Software Engineer Intern',        type: 'internship'      },
  { year: '2019', title: 'Capital One',                     subtitle: 'Software Engineer Intern',        type: 'internship'      },
  { year: '2018', title: 'CodeMettle',                      subtitle: 'Software Engineer Intern',        type: 'internship'      },
  { year: '2016-2020', title: 'Georgia Institute of Technology', subtitle: 'B.S. in Computer Science',           type: 'education' },
];
// ────────────────────────────────────────────────────────────────────────────

const TimelineAbout: React.FC<{ theme: Theme }> = ({ theme }) => (
  <div className="Timeline">
    {entries.map((entry, i) => (
      <div className="Timeline-row" key={i}>

        <div className="Timeline-year" style={{ color: theme.headerColor }}>
          {entry.year}
        </div>

        <div className="Timeline-spine">
          <div className="Timeline-dot" style={{ backgroundColor: theme.buttonColor }} />
          {i < entries.length - 1 && (
            <div className="Timeline-line" style={{ backgroundColor: theme.buttonColor }} />
          )}
        </div>

        <div className="Timeline-body" style={{ color: theme.textColor }}>
          <div className="Timeline-title">{entry.title}</div>
          <div className="Timeline-subtitle" style={{ color: theme.headerColor }}>
            {entry.subtitle}
          </div>
          <div
            className="Timeline-tag"
            style={{ color: theme.buttonColor, borderColor: theme.buttonColor }}
          >
            {entry.type}
          </div>
        </div>

      </div>
    ))}
  </div>
);

export default TimelineAbout;
