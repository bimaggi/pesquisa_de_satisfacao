import React from "react"
import { Select, MenuItem, InputLabel, FormControl, OutlinedInput } from '@mui/material'


function Department(props) {
	function handleChange(e) {
		const result= e.target.value
		props.onChange( result )
	}
  return(
    <FormControl error={ props.error }>
      <InputLabel id="demo-multiple-name-label">Departamento</InputLabel>
      <Select  
        input={ <OutlinedInput label="Departamento"/> }
				onChange={ handleChange }
			>
				{
					props.department.map((item, index) => (
					<MenuItem 
					  key={ index } 
						value={ item }
					>
						{[ item ]}
					</MenuItem> )
					)}
      </Select>
    </FormControl>
  )
}
export default Department
