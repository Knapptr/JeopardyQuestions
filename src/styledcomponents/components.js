import styled from 'styled-components'
import {space,layout,typography} from 'styled-system'

export const jeopardyBlue = "#061790"
export const jeopardyNavy = "#0D0780"
export const jeopardyLightPurple = "#A76590"
export const jeopardyLavender = "#A390E4"
export const jeopardyYellow = "#FFCC00"
export const jeopardyPurple = "#320852"
export const jeopardyWhite = "#ededed"
export const jeopardyGray = "#424242"
export const defaultBoxShadow = "-1px 8px 10px #0b0b0b";
export const defaultTextShadow = "3px 3px black";

export const StyledApp = styled.div`
    width:100%;
`
export const StyledHeader = styled.header`
${layout}
${space}
    background-color: ${jeopardyBlue} ;
    border-radius: 2px; 
    box-shadow: ${defaultBoxShadow};
    max-width:1000px;

`
StyledHeader.defaultProps = {
   py: [3] ,
   my: [0,1],
   mx: [0,2,"auto"],
   

}
export const Title = styled.h1`
    margin: 0;
    ${space}
    ${layout}
    ${typography}
    color: ${jeopardyYellow};
    font-family: "Oswald";

`
Title.defaultProps ={
    fontSize: [5,6],
    textAlign: "center", 
    
}

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledQuestionInformation = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${jeopardyBlue};
    margin: auto;
    box-shadow: ${defaultBoxShadow};
    ${layout} 
    ${space}
    `
StyledQuestionInformation.defaultProps = {
    width: [1,3/4,1/2],
    height: ["auto",135],
    my: 3,
    py: 2
} 
 export const SmallHeader = styled.h4`
    font-size: .75em;
    margin: .25em;
`

export const SmallInfo = styled.p`
    font-size: 1em;
    min-height: 2em;
    margin: 0;
`
export const MedInfo = styled.p`
    font-size: 1.5em;
    margin: 10px;
    width: 100%;
`
export const MedHeader = styled.h2`
    margin: 0;
`
export const CategoryName = styled.h2`
    color: ${jeopardyWhite};
    font-weight: bold;
    text-shadow: ${defaultTextShadow} ;
    font-family: "Open Sans", sans;
    min-height: 44px;
    ${typography}
    ${space}
    ${layout}
`
CategoryName.defaultProps = {
    width: [1,1/2],
    textAlign: ["center","left"],
    fontSize: [3,4],
    my: 1
}
export const ValueInfo = styled(MedInfo)`
    color: ${jeopardyYellow};
    font-weight: bold;
    text-shadow: 2px 2px black;
    visibility: ${props=>props.visibility} ;
    ${typography}
    ${space}
    ${layout}
`
ValueInfo.defaultProps= {
    width: [1,1/8],
    textAlign: "center",
    fontSize: [4,4,5],
    my: 1
}
export const VisibilityToggle = styled.div`
    visibility: ${props => props.visible? "visibile":"hidden"};
`
export const Button = styled.button`
    cursor: pointer;
    height: 35px;
    background-color: ${jeopardyBlue};
    color: ${jeopardyWhite}; 
    font-weight: bold;
    min-width: 110px;
    border: none;
    border-radius: 4px;
    ${layout}
    ${space}

    &:hover{
        box-shadow: 0px 1px 1px black;
    }
`
Button.defaultProps = {
    mx: 2
}

export const StyledAnswer = styled.div`
        margin: 1em;
`
export const StyledQuestion = styled.div`
    cursor: pointer;
    background-color: ${jeopardyBlue};
    font-weight: bold;
    color: white;
    box-shadow: ${defaultBoxShadow};
    margin: auto;
    ${layout}
    ${space}
`
StyledQuestion.defaultProps = {
    width: [1,3/4,1/2],
    height: [200,320,400],
}

export const QuestionAnswerText= styled.p`
    font-family: "Newsreader",serif;
    text-shadow: ${defaultTextShadow};
    ${typography}
    ${space}
    ${layout}
`
QuestionAnswerText.defaultProps = {
    fontSize: [2,4,5],
    px: [4,6,5],
    maxWidth: [350,400],
    lineHeight: 1.5
}

export const StyledLoadingWrapper = styled.div`
    margin: auto;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContentFrame = styled.div`
    ${layout}
    ${space}
`
ContentFrame.defaultProps = {
    mb: [4,2],
    mx: "auto"

}
export const Controls = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Date = styled.div`
    text-align: center;
    font-size: .8em; 
    color: ${jeopardyWhite};
    ${layout};
    ${space};
    ${typography};
`
Date.defaultProps = {
    width: 1,
    fontSize: [1,2] 
}