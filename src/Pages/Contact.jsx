import { Divider, Grid, useMediaQuery, useTheme } from "@mui/material";
import ContactUsHeader from "../Components/ContactUsHeader";
import ContactInfo from "../Components/ContactUsInfo";
import ContactUsForm from "../Components/ContactUsForm";

export default function ConnectUsPage() {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <>
      <Grid container sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-around" },
        alignItems: 'center',
        background: '#FFFEF4',
        minHeight: '100vh', 
        padding: 2,
      }}>
        <Grid item xs={12}>
          <ContactUsHeader />
        </Grid>
        <Grid item xs={12} md={5} lg={3} sx={{ marginTop: { xs: 2, md: 0 } }}>
          <ContactInfo />
        </Grid>
        <Grid item sx={{ display: { xs: 'none', xl: 'block' } }}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: '#F7DBCD',
              borderWidth: '1px',
              borderStyle: 'solid',
              backgroundColor: '#F7DBCD',
              height: '60%', 
              minHeight: '150px',
              margin: '0 16px',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={5} sx={{ marginTop: { xs: 2, md: 0 } }}>
          <ContactUsForm />
        </Grid>
        
      </Grid>
    </>
  );
}
