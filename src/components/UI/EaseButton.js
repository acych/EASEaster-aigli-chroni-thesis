import { useState } from "react";
import './EaseButton.css';

const EaseButton = (props) => {
    const [option, setOption] = useState(props.option);

    const choiceHandler = () => {
        setOption("New Title");
    }
    return(
        <button className="ease-button" onClick={choiceHandler} type="button">{option}</button>
    );
}

export default EaseButton;