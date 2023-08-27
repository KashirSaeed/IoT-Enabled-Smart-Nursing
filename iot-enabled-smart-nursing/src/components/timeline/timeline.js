import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import {PropTypes} from 'prop-types'
 
const CustomizedTimeline=(props)=> {
  return (
    <React.Fragment>
      <Timeline position="alternate">
    {props.activityList.map((activity,index)=>(
      
      <TimelineItem key={index}>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {activity.startTime} - {activity.endTime}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <FastfoodIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          {activity.activity}
        </Typography>
      </TimelineContent>
    </TimelineItem>
    ))}
    </Timeline>
    
    </React.Fragment>
  );
}

CustomizedTimeline.propTypes ={
  activityList: PropTypes.array.isRequired
}

export default CustomizedTimeline;