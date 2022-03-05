import { TextField, Button,Typography  } from '@mui/material'
import { useState } from 'react'

function SearchSetup(props) {
  const [ name, setName ] = useState()
  const [ department, setDepartment ] = useState()

  function handleSetName( e ) {
    setName( e.target.value )
  }
  function handleSetDepartment( e ) {
    setDepartment( e.target.value )
  }
  function changeSetup(e){
    e.preventDefault();
    console.log(name, department)
}
    return(
      <form 
        onSubmit={ changeSetup }
        style={{ 
          width: "60%", 
          display: "flex", 
          flexDirection: "column", 
          alignContent: "center" 
        }
      }>
        <Typography 
          variant="h1" 
          mb={2} 
          fontSize={"1rem"} 
          color="primary"
        >
          Participe da pesquisa e seja parte da nossa mudança!
        </Typography>
        <TextField 
          sx={{ mb: "1rem" }} 
          label="Nome" 
          variant="outlined"
          onChange={ handleSetName }
        />
        <TextField 
          sx={{ mb:"1rem" }} 
          label="Departamento" 
          variant="outlined"
          onChange={ handleSetDepartment }

        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
        >
         Ir para pesquisa
        </Button>
    </form>
    );
}
export default SearchSetup;
