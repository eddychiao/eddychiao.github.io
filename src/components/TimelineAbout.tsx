import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import Typography from '@mui/material/Typography';

interface Theme {
    backgroundColor: string;
    headerColor: string;
    textColor: string;
    buttonColor: string;
  }
  
  interface AboutProps {
    theme: Theme;
  }


const TimelineAbout: React.FC<AboutProps> = ({ theme }) => {

  // Function that creates a timeline item
  const createTimelineItem = (year: string, title: string, description: string, icon: React.ReactNode, isStartingNode: boolean) => (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        fontSize={'1.2rem'}
        fontFamily={'Urbanist, sans-serif'}
        color={theme.headerColor}
      >
        {year}
      </TimelineOppositeContent>
      <TimelineSeparator>
        { !isStartingNode && <TimelineConnector /> }
        <TimelineDot sx={{ backgroundColor: theme.buttonColor}}>
          {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent 
        sx={{ py: '12px', px: 2 }} 
        fontFamily={'Urbanist, sans-serif'} 
        color={theme.textColor}>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <Timeline >
      {createTimelineItem('2016', 'Started College', 'Studied at Georgia Tech', <SchoolRoundedIcon/>, true)}
      {createTimelineItem('2018', 'Internship', 'Software Engineer @ CodeMettle', <CodeRoundedIcon />, false)}
      {createTimelineItem('2019', 'Internship', 'Software Engineer @ Capital One', <CodeRoundedIcon />, false)}
      {createTimelineItem('2020', 'Internship', 'Software Engineer @ American Express', <CodeRoundedIcon />, false)}
      {createTimelineItem('2020', 'Undergraduate Degree', 'B.S in Computer Science', <SchoolRoundedIcon />, false)}
      {createTimelineItem('2021', 'Graduate Degree', 'M.S in Computer Science', <SchoolRoundedIcon />, false)}
      {createTimelineItem('2021', 'Full-Time Employee', 'Software Engineer I/II @ Microsoft', <CodeRoundedIcon />, false)}
    </Timeline>
  );
}

export default TimelineAbout;