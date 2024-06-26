
import { Grid } from "@mui/material";
import FAQHeader from "../Components/FAQHeader";
import FAQSection from "../Components/FAQSection";
import Footer from "../Components/Footer";

export default function FAQPage(){
    return <>
   <Grid container sx={{background:'#fff'}}>
    <Grid item xs={12}>
<FAQHeader></FAQHeader>
    </Grid>
    <Grid item xs={12}>
        <FAQSection></FAQSection>
  
        
        </Grid>
        <Grid item sm={12}>
      <Footer></Footer>
          </Grid>  
    </Grid> 
    
    </>
}
