import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logo.png";
import "./Header.css"
import EaseCarousel from './UI/EaseCarousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
        return (
              <Row className='header-section align-items-center'>
                <Col className='logo-intro' xs={5}>
                    <img src={logo} alt="Logo" />
                    <div className='intro'>
                        Help victims of natural disasters
                    </div>
                </Col>
                <Col><EaseCarousel /></Col>
              </Row>
          );
}

export default Header;