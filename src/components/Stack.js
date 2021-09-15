import React from 'react'
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap';



function Stack(props) {
    return (
        <Container className="pt-5 pb-5" id="stack">
            <Row>
                <Col>
                    <div className="d-flex justify-content-center">
                        <h2 className="sora description">What I Work With</h2>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md="6" className="justify-content-between mx-auto">
                    <Card className="stack-card">
                        <CardBody>
                                <Row>
                                    <Col className="stack-shadow">
                                        <i className="fa fa-html5 fa-lg hover"></i>
                                            <p>HTML</p>
                                        <br />
                                        <i className="fab fa-css3-alt fa-lg hover"></i>
                                        <p>CSS</p>
                                    </Col>
                                        <br />
                                    <Col className="stack-shadow">
                                        <i className="fab fa-sass fa-lg hover"></i>
                                        <p>Scss</p>
                                        <br />
                                        <i className="fab fa-js-square fa-lg hover"></i>
                                        <p>JavaScript</p>
                                    </Col>
                                </Row>
                                
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6" className="justify-content-between mx-auto">
                    <Card className="stack-card">
                        <CardBody>
                                <Row>
                                    <Col className="stack-shadow">
                                        <i className="fab fa-react fa-lg hover"></i>
                                        <p>React</p>
                                        <br />
                                        <i className="fab fa-react fa-lg hover"></i>
                                        <p>React Native</p>
                                    </Col>
                                    <br />
                                    <Col className="stack-shadow">
                                    <i className="fas fa-cogs fa-lg hover"></i>
                                        <p>Redux</p>
                                        <br />
                                        <i className="fab fa-bootstrap fa-lg hover"></i>
                                        <p>Bootstrap</p>
                                    </Col>
                                </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md="6" className="justify-content-between mx-auto">
                    <Card className="stack-card">
                        <CardBody>
                                <Row>
                                    <Col className="stack-shadow">
                                        <i className="fas fa-database fa-lg hover"></i>
                                        <p>Mongo DB</p>
                                        <br />
                                        <i className="fab fa-node fa-lg hover"></i>
                                        <p>Node JS</p>
                                    </Col>
                                <br />
                                    <Col className="stack-shadow">
                                        <i className="fab fa-npm fa-lg hover"></i>
                                        <p>npm</p>
                                        <br />
                                        <i className="fab fa-github-square fa-lg hover"></i>
                                        <p>GitHub</p>
                                    </Col>
                                </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Stack;