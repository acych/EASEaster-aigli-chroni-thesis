import './ErrorMessages.css';

const ErrorMessages = (props) =>{
    if(props.visible){
        return(
            <div className="error-message">{props.message}</div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default ErrorMessages;