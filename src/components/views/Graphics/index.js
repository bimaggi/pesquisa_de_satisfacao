import React, { useState, useEffect } from "react"
import { db, collection, getDocs } from "../../../firebase_config"
import NivoGraphic from '../../NivoGraphic'
import { Box, Typography } from '@mui/material'
import { QUESTION } from '../../../enums/constants'

function Graphics() {
  const dbCollection = collection(db, 'Questions')
  const [answer, setAnswer] = useState({})
  const titles = {
    question1: QUESTION.QUESTION1,
    question2: QUESTION.QUESTION2,
    question3: QUESTION.QUESTION3,
    question4: QUESTION.QUESTION4,
    question5: QUESTION.QUESTION5,
    question6: QUESTION.QUESTION6,
  }
 
  useEffect(() => {
    getAnswer()
  },[])
  
  async function getAnswer(){
     const answers={
       question1: [],
       question2: [],
       question3: [],
       question4: [],
       question5: [],
       question6: [],
     }
     await getDocs(dbCollection)
        .then((snapshot)=>{
          snapshot.forEach(item => {
            answers.question1.push(item.data().question.question1)
            answers.question2.push(item.data().question.question2)
            answers.question3.push(item.data().question.question3)
            answers.question4.push(item.data().question.question4)
            answers.question5.push(item.data().question.question5)
            answers.question6.push(item.data().question.question6)
          })
        }).catch(err => {
          console.log(err.message)
      })
      setAnswer( answers )
  }
  function setNivoGraphic(data = []) {
    const dataAnswer=  data.map(item => ({
      key: item,
      value: data.filter(v => v === item).length
    }))
    return dataAnswer
  }
  return(
    <Box 
      sx={{
        height:"400px",
        width: "100%",
      }}
    >
      <Typography 
        variant="h1" 
        sx={{
          fontSize:{md: "2.3rem", xs:"2rem"}, 
          marginTop:{md: "4%", xs: "10%"}, 
          marginBottom:"8%",
          textAlign:"center",
        }}
      >     
          Gráfico de resultados
      </Typography>

      { 
        Object.keys(answer).map((key, index)=> (
          <NivoGraphic title={titles[key]} data={setNivoGraphic(answer[key])}key={index}/>
        ))
      }
    </Box>
  )
};
export default Graphics
