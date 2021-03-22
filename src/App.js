import './App.css';
import useRandomQuestion from './hooks/useRandomQuestion'
import Header from './header'
import LoadingHandler from './LoadingHandler'
import QuestionInformation from './QuestionInformation';
import {Button,StyledApp,ContentFrame,Controls} from './styledcomponents/components'
import {useEffect, useState} from 'react'
import QuestionAnswerBox from './QuestionAnswerBox'
function App() {
  const {question,answer,category,value,date,loading,requestData} = useRandomQuestion() 
  const [answerVisible,setAnswerVisible] = useState(false)
  const [questionVisible,setQuestionVisible] = useState(false)


  useEffect(()=>{
    if(question){
    setAnswerVisible(false)
    setQuestionVisible(true)
  }
  },[question])

  const getNewQuestion= () =>{
    setAnswerVisible(false)
    setQuestionVisible(false)
    setTimeout(requestData,750) }// Wait until q+a have faded before getting info

  const toggleQuestionAnswer = () =>{
    setAnswerVisible(av=>!av)
    setQuestionVisible(qv=>!qv)
  }

  return (
    <StyledApp>
      <Header/>
      <LoadingHandler loading={loading} >
        <ContentFrame>
            <QuestionInformation date={date} category={category} value = {value} />
            <QuestionAnswerBox 
            answerVisible={answerVisible} 
            questionVisible={questionVisible} 
            question={question} 
            answer={answer}
            clickHandler={toggleQuestionAnswer} 
            />
        </ContentFrame>
      <Controls>
        <Button
          onClick={()=>{
            toggleQuestionAnswer()
          }}>
          Reveal Answer
        </Button>
      
        <Button 
          bg="blue" 
          color="red" 
          onClick={()=>{
          getNewQuestion()}}>
          Ask Another
          </Button>

      </Controls>
      </LoadingHandler>
    </StyledApp>
  );
}

export default App;
