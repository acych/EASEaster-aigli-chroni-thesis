import EaseContainer from "./EaseContainer"
import './EaseSubtitle.css';

const EaseSubtitle = (props) => {
    return (
        <div className="ease-subtitle">
            <EaseContainer>
                <div className="ease-subtitle-inner">{props.title}</div>
            </EaseContainer>
        </div>
    )
}

export default EaseSubtitle;