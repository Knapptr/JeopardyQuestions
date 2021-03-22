import {Date,ValueInfo,CategoryName,StyledQuestionInformation } from './styledcomponents/components'



export default function QuestionInformation({category,value,date}){

return(
    <StyledQuestionInformation >
        <Date>{date}</Date>
            <CategoryName fontSize={category.length>30?[2,3]:[4,5]}>{category}</CategoryName>
            <ValueInfo visibility={value?"visible":"hidden"} >{value?"$":null}{value||"$00"}</ValueInfo>
    </StyledQuestionInformation>
    )
}