import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import {projects, projects2, projects3} from "./dummyData"
import ProjectCard from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
        <Container>
            <Row>
                <Col sm={12}>
                <TrackVisibility>
                    {({isVisible}) =>
                    
                    <div className={isVisible ? 'animate__animated animate__fadeInUp' : ""}>
                    <h1 className='sectionHeading'>Projects</h1>
                    <p className='topP'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    }
                    </TrackVisibility>   
                    <Tab.Container defaultActiveKey="first">
                        <Nav variant="pills" >
                        <Nav.Item>
                        <Nav.Link eventKey="first" className='firstTab'>Simple</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second" className='secondTab'>Intermediate</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third" className='thirdTab'>Advanced</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" className="Projects-Container">
                               {projects.map((p, index) => {
                                    return (
                                        <ProjectCard project={p} key={index}/>
                                )
                               })}
                            </Tab.Pane>

                            <Tab.Pane eventKey="second" className="Projects-Container">
                            {projects2.map((p, index) => {
                                    return (
                                        <ProjectCard project={p} key={index}/>
                                )
                               })}
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" className="Projects-Container">
                            {projects3.map((p, index) => {
                                    return (
                                        <ProjectCard project={p} key={index}/>
                                )
                               })}
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>                        
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects