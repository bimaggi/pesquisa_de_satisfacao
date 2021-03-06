import React, { useState } from "react";
import { TextField, Button, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { db, collection, setDoc, doc } from "../../firebase_config";
import Department from "../Department";
import { DEPARTMENT } from '../../enums/constants'

function SearchSetup() {
  const [ name, setName ]= useState()
  const [ department, setDepartment ]= useState()
  const [ nameError, setNameError ]= useState( false )
  const [ departmentError, setDepartmentError ]= useState( false )
 
  const dbCollection = collection( db, 'User' )
  let navigate = useNavigate();
  
  function handleSetName( e ) {
    setName( e.target.value )
  }
  function handleSetDepartment( value ) {
    setDepartment( value )
  }
  async function changeSetup( e ) {
    e.preventDefault();
    setNameError( false )
    setDepartmentError( false )
    if( !name ) {
      setNameError( true )
    }
    if( !department ) {
      setDepartmentError( true )
    }
    if( name && department ) {
    await setDoc(doc(dbCollection), {
      name: name,
      department: department,
    })
      setName('')
      setDepartment('')
      navigate("/pesquisa");
    }
  }
  return(
    <form 
      onSubmit={ changeSetup }
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignContent: "center" 
      }}
      >
      <Typography 
        variant= "h1" 
        sx={{ 
          fontSize: { md:"1.1rem", xs:"0.8rem" },
          margin: { md:"1rem", xs:"0.8rem" }
        }}
      >
        Participe da pesquisa e seja parte da nossa mudança!
      </Typography>
      <TextField 
        sx={{ mb: "1rem" }} 
        label= "Nome" 
        variant= "outlined"
        error={ nameError }
        onChange={ handleSetName }
      />
      <Department 
        department={ DEPARTMENT }
        onChange={ handleSetDepartment } 
        error={ departmentError }
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        sx={{ mt: "1rem" }}
      >
       Ir para pesquisa
      </Button>
    </form>
  )
}
export default SearchSetup
