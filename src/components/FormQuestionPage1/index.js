import React from 'react'
import { FormControl, Radio, FormLabel, RadioGroup, FormControlLabel } from '@mui/material'
 
function FormQuestionPage1(props) {

	function handleChange(e) {
    const result = e.target.value
	  props.onChange(result)
  }
	return(
    <FormControl>
		  <RadioGroup value={props.options.item} onChange={handleChange}>
        <FormLabel>{props.question}</FormLabel>
		      { props.options.map((item, index) =>
		  	    <FormControlLabel value={item} control={<Radio/>} label={item} key={index}/>
		      )
		    }
		  </RadioGroup>
    </FormControl>
  )
}
export default FormQuestionPage1
