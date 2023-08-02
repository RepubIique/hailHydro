import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../styles/header.css'

export const Header = (props) => {
    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md={8} className="intro-text">
                                <h1>
                                    {props.data ? props.data.title : 'Loading'}
                                    <span></span>
                                </h1>
                                <p>
                                    {props.data
                                        ? props.data.paragraph
                                        : 'Loading'}
                                </p>
                                <Button
                                    className="btn-lg button"
                                    href="#contact"
                                >
                                    Ask us how we can help
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </header>
    )
}