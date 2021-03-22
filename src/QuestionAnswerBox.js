import {InnerRelativeShell,ContentContainer} from './StyledQuestionAnswerBox'
import {StyledQuestion,QuestionAnswerText} from './styledcomponents/components'

// box will fade between question and answer
const QuestionAnswerBox = ({answerVisible,questionVisible,question,answer,clickHandler}) =>{
    return(
        <StyledQuestion onClick={clickHandler}>
            <InnerRelativeShell>
                {/* //question container */}
                <ContentContainer isVisible={questionVisible}>
                    <QuestionAnswerText fontSize={question.length>140?[1,2,4]:[2,4,5]} >{question}</QuestionAnswerText>
                </ContentContainer>
                {/* // answer container */}
                <ContentContainer isVisible={answerVisible}>
                    <QuestionAnswerText>{answer}</QuestionAnswerText>
                </ContentContainer>
            </InnerRelativeShell>           
        </StyledQuestion>
    )
}

export default QuestionAnswerBox