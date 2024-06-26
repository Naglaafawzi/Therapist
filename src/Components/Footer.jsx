
import { Divider, Grid, Typography, Box, Link as MuiLink } from "@mui/material";
import * as React from 'react';
import { Link } from "react-router-dom";
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import imgLogo from "../images/logo.png";

export default function Footer() {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: '#CFECEC', padding: '20px' }}>
      <Grid item xs={12} sm={6} md={3} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pl: { xs: 0, sm: 4 }
      }}>
        <img src={imgLogo} alt="website logo" style={{ width: '100px', height: 'auto' }} />
      </Grid>
      <Grid item xs={12} sm={6} md={9} sx={{
        display: 'flex',
        justifyContent: { sm: 'flex-end',lg:'flex-end',md:'flex-end',xl:'flex-end' , xs: 'center'},
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        textAlign: { xs: 'center', sm: 'left' },
        pr: { xs: 0, sm: 4 }
      }}>
        <Link to='/' style={{ textDecoration: 'none', color: '#5B5D6C' }}>Services</Link>
        <Link to='/' style={{ textDecoration: 'none', color: '#5B5D6C' }}>Our Therapist</Link>
        <Link to='/' style={{ textDecoration: 'none', color: '#5B5D6C' }}>FAQ</Link>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Divider sx={{ borderColor: 'white', borderWidth: 1 }} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pl: { xs: 0, sm: 4 },
        mt: { xs: 2, sm: 0 }
      }}>
        <Typography variant="caption" color="textSecondary" align="center">
          © 2024 ILifeLine. All rights reserved.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={8} sx={{
        display: 'flex',
        justifyContent: { xs: 'center', sm: 'flex-end' },
        alignItems: 'center',
        pr: { xs: 0, sm: 4 },
        mt: { xs: 2, sm: 0 }
      }}>
        <Box sx={{
          display: 'flex',
          gap: '20px'
        }}>
          <MuiLink href="/" color="inherit">
            <XIcon fontSize="small" />
          </MuiLink>
          <MuiLink href="/" color="inherit">
            <FacebookOutlinedIcon fontSize="small" />
          </MuiLink>
          <MuiLink href="/" color="inherit">
            <LinkedInIcon fontSize="small" />
          </MuiLink>
          <MuiLink href="/" color="inherit">
            <InstagramIcon fontSize="small" />
          </MuiLink>
        </Box>
      </Grid>
    </Grid>
  );
}
