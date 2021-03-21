import styled from 'styled-components'

export const jeopardyBlue = "#061790"
export const jeopardyGrey = "#f9f9f9"
export const jeopardyYellow = "#FFCC00"
export const jeopardyPurple = "#4f0099"
export const jeopardyWhite = "#ededed"

export const StyledApp = styled.div`
    width:100%;
`
export const StyledHeader = styled.header`
    background-color: ${jeopardyBlue} ;
    display: flex;
    flex-direction: column;
    color: ${jeopardyYellow};
`

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledQuestionInformation = styled.div`
    margin: .5em;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Helvetica',sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${jeopardyBlue};
    padding: 10px;
    height: 100px;
    border-radius: 2%;
    max-width: 500px;
    
    `
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
    margin: .25em;
`
export const CategoryName = styled(MedInfo)`
    color: ${jeopardyWhite};
    font-weight: bold;
    text-align: center;
    text-shadow: 3px 3px black;
    width: 60%;
    font-family: "Open Sans", sans;
`
export const ValueInfo = styled(MedInfo)`
    color: ${jeopardyYellow};
    font-weight: bold;
    width: 15%;
    text-shadow: 2px 2px black;
    font-size: 2em;
`
export const VisibilityToggle = styled.div`
    visibility: ${props => props.visible? "visibile":"hidden"};
`
export const Button = styled.button`
    cursor: pointer;
    margin: 5px;
    height: 35px;
    background-color: ${jeopardyPurple};
    color: ${jeopardyYellow}; 
    font-weight: bold;
    min-width: 110px;
    border: none;
    border-radius: 7%;

    &:hover{
        box-shadow: 0px 1px 1px black;
    }
`
export const StyledAnswer = styled.div`
        margin: 1em;
`
export const StyledQuestion = styled.div`
    cursor: pointer;
    margin: auto;
    max-width: 400px;
    height: 200px;
    background-color: ${jeopardyBlue};
    font-weight: bold;
    padding: 75px;
    color: white;
    box-shadow: -1px 8px 10px lightgray;
`

export const StyledQuestionText = styled(MedInfo)`
    font-family: "Newsreader",serif;
    text-shadow: 3px 3px black;
`

export const StyledLoadingWrapper = styled.div`
    margin: auto;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContentFrame = styled.div`
    max-width: 75%;
    margin: auto;
`
export const Controls = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Date = styled.div`
    text-align: center;
   font-size: .8em; 
`