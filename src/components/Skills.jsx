import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <section className='skills' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-box'>
                        <h1 className='sectionHeading'>Skills</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry<br />.Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite="true">
                        <div className='item'>
                            <img src={meter1} alt="{meter1}" className='meterImg'/>
                            <h5>Web Development</h5>
                        </div>
                        
                        <div className='item'>
                            <img src={meter2} alt="{meter1}" className='meterImg'/>
                            <h5>UI/UX</h5>
                        </div>

                        <div className='item'>
                            <img src={meter3} alt="{meter1}" className='meterImg'/>
                            <h5>Testing</h5>
                        </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Skills