import React from 'react'
import { Box, ButtonGroup, Button, Typography } from '@mui/material'
 
function FormQuestionPage2( props ) {
	function handleOption( e ){
		const result= e.target.value
		props.onChange( result )
	}
	return(
    <Box  
      sx={{ 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "100%",
        color: "gray",
        fontSize:{ md:"1.7rem", xs:"1.1rem" },
        border: "1px solid gray",
        margin: "2%",
      }}
    > 
      <Typography 
        variant='h1'
        sx={{
          textAlign: "center",
          marginBottom: "1%",
          marginTop: "5%",
          fontSize: { md:"1.3rem", xs:"1.1rem" }
        }}
      >
        { props.question }
      </Typography>
      <Box
        sx={{ 
          padding: "1rem",
          display:"flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ButtonGroup 
          sx={{
            display: "flex", 
            justifyContent: "space-between",
            width: { md:"50%", xs:"100%" },
            border: { md: "1px solid gray", xs:'none' },
            padding: "2%",
           }}
          onClick={ handleOption }

        >
         { props.options.map(( item, index ) =>
         <Button 
           key={ index } 
           value={item} 
           sx={{'&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
          },
          }}
          >
            {item}
          </Button>
         )}
        </ButtonGroup>
      </Box>   
			<Box 
        sx={{ 
          display: "flex", 
          justifyContent: "space-around",
          maxWidth: "100%", 
          marginBottom: "4%",
        }}
      >
        <Box 
          sx={{
            margin: "0",
            padding: "0",
            fontSize: { md: "1.2rem", xs:".9rem" },
          }}
        >
          { props.low}
        </Box>
        <Box
          sx={{
            margin: "0",
            padding: "0",
            fontSize: { md: "1.2rem", xs:".9rem" },
          }}
        >
          { props.high }
        </Box>
      </Box>
    </Box>
  )
}

export default  FormQuestionPage2
