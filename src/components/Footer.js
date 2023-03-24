import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EaseContainer from './UI/EaseContainer';
import FooterInfo from './Footer-Info';
import FooterElements from './FooterElements';
import FooterSocial from './FooterSocial';
import './Footer.css';

const Footer = () =>{
    return(
        <div className='footer'>
            <EaseContainer>
                <Row>
                    <Col xs={3}><FooterInfo></FooterInfo></Col>
                    <FooterElements></FooterElements>
                </Row>
                <Row className='footer-rights'>
                    <Col xs={9}><div>© 2023 Aigli Chroni. All Rights Reserved</div></Col>
                    <Col><FooterSocial></FooterSocial></Col>
                </Row>
            </EaseContainer>
        </div>
    );
}

export default Footer;