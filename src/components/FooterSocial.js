import facebook from "../images/Social/facebook.png";
import instagram from "../images/Social/instagram.png";
import linkedin from "../images/Social/linked-in.png";
import twitter from "../images/Social/twitter.png";
import youtube from "../images/Social/you-tube.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterSocial = () => {
    return(
        <Row className="footer-social">
            <Col>
                <img src={facebook} alt="facebook" />
            </Col>
            <Col>
                <img src={instagram} alt="instagram" />
            </Col>
            <Col>
                <img src={linkedin} alt="linked-in" />
            </Col>
            <Col>
                <img src={twitter} alt="twitter" />
            </Col>
            <Col>
                <img src={youtube} alt="you-tube" />
            </Col>
        </Row>

    );
}

export default FooterSocial;