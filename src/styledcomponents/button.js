import styled,{css} from 'styled-components'

export const Button = styled.button`
background-color: ${props=> props.bg?props.bg:'black'};
color: ${props=>props.bg?props.color:'white' };
`