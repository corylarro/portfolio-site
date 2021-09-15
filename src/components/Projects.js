import React from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

function Projects(props) {
    return(
        <div className="bg-projects" id="projects">
        <Container>
            <Row>
                <Col>
                    <div className="d-flex justify-content-center">
                        <h2 className="sora description projects">Projects</h2>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={4}>
                    <Card className="card-project">
                        <CardImg top width="100%" src="/images/nucamp2.png" alt="Nucampsite image" />
                        <br />
                        <CardBody className="cardbody-project">
                        <CardTitle tag="h5" className="text-white text-center">Nucampsite</CardTitle>
                        <CardText className="text-white text-center">Nucampsite is a website built collaboratively with other students in my cohort. Utilizing React, Redux and CSS.</CardText>
                        <a href="https://github.com/corylarro/nucampsite2"><i className="fa fa-github text-white fa-lg fa-fw" /></a>{' '}
                        <a href="https://nucamp-campsite.herokuapp.com/home"><i className="fas fa-globe text-white fa-lg fa-fw" /></a>{' '}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        <br />
        </div>
    );
}

export default Projects;