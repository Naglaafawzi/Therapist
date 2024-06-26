import React from 'react';
import { Typography, Grid, Stack, FormHelperText, FormControl, OutlinedInput, Button, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import emailjs from 'emailjs-com';

export default function ContactUsForm() {


  const form = useForm({
    mode: "all"
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      await emailjs.send('service_hq1761o', 'template_3sk6c7u', data);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Email could not be sent:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <>
      <Stack sx={{ m: 2 }}>
        <Typography variant="h5"  sx={{ color: "#303138", fontSize: "20px", fontWeight: 700, fontStyle: "bold" ,display:'flex',justifyContent:"left" }}>
          Request To Contact!
        </Typography>
        <FormHelperText>
          Join us, you will be most welcome!
        </FormHelperText>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <OutlinedInput
                  id="input-name"
                  placeholder="Your Name"
                  type="text"
                  {...register('name', {
                    required: { value: true, message: "This field is required" },
                    maxLength: { value: 40, message: "Name is too long, maximum 40 letters" },
                    minLength: { value: 3, message: "Name is too short, minimum 3 letters" }
                  })}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    mt: 3,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#097191"
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#097191"
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#097191"
                    }
                  }}
                  error={!!errors.name}
                />
                <FormHelperText sx={{ color: "red" }}>{errors.name?.message}</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <OutlinedInput
                  id="input-phone-info"
                  placeholder="Your Phone"
                  type="text"
                  {...register('phone', {
                    required: { value: true, message: "This field is required" },
                    pattern: { value: /^\d{10}$/, message: "Phone should be exactly 10 digits long" }
                  })}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    mt: 3,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#097191"
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#097191"
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#097191"
                    }
                  }}
                  error={!!errors.phone}
                />
                <FormHelperText sx={{ color: "red" }}>{errors.phone?.message}</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <OutlinedInput
                  id="input-email"
                  placeholder="E-Mail"
                  type="email"
                  {...register('email', {
                    required: { value: true, message: "This field is required" },
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address" }
                  })}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    mt: 3,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#097191"
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#097191"
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#097191"
                    }
                  }}
                  error={!!errors.email}
                />
                <FormHelperText sx={{ color: "red" }}>{errors.email?.message}</FormHelperText>
              </FormControl>
            </Grid>

           <Grid item xs={12} sm={12} sx={{ display: "flex", flexDirection: 'column', alignItems: "flex-end", height: '5vh' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button
              type="submit"
              variant="text"
              endIcon={<EastOutlinedIcon />}
              sx={{
                mt: 3,
                borderRadius: '10px',
                color: '#002936',
                textTransform: 'none',
                padding: '8px 16px',
                '& .MuiButton-endIcon': {
                  marginLeft: '8px',
                  marginRight: '-8px',
                  transform: 'translateX(0)',
                  transition: 'transform 0.3s ease',
                },
                '&:hover .MuiButton-endIcon': {
                  transform: 'translateX(8px)',
                },
              }}
            >
              Send
            </Button>
            <Divider
              orientation="horizontal"
              sx={{
                borderColor: '#097191',
                borderWidth: '1px',
                borderStyle: 'solid',
                backgroundColor: '#F7DBCD',
                width: '100%',  
                marginTop: '8px', 
              }}
            />
          </div>
        </Grid>
          </Grid>
        </form>
      </Stack>
    </>
  );
}
