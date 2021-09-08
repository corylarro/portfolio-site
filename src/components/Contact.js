import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import { Card, CardBody, CardText, Button, Container, Row, Col} from 'reactstrap';



function Contact(props) {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
    setIsFlipped(!isFlipped);
    }
    
    
    return (
        <React.Fragment>
            <Container className="pt-5 pb-5" id="contact">
                <Row>
                    <Col>
                        <div className="d-flex justify-content-center">
                            <h2 className="sora"><b>Contact</b></h2>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm="5" className="mx-auto">
                        <Card className="location-front-item">
                            <CardBody>
                                <CardText>
                                    <h2 className="text-center" >Let's Work Together</h2>
                                </CardText>
                                <div className="text-center">
                                    <Button className="front-flip-button sora" type="button" onClick={(e) => {e.preventDefault();window.location.href="mailto:cory.larro@gmail.com";}}> Send Me An Email</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="verticle">
            <Container className="pt-5 pb-5">
                <Row>
                    <Col sm="5" className="mx-auto">
                        <Card className="location-front-item">
                            <CardBody>
                                <CardText>
                                    <h2 className="text-center">Find Me On The Internet</h2>
                                </CardText>
                                <div className="text-center">
                                    <Button className="front-flip-button sora" onClick={handleClick}>Show Me The Links!</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="pt-5 pb-5">
                <Row>
                    <Col sm="5" className="mx-auto">
                        <Card className="location-back-item">
                            <CardBody>
                                <CardText className="text-center">
                                    <a className="btn btn-social-icon btn-github text-white" href="https://github.com/corylarro"><i className="fa fa-github" /></a>{' '}
                                    <a className="btn btn-social-icon btn-linkedin text-white" href="https://www.linkedin.com/in/cory-larro/"><i className="fa fa-linkedin" /></a>{' '}
                                    <a className="btn btn-social-icon btn-twitter text-white" href="https://twitter.com/CoryLarro"><i className="fa fa-twitter" /></a>{' '}
                                </CardText>
                                <div className="text-center">
                                    <Button className="back-flip-button" onClick={handleClick}>Take Me Back</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </ReactCardFlip>
        </React.Fragment>
    )
}

export default Contact;