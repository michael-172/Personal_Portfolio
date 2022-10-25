import {Container, Row, Col} from 'react-bootstrap';
import headerImg from "../assets/img/header-img.svg";
import {ArrowRightCircle} from 'react-bootstrap-icons'
import Typed from 'react-typed'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  return (
    <section className='banner' id='home'>
        <Container>
            <Row>
                <Col xs={12} md={6} xl={7} className='text'>
                    <TrackVisibility>
                    {({isVisible}) =>
                    
                        <div className={isVisible ? 'animate__animated animate__fadeInLeft' : ""}>
                            <span className='tagline'>Welcome to my portifolio</span>
                            <h1>{`Hi Iam Michael, `}<Typed strings={[
                            "Frontend Developer",
                            "Freelancer",
                            "Self Learner",
                            ]} typeSpeed={150} backSpeed={100} loop/></h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat perspiciatis odio, repudiandae ea dolor quo soluta dolorem deserunt unde exercitationem quidem est corporis ab quisquam id ipsum. Corporis, facilis modi?</p>
                            <button onClick={() => {console.log("lets connect")}}> Let's Connect <ArrowRightCircle size={25} className="icon"/> </button>
                        </div>
                    }
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5} className='img'>
                    <img src={headerImg} alt="headerimg" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner