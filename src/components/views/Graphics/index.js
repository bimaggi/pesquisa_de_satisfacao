import React, { useState, useEffect } from "react"
import { db, collection, getDocs } from "../../../firebase_config"
import NivoGraphic from '../../NivoGraphic'
import { Box } from '@mui/material'

function Graphics() {
  const dbCollection = collection(db, 'Questions')
  const [answer, setAnswer] = useState({})
 
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
    <Box style={{height:400}}>
      { 
        Object.keys(answer).map((key, index)=> 
          <NivoGraphic data={setNivoGraphic(answer[key])}key={index}/>)
      }
    </Box>
  )
};
export default Graphics
