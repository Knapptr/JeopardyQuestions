import {useEffect, useState} from 'react'
import {StyledAnswer,VisibilityToggle,Button, MedInfo} from './styledcomponents/components'
const Answer = ({answer}) =>{
    return(
        <MedInfo>
            {answer}
        </MedInfo>
    )
}

export default Answer