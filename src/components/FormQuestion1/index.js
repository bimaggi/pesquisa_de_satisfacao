import React from 'react'
import { Radio, FormLabel, RadioGroup, FormControlLabel } from '@mui/material'
 
function FormQuestion1(props) {

	function handleChange(e) {
    const result = e.target.value
    console.log(result)
  }
    return(
		<RadioGroup value= "não sei ainda" onChange={handleChange}>
        <FormLabel>{props.question}</FormLabel>
		 { props.options.map((item, index) =>
			  <FormControlLabel value={item} control={<Radio />} label={item} key={index}/>
		  )
		}
		</RadioGroup>
 )
}

export default FormQuestion1