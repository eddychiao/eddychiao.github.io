import React from 'react';
import './About.css';
import TechStack from '../components/TechStack';
import TimelineAbout from '../components/TimelineAbout';
import useTypingAnimation from '../hooks/useTypingAnimation';

interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

interface AboutProps {
  theme: Theme;
}

const TITLE = 'About Me';

const About: React.FC<AboutProps> = ({ theme }) => {
  const { typed, done } = useTypingAnimation(TITLE, 75);

  return (
    <div className="About" style={{ backgroundColor: theme.backgroundColor }}>

      {/* ── Hero: title + photo ─────────────────────────────────── */}
      <div className="About-hero">
        <div className="About-hero-left">
          <div className="About-title" style={{ color: theme.headerColor, position: 'relative' }}>
            <span className="About-ghost">{TITLE}</span>
            <span className="About-typed">
              {typed}
              {!done && <span className="About-cursor" style={{ color: theme.headerColor }}>|</span>}
            </span>
          </div>
          <div className="About-divider" style={{ backgroundColor: theme.buttonColor }} />
          <div className="About-description" style={{ color: theme.textColor }}>
            Hey, I'm Eddy Chiao! I was born in California, raised in Georgia, and am now currently living in New York City.
            <br /><br />
            I graduated with B.S. and M.S. degrees in Computer Science from Georgia Tech, and now work as a software engineer. When I was younger I had a huge obsession with building things with Legos, and I feel like coding gives me the same freedom to make almost anything cool and/or random that I can think of.
            <br /><br />
            As for some hobbies — I enjoy taking photos, playing piano/guitar, and playing different sports (volleyball, spikeball, tennis) if the weather permits. I also enjoy playing video games and reading a book from time to time (if you have any recs please let me know)!
          </div>
        </div>
        <div className="About-hero-right">
          <img
            src="/images/fb_pic.jpg"
            alt="Eddy Chiao"
            className="About-image"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* ── Tech Stack ──────────────────────────────────────────── */}
      <section className="About-section">
        <div className="About-section-header" style={{ color: theme.headerColor }}>
          Tech Stack
        </div>
        <div className="About-section-divider" style={{ backgroundColor: theme.buttonColor }} />
        <TechStack theme={theme} />
      </section>

      {/* ── Timeline ────────────────────────────────────────────── */}
      <section className="About-section">
        <div className="About-section-header" style={{ color: theme.headerColor }}>
          Experience
        </div>
        <div className="About-section-divider" style={{ backgroundColor: theme.buttonColor }} />
        <TimelineAbout theme={theme} />
      </section>

    </div>
  );
};

export default About;
