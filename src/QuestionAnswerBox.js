import {Container,InnerRelativeShell,ContentContainer} from './StyledQuestionAnswerBox'
import {StyledQuestion, StyledQuestionText} from './styledcomponents/components'

// box will fade between question and answer
const QuestionAnswerBox = ({answerVisible,questionVisible,question,answer,clickHandler}) =>{
    return(
        <StyledQuestion onClick={clickHandler}>
            <InnerRelativeShell>
                {/* //question container */}
                <ContentContainer isVisible={questionVisible}>
                    <StyledQuestionText>{question}</StyledQuestionText>
                </ContentContainer>
                {/* // answer container */}
                <ContentContainer isVisible={answerVisible}>
                    <StyledQuestionText>{answer}</StyledQuestionText>
                </ContentContainer>
            </InnerRelativeShell>           
        </StyledQuestion>
    )
}

export default QuestionAnswerBox