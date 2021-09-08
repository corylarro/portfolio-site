import React from 'react'
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap';



function Stack(props) {
    return (
        <Container className="pt-5 pb-5" id="stack">
            <Row>
                <Col>
                    <div className="d-flex justify-content-center">
                        <h2 className="sora"><b>What I Work With</b></h2>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm="3" className="justify-content-between mx-auto">
                    <Card className="stack-card">
                        <CardBody>
                            <CardText className="text-center">
                                <Row>
                                    <Col className="stack-shadow">
                                        <i class="fa fa-html5 fa-lg"></i>
                                            <p>HTML</p>
                                        <br />
                                        <i class="fab fa-css3-alt fa-lg"></i>
                                        <p>CSS</p>
                                    </Col>
                                        <br />
                                    <Col className="stack-shadow">
                                        <i class="fab fa-sass fa-lg"></i>
                                        <p>Scss</p>
                                        <br />
                                        <i class="fab fa-js-square fa-lg"></i>
                                        <p>JavaScript</p>
                                    </Col>
                                </Row>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3" className="justify-content-between mx-auto">
                    <Card className="stack-card">
                        <CardBody>
                            <CardText className="text-center">
                                <Row>
                                    <Col className="stack-shadow">
                                        <i class="fab fa-react fa-lg"></i>
                                        <p>React</p>
                                        <br />
                                        <i class="fab fa-react fa-lg"></i>
                                        <p>React Native</p>
                                    </Col>
                                    <br />
                                    <Col className="stack-shadow">
                                    <i class="fas fa-cogs fa-lg"></i>
                                        <p>Redux</p>
                                        <br />
                                        <i class="fab fa-bootstrap fa-lg"></i>
                                        <p>Bootstrap</p>
                                    </Col>
                                </Row>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm="3" className="justify-content-between mx-auto">
                    <Card className="stack-card">
                        <CardBody>
                            <CardText className="text-center">
                                <Row>
                                    <Col className="stack-shadow">
                                        <i class="fas fa-database fa-lg"></i>
                                        <p>Mongo DB</p>
                                        <br />
                                        <i class="fab fa-node fa-lg"></i>
                                        <p>Node JS</p>
                                    </Col>
                                <br />
                                    <Col className="stack-shadow">
                                        <i class="fab fa-npm fa-lg"></i>
                                        <p>npm</p>
                                        <br />
                                        <i class="fab fa-github-square fa-lg"></i>
                                        <p>GitHub</p>
                                    </Col>
                                </Row>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Stack;