import React from 'react';
import { Typography, Grid } from '@mui/material';
export default function FAQHeader(){

return<>
<Grid container>
      <Grid item sm={3}>
        <Typography
          sx={{
            color: '#06422D',
            fontFamily: 'inter',
            backgroundImage: 'url(/images/FAQBackground.png)',
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            padding: 2, 

            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'right', 
          }}
          variant="h1"
        >
          FAQ
        </Typography>
      </Grid>
    </Grid>
</>
}