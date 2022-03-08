import React from 'react'
import { Box, ButtonGroup, Button } from '@mui/material'
 
function FormQuestionPage2(props) {

	function handleOption(e){
		const result = e.target.value
		props.onChange( result )
	}
	return(
    <Box> 
			<label>{props.question}</label>
      <Box>
        <ButtonGroup onClick={handleOption}>
         {props.options.map((item, index)=>
         <Button key={index} value={item}>
             {item}
         </Button>
         )}
        </ButtonGroup>
      </Box>   
			<Box display="flex">
          <Box>{props.high}</Box>
          <Box>{props.low}</Box>
        </Box>
       
    </Box>

  )
}

export default  FormQuestionPage2