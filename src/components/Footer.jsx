import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import Newsletter from './Newsletter';
import SocialIcons from "./SocialIcons"

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row style={{justifyContent:"space-between"}}>
            <Newsletter/>
                <Col sm={12} md={3} className='footer-logo'>
                    <img src={logo}/>
                </Col>
                <Col sm={12} md={6} className='footer-links'>
                    <SocialIcons />
                    <span style={{color: "white", marginTop: "10px"}}>Copyright 2022. All Rights Reserved</span>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;