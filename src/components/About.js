import React from "react";
import {Container, Row, Col} from "reactstrap";




function About(props) {
    return (
        <Container className="pt-5 pb-5 bgAbout">
            <Row>
            <Col>
                <div className="d-flex justify-content-center">
                    <img className="headshot" style={{borderRadius: '50%'}} src="images/IMG_0490.jpeg" height="200" width="200" alt="Cory headshot" />
                </div>
            </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <h2 className="text-center">A little about me...</h2>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm="6" className="mx-auto">
                    <h4 className="text-center"> Hi, I'm Cory! </h4>
                    <p className="text-center">I'm a former golf pro turned web developer. I create intuitive, responsive websites that help businesses level-up. I am detail oriented and have a passion for helping others grow and achieve new goals, both in and out of the workplace. </p>
                    <p className="text-center">When I am not working, I like to take advantage of the many benefits of living in the PNW. In the winter, you can find me chasing fresh powder up on Mt. Hood. In the summer, I like to spend my time out on the golf course, or camping with my partner and our dog, Zuri. </p>
                </Col>
                <br />
            </Row>
        </Container>
    );
}

export default About;

