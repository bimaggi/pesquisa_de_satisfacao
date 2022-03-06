import React from "react";
import { FormControl, Button } from '@mui/material'
import FormQuestion1 from "../../FormQuestion1";
function SearchBoard() {
 
  return(
    <FormControl>
      <FormQuestion1 git
        question={ 'Quantas pessoas tem na sua equipe?' }
        options ={[ '1 até 3', '4 até 6', '7 até 9', '10 até 14', '15 ou mais'  ]}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
      >
        Finalizar
      </Button>
  </FormControl>
  );
}

export default SearchBoard;
