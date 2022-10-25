import React, { useRef } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qk80an2', 'template_mq1d6ki', form.current, 'mAiL5qEglOQfQB4Th')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
  return (
    <section className='contact' id='contact'>
        <Container>
            <Row>
                {/* Img Coulmn */}
                <Col sm={12} md={6} className='imgColumn'>
                    <img src={contactImg}/>
                </Col>
                
                {/* Form Coulmn */}
                <Col sm={12} md={6} className='formColumn'>
                    <form ref={form} onSubmit={submitHandler}>
                            <h1>Get in Touch</h1>
                            <Row style={{justifyContent: "center", alignItems:"center"}}>
                                <Row className='form-row'>
                                    <Col sm={12} md={6}>
                                        <input type="text" placeholder='First Name' name='fname'/>
                                    </Col>
                                    <Col sm={12} md={6}>
                                    <input type="text" placeholder='Last Name' name='lname'/>
                                    </Col>
                                </Row>

                                <Row className='form-row'>
                                    <Col sm={12} md={6}>
                                    <input type="text" placeholder='Email Adress' name='email'/>
                                    </Col>
                                    <Col sm={12} md={6}>
                                    <input type="text" placeholder='Phone Number' name='phone'/>
                                    </Col>
                                </Row>

                                <Row className='form-row'>    
                                    <Col sm={12} md={12}>
                                    <textarea className='textArea' name="message" id="" cols="30" rows="7" placeholder='Message'></textarea>
                                    </Col>
                                </Row>

                                <Row className='form-row'>
                                    <Col sm={12} md={3}>
                                    <button className='sendButton'>
                                        <span>Send</span>
                                    </button>
                                    </Col>
                                </Row>

                            </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact