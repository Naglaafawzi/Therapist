import React, { useState } from 'react';

import { List,  Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

console.log('FAQ1 component rendered');

const faqData = [
  {
    category: 'Services Offered by 1Lifeline',
    questions: [
      'What services are offered by 1Lifeline?',
      'How can I book a session with a therapist?',
      'Are the services available 26/7?',
      'Can I choose my therapist?',
      'Are there any group therapy sessions available?'
    ]
  }
];

export default function FAQ3() {
  return (
    <List>
      {faqData.map((category, index) => (
        <React.Fragment key={index}>
          {category.questions.map((question, qIndex) => (
            <Accordion sx={{
            
            mb:2
             }} key={qIndex} >
              <AccordionSummary   expandIcon={<ExpandMoreIcon sx={{color:'#167CC8'}} />}
          aria-controls="panel1-content"
          id="panel1-header" sx={{
            boxShadow:  '5px 6px 27px 0px rgba(0,0,0,0.1),0px 0px 15px -3px rgba(0,0,0,0.1)',
            border: 'none',}}>
                <Typography>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {/* Answer text goes here */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
}