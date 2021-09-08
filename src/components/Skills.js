import React from 'react'
import {Container, Row, Col, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem} from 'reactstrap';
import 'font-awesome/css/font-awesome.css';



function Skills(props) {
    return (
        <Container className="pt-5 pb-5">
            <Row>
                <Col>
                    <div className="d-flex justify-content-center">
                        <h2 className="sora">What I work with...</h2>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm="4" className="justify-content-between mx-auto">
                    <Card className="tech-card">
                        <CardBody>
                            <CardTitle tag="h5" className="text-center sora"><u>Front-End</u></CardTitle>
                            <CardText>
                                <ListGroup flush>
                                    <ListGroupItem className="text-center sora">HTML <i class="fa fa-html5"></i></ListGroupItem>
                                    <ListGroupItem className="text-center sora">CSS/SCSS <i class="fab fa-css3-alt"></i> <i class="fa fa-sass"></i></ListGroupItem>
                                    <ListGroupItem className="text-center sora">JavaScript <i class="fa fa-js-square"></i></ListGroupItem>
                                    <ListGroupItem className="text-center sora">React <i class="fa fa-react"></i></ListGroupItem>
                                    <ListGroupItem className="text-center sora">React Native </ListGroupItem>
                                    <ListGroupItem className="text-center sora">Bootstrap <i class="fa fa-bootstrap"></i></ListGroupItem>
                                </ListGroup>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4" className="justify-content-between mx-auto pt-5">
                    <Card className="tech-card">
                        <CardBody>
                            <CardTitle tag="h5" className="text-center sora"><u>Back-End</u></CardTitle>
                            <CardText>
                                <ListGroup flush>
                                    <ListGroupItem className="text-center sora">Node.JS<i class="fa fa-node"></i></ListGroupItem>
                                    <ListGroupItem className="text-center sora">Mongo DB <i class="fab fa-css3-alt"></i> <i class="fa fa-sass"></i></ListGroupItem>
                                </ListGroup>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm="4" className="mx-auto">
                <Card className="tech-card">
                        <CardBody>
                            <CardTitle tag="h5" className="text-center sora"><u>Accolades</u></CardTitle>
                            <CardText>
                                <h4 className="sora">Nucamp Full Stack Web and Mobile Development Bootcamp</h4>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
        </Container>
    )
}

export default Skills;