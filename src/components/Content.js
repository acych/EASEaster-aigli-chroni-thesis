import EaseBreadcrumb from "./UI/EaseBreadcrumb";
import './Content.css';
import Choices from "./Choices";
import EaseSubtitle from "./UI/EaseSubtitle";
import { useState } from "react";

const Content = () => {
    // [subtitle,setSubtitle] = useState('');
    
    // var subtitleChangeHandler = (props) => {
    //     setSubtitle(props.subtitle);
    // }

    let buttonTitle1 = "Individual";
    let buttonTitle2 = "Business";
    return(
        <div className="content">
            <EaseBreadcrumb />
            {/* <EaseSubtitle onSubtitleChange={subtitleChangeHandler} title={subtitle} /> */}
            <Choices title1={buttonTitle1} title2={buttonTitle2} />
        </div>
    );
}

export default Content;