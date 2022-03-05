import SearchSetup from "../SearchSetup";
import Logo from '../../assets/Logo/logo.jpg' ;
import { Grid } from '@mui/material';

function Home() {
  return (
      <Grid item
        xs={12} 
        height="100vh" 
        display="flex" 
        alignItems="center"
      >
        <Grid item
          display="flex" 
          sx={{ display: { xs:'none', md:'block' } }}
        >
          <img src={Logo} alt="logo"/>
        </Grid>
        <Grid item
          xs={12}
          backgroundColor= "#eeeeee" 
          height= "100vh" 
          display= "flex" 
          flexDirection= "column" 
          alignItems= "center" 
          justifyContent= "center"
        >
          <Grid item sx={{ display: { md:'none', xs:'block' }}}>
            <img src={Logo} alt="logo"/>
          </Grid>
          <SearchSetup/>
        </Grid>
      </Grid>
  );
}

export default Home;
