import React from "react"
import Logo from '../../assets/Logo/logo.jpg'
import Logo1 from '../../assets/Logo/logo1.png' 
import { Grid } from '@mui/material'
import SearchSetup from '../../components/SearchSetup'

function Home() {
  return (
    <Grid item
      xs= { 12 } 
      height= "100vh" 
      display= "flex" 
      alignItems= "center"
      justifyContent= "space-between"
    >
      <Grid item
        display= "flex" 
        sx= {{ display: { xs:'none', md:'block' } }}
      >
        <img src={ Logo } alt="logo"/>
      </Grid>
      <Grid item
        xs= { 12 } md= { 6 }
        backgroundColor= "#eeeeee" 
        height= "100vh" 
        display= "flex" 
        flexDirection= "column" 
        alignItems= "center" 
        justifyContent= "center"
      >
        <Grid item 
          sx={{ 
            display: { md:'none', xs:'block' }, 
            width:'85%', mb:'5%' 
          }} 
        >
          <img src= { Logo1 } alt= "logo"/>
        </Grid>
        <SearchSetup />
      </Grid>
    </Grid>
  )
}

export default Home
