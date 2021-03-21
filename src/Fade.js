import {useState,useEffect} from 'react'
import { StyledQuestion } from './styledcomponents/components'

export const Fade = ({ElementOne,ElementTwo,answerVisible,propsOne,propsTwo},fadeTime=500 )=>{
    const [mount,setMount] = useState(0+answerVisible)//Inner Index

    useEffect(()=>{
        setTimeout(()=>{
            setMount(0+answerVisible)
        },fadeTime)
    },answerVisible)

    const mountAccordingToFadeLogic = () =>{
        console.log('mount:',mount)
        if(mount === 0){
            return (
            <div style={{opacity: answerVisible?0:1, transition: `opacity ${fadeTime}`}}>
                <ElementOne {...propsOne}/>
            </div>
            )
        }
        return (
            <div style={{opacity: answerVisible?1:0, transition: `opacity ${fadeTime}`}}>
                <ElementTwo {...propsTwo}/>
            </div>
        )
    }

     return mountAccordingToFadeLogic()
    
}