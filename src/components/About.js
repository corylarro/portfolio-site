import React from "react";
import {Container, Row, Col} from "reactstrap";




function About(props) {
    return (
        <Container className="pt-5 pb-5">
            <Row>
                <Col sm="6">
                    <div className="headshot"></div>
                </Col>
            </Row>
            <Row>
                <Col sm="6">
                    <h1 className="text-center">Hi, I'm Cory!</h1>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm="6">
                    <p className="text-center">I'm a former golf pro turned web developer. I create intuitive, responsive websites that help businesses level-up. I am detail oriented and have a passion for helping others grow and achieve new goals, both in and out of the workplace. </p>
                <br />
                    <p className="text-center">When I am not working, I like to take advantage of the many benefits of living in the PNW. In the winter, you can find me chasing fresh powder up on Mt. Hood. In the summer, I like to spend my time out on the golf course, or camping with my partner and our dog, Zuri. </p>
                </Col>
            
            </Row>
        </Container>
    );
}

export default About;

