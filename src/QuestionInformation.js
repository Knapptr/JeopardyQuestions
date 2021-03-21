import {ValueInfo,CategoryName, SmallHeader,StyledQuestionInformation, VisibilityToggle} from './styledcomponents/components'



export default function QuestionInformation({category,value,date}){

return(
    <StyledQuestionInformation>
            <CategoryName>{category}</CategoryName>
            <ValueInfo>{value?"$":null}{value}</ValueInfo>
    </StyledQuestionInformation>
    )
}