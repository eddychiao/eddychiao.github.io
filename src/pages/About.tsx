import React from 'react';
import './About.css';
import TimelineAbout from '../components/TimelineAbout';

interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

interface AboutProps {
  theme: Theme;
}

const About: React.FC<AboutProps> = ({ theme }) => {
  return (
    <div className="About" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="About-content">
        <div className="About-left">
          <div className="About-body" style={{ color: theme.headerColor }}>
            About Me
          </div>
          <div className="About-description" style={{ color: theme.textColor }}>
            Hello 👋, I'm Eddy Chiao! I made this website as a portfolio showing and consolidating the different (and slightly unrelated) interests I have.
  
            <br /><br />
  
            I graduated with a BS and MS in Computer Science from Georgia Tech and currently work as a software engineer. During college, I worked internships at Capital One and American Express, and I started working at Microsoft soon after graduating. I lived in Atlanta (Georgia) for most of my life, and as of Fall 2024 I am now living in New York City.
  
            <br /><br />
  
            Most of my experience is in web development, and I also have experience with developing in Python and working with a few data science techniques.
  
            I have a wide range of interests, including photography, music, volleyball, and many others. You can find some of my work on this website!
          </div>
        </div>
        <div className="About-right">
          <img 
            src="/images/fb_pic.jpg" 
            alt="About Page" 
            className="About-image"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>
      <div className="About-timeline">
        <TimelineAbout theme={theme}/>
      </div>
    </div>
  );
}

export default About;
