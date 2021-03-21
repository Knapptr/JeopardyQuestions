import {BeatLoader} from 'react-spinners'
import {StyledLoadingWrapper,jeopardyPurple} from './styledcomponents/components' 

const Loader = () =>{
    return(
        <StyledLoadingWrapper>
            <BeatLoader color={jeopardyPurple}/>
        </StyledLoadingWrapper>
    )
}
const LoadingHandler = ({loading,children}) =>{
   if(loading) {
       return <Loader/>
   }
   return children 
}

export default LoadingHandler