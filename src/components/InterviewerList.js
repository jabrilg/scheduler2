
import React from 'react';
import 'components/InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';
import PropTypes from 'prop-types';


export default function InterviewerList(props) {
  InterviewerList.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
  };
 const interviewers = props.interviewers.map(interviewer => {
   return(
      <InterviewerListItem 
      key={interviewer.id}
       id={interviewer.id} 
       name= {interviewer.name}
       selected={interviewer.id === props.value}
       setInterviewer={(ev)=>props.onChange(interviewer.id)}  
       avatar = {interviewer.avatar}
         />
      
      )
     })
     return( <section className="interviewers">
     <h4 className="interviewers__header text--light">Interviewer</h4>
   <ul className="interviewers__list">{interviewers}</ul>
   </section>)
      };