import React from 'react';
import './About.css';

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
    <div className="About" style={{backgroundColor: theme.backgroundColor}}>
      <div className="About-left">
        <div className="About-body" style={{ color: theme.headerColor }}>
          About Me
        </div>
        <div className="About-description" style={{ color: theme.textColor }}>
          Hello 👋, I'm Eddy Chiao! I wanted to make this as a portfolio showing and also consolidating the many different (and slightly unrelated)
          interests I have, and some fun with web development in the meantime.

          <br /><br />

          I graduated with a Bachelor's and Master's degree in Computer Science from Georgia Tech, and currently work as a software engineer. 
          I worked a few internships during my undergraduate years at companies like Capital One and American Express, and I started working at Microsoft
          soon after graduating.

          <br /><br />


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
  );
}

export default About;
