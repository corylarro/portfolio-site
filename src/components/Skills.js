import React from 'react'
import {Container, Row, Col, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem} from 'reactstrap';
import 'font-awesome/css/font-awesome.css';



function Skills(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="d-flex justify-content-center">
                        <h2>What I work with... </h2>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm="4" className="justify-content-between mx-auto">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5" className="text-center">Front-End</CardTitle>
                            <CardText>
                                <ListGroup flush>
                                    <ListGroupItem>HTML <i class="fa fa-html5"></i></ListGroupItem>
                                    <ListGroupItem>CSS/SCSS <i class="fab fa-css3-alt"></i> <i class="fa fa-sass"></i></ListGroupItem>
                                    <ListGroupItem>JavaScript <i class="fa fa-js-square"></i></ListGroupItem>
                                    <ListGroupItem>React <i class="fa fa-react"></i></ListGroupItem>
                                    <ListGroupItem>React Native </ListGroupItem>
                                    <ListGroupItem>Bootstrap <i class="fa fa-bootstrap"></i></ListGroupItem>
                                </ListGroup>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4" className="justify-content-between mx-auto">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5" className="text-center">Back-End</CardTitle>
                            <CardText>
                                <ListGroup flush>
                                    <ListGroupItem>Node.JS<i class="fa fa-node"></i></ListGroupItem>
                                    <ListGroupItem>Mongo DB <i class="fab fa-css3-alt"></i> <i class="fa fa-sass"></i></ListGroupItem>
                                </ListGroup>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm="4" className="mx-auto">
                <Card>
                        <CardBody>
                            <CardTitle tag="h5" className="text-center">Accolades</CardTitle>
                            <CardText>
                                <h4>Nucamp Full Stack Web and Mobile Development Bootcamp</h4>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;