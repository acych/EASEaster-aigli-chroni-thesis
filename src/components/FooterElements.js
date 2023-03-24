import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FooterElements = () => {
    var footerElements = [
        {
            title: 'About',
            links: [
                {
                    title: 'About Us',
                    url: ''
                },
                {
                    title: 'Terms & Conditions',
                    url: ''
                }
            ]
        },
        {
            title: 'Services',
            links: [
                {
                    title: 'Our Services',
                    url: ''
                },
                {
                    title: 'Help',
                    url: ''
                }
            ]
        },
        {
            title: 'Contact',
            links: [
                {
                    title : 'Contact Us',
                    url: ''
                }
            ]
        }
    ];

    return(
        <Col>
            <Row>
            {
                footerElements.map((footerElement,index) => {
                    return (
                        <Col key={index}><div className='footer-title'>{footerElement.title}</div>
                            <div>
                                {
                                    footerElement.links.map((link,i) =>{
                                        return (
                                            <div key={i}>
                                                <a className='footer-links' href={link.url}>{link.title}</a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    )
                }
                )
            }
            </Row>
        </Col>
        // <div>
        //     <h5>{props.title}</h5>
        // </div>
    );
}

export default FooterElements;