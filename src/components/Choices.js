import EaseContainer from "./UI/EaseContainer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Choices.css';
import EaseButton from "./UI/EaseButton";

const Choices = (props) => {
    return(
        <EaseContainer>
            <Row className="choices-container ">
                <Col>
                    <EaseButton option = {props.title1}/>
                </Col>
                <Col>
                    <EaseButton option = {props.title2}/>
                </Col>
            </Row>
        </EaseContainer>
    );
}

export default Choices;
