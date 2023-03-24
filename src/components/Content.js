import EaseBreadcrumb from "./UI/EaseBreadcrumb";
import './Content.css';
import Choices from "./Choices";

const Content = () => {
    let buttonTitle1 = "Individual";
    let buttonTitle2 = "Business";
    return(
        <div className="content">
            <EaseBreadcrumb />
            <Choices title1={buttonTitle1} title2={buttonTitle2} />
        </div>
    );
}

export default Content;