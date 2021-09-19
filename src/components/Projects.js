import React from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

function Projects(props) {
    return(
        <div className="bg-projects pt-5 pb-5" id="projects">
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
                        <CardImg top width="100%" src="/images/nucamp2.png" alt="Nucampsite website image" />
                        <br />
                        <CardBody className="cardbody-project">
                        <CardTitle tag="h5" className="text-white text-center sora">Nucampsite</CardTitle>
                        <CardText className="text-white text-center sora">Nucampsite is a website built collaboratively with other students in my cohort. Utilizing React, Redux and CSS. This project was built during the React portion of the Nucamp Fullstack Mobile and Web Development bootcamp. </CardText>
                        <a href="https://github.com/corylarro/nucampsite2"><i className="fa fa-github text-white fa-lg fa-fw" /></a>{' '}
                        <a href="https://nucamp-campsite.herokuapp.com/home"><i className="fas fa-globe text-white fa-lg fa-fw" /></a>{' '}
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card-project">
                        <CardImg top width="100%" src="/images/stymied.png" alt="Stymied Golf website image" />
                        <CardBody className="cardbody-project">
                        <CardTitle tag="h5" className="text-white text-center sora pb-2">Stymied Golf</CardTitle>
                        <CardText className="text-white text-center sora pb-4">Stymied Golf is a solo project built using HTML, Bootstrap and CSS. The project was build during the front-end Bootstrap portion of the Nucamp Fullstack Mobile and Web Development bootcamp.</CardText>
                        <a href="https://github.com/corylarro/stymiedgolf"><i className="fa fa-github text-white fa-lg fa-fw" /></a>{' '}
                        <a href="https://peaceful-bose-8d7e14.netlify.app/index.html"><i className="fas fa-globe text-white fa-lg fa-fw" /></a>{' '}
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