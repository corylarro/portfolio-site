import React from 'react'
import {Container, Row, Col} from 'reactstrap';

function Skills(props) {
    return (
        <Container>
            <Row>
                <Col sm="4">
                HTML
                </Col>
                <Col sm="4">
                CSS
                </Col>
                <Col sm="4">
                JavaScript
                </Col>
            </Row>
            <Row>
                <Col sm="6">
                    React
                </Col>
                <Col sm="6">
                    React Native
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;