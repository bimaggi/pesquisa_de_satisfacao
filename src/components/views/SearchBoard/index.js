import React, { useState } from "react"
import { Button, Box } from '@mui/material'
import { db, collection, setDoc, doc } from "../../../firebase_config"
import { useNavigate } from "react-router-dom"
import FormQuestionPage1 from "../../FormQuestionPage1"
import FormQuestionPage2 from "../../FormQuestionPage2"
import { QUESTION, OPTIONS, STATUS } from "../../../enums/constants"

function SearchBoard() {
  const dbCollection = collection(db, 'Questions')
  let navigate = useNavigate();

  const[ showform, setShowForm ]= useState("true")
  const [ question, setQuestion ]= useState({})

  function addQuestion(key, value) {
    setQuestion({
      ...question,
      [key]: value,
    })
  }
  async function setNextPage(e) {
    e.preventDefault()
     if (question.question1 && question.question2 && question.question3) {
      setShowForm("false")
    }
  }
  async function setResultPage( e ) {
    e.preventDefault()
    if (question.question4 && question.question5 && question.question6) {
      await setDoc(doc(dbCollection),{
        question
      })
      navigate("/graficos")
    }
  }
  return(
    <Box>
      { showform === "true" 
      ? <form onSubmit={ setNextPage } showform="true">
          <FormQuestionPage1 
            question={ QUESTION.QUESTION1 }
            options ={ OPTIONS.OPTIONS1 }
            value={ question }
            onChange={ value => addQuestion('question1', value) }
          />
          <FormQuestionPage1 
            question={ QUESTION.QUESTION2 }
            options ={ OPTIONS.OPTIONS2 }
            value={ question }
            onChange={ value => addQuestion('question2', value) }
          />
          <FormQuestionPage1 
           question={ QUESTION.QUESTION3 }
           options ={ OPTIONS.OPTIONS3 }
           value={ question }
           onChange={ value => addQuestion('question3', value) }
         />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
          >
            Próxima pagina
          </Button>
        </form>
        : <Box>
           <form showform="false" onSubmit={ setResultPage }>
            <FormQuestionPage2
            options={ OPTIONS.OPTIONS4 }
            question={ QUESTION.QUESTION4 }
            high={ STATUS.HIGH }
            low={ STATUS.LOW }
            value={ question }
            onChange={ value => addQuestion('question4', value) }
          />
          <FormQuestionPage2
            options={OPTIONS.OPTIONS4}
            question={QUESTION.QUESTION5}
            high= { STATUS.HIGH }
            low= { STATUS.LOW }
            value={question}
            onChange={ value => addQuestion('question5', value) }
          />
          <FormQuestionPage2
            options={OPTIONS.OPTIONS4}
            question={ QUESTION.QUESTION6 }
            high={ STATUS.HIGH }
            low= { STATUS.LOW }
            value={ question }
            onChange={ value => addQuestion('question6', value) }
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
          >
           Finalizar pesquisa
          </Button>
        </form>
      </Box>
    }
    </Box>
  );
}
export default SearchBoard;
