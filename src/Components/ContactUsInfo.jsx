import React from 'react';
import { Typography, Stack } from '@mui/material';

export default function ContactInfo() {
  return (
    <Stack sx={{ padding: 4, backgroundColor: '#fefcf0' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Visit US
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 ,color:'#5B5D6C'}}>
        Coming soon!
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Get In Touch
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1 ,color:'#5B5D6C'}}>
        (617) 229-4963
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1,color:'#5B5D6C' }}>
        support@1lifeline.com
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 ,color:'#5B5D6C'}}>
        miaman1822@gmail.com
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Opening Hours
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1 ,color:'#5B5D6C'}}>
        Monday - Friday
      </Typography>
      <Typography variant="body1" sx={{color:'#5B5D6C'}}>
        08:00 AM - 05:00 AM
      </Typography>
    </Stack>
  );
}
