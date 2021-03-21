// box will fade between question and answer

import styled from 'styled-components'

export const InnerRelativeShell = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const ContentContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    transition: opacity 750ms;
    opacity: ${props=>props.isVisible?1:0};
    z-index: ${props=> props.isVisible?1:0}
`;

