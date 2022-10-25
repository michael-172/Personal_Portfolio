import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col sm={12} md={6} className='text'>
                    <h1>Subscribe to our Newsletter<br/>& Never miss latest updates</h1>
                </Col>
                <Col sm={12} md={6} className='form-col'>
                    <div className='input-btn-container'>
                        <input type='text' placeholder='Email Adress'/>
                        <button>Submit</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter;