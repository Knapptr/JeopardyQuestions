import {useState,useEffect,useCallback} from 'react'
import dayjs from 'dayjs'

export const stripHTMLFromAnswerResponse = (string) =>{
// removes <i></i> tags from some jService answers
    const tagRE =  />(?<contents>.+)</
    if(tagRE.test(string)){
    string = string.match(tagRE).groups.contents}
    string = string.replace("\\","")
    return string;
}

export default function useFetch(requestURL){
    const [loading,setLoading] = useState(true)
    const [question,setQuestion] = useState(null)
    const [answer,setAnswer] = useState(null)
    const [category,setCategory] = useState(null)
    const [date,setDate] = useState(null)
    const [value,setValue] = useState(null)
    const [makeRequest,setMakeRequest] = useState(false)


    const requestData = useCallback(
        async ()=>{
       let response = await fetch('https://jservice.io/api/random') 
       let data = await response.json()
       data = data[0]
       setQuestion(data.question.toUpperCase())
       setAnswer(stripHTMLFromAnswerResponse( data.answer).toUpperCase())
       setDate(dayjs(data.airdate).format("MMMM D, YYYY"))
       setCategory(data.category.title.toUpperCase())
       setValue(data.value)
       setLoading(false)
    },[])

    const clearFieldsForNewQuestion = () =>{
        setQuestion(null)
        setAnswer(null)
        // setDate(null)
        // setCategory(null)
        // setValue(null)
    }
    
    useEffect(requestData,[requestData])

    return {question,answer,category,date,value,loading,requestData,clearFieldsForNewQuestion}
}