// HeaderFAQ.jsx
import React, { useState } from 'react';
import { List, ListItem, Typography, Grid } from '@mui/material';
import FAQ1 from './FAQ1';
import FAQ2 from './FAQ2';
import FAQ3 from './FAQ3';

const faqData = [
  {
    category: 'Services Offered by 1Lifeline',
    component: <FAQ1 />
  },
  {
    category: 'Therapist Information and Support',
    component: <FAQ2 />
  },
  {
    category: 'Membership and Platform Information',
    component: <FAQ3 />
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleListItemClick = (index) => {
    setActiveIndex(index);
    console.log(`Active index set to ${activeIndex}`);
  };

  return (
   
    <Grid container>
      <Grid item sm={6}>
        <List>
          {faqData.map((category, index) => (
            <React.Fragment key={index}>
              <ListItem button onClick={() => handleListItemClick(index)}>
                <Typography  sx={{
                    color: activeIndex === index ? '#097191' : '#000'
                  }} vriant="h6">{category.category}</Typography>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Grid>
      <Grid item sm={6}>
        {activeIndex !== null && faqData[activeIndex].component}
      </Grid>
    </Grid>
  );
}