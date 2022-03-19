import React from 'react'
import { FormControl, Radio, FormLabel, RadioGroup, FormControlLabel } from '@mui/material'
 
function FormQuestionPage1( props ) {
	function handleChange( e ) {
    const result= e.target.value
	  props.onChange( result )
  }
	return(
    <FormControl 
	    sx={{ 
		    display: "flex",
		    margin: "5% 0 3% 5%",
		    paddingRight:"2rem",
		    marginTop: { md: "1rem", xs: "3rem" },
				border: "1px solid gray",
				padding:"2%",
	    }}
		>
		  <RadioGroup 
			  value={ props.options.item } 
				onChange={ handleChange }
			>
        <FormLabel 
				  style={{ marginBottom: "2%" }}
				>
					{ props.question }
				</FormLabel>
				{ 
				  props.options.map(( item, index ) =>
		  	    <FormControlLabel 
						  value={ item } 
							control={ <Radio/> } 
							label={ item } 
							key={ index }
						/>
		      ) 
		    }
		  </RadioGroup>
    </FormControl>
  )
}
export default FormQuestionPage1
