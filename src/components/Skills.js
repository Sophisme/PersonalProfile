import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logoexample from '../images/logoexample.png';
//4 images instead of headerImg 4 times
import purpleBackground from '../images/purpleBackground.jpeg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            //the naming can be any, depends on you
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },    
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        },     

    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                           <h2>
                                Skills
                            </h2> 
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={logoexample} alt="Image" style={{width: "120px", height: "auto"}}/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={logoexample} alt="Image" style={{width: "120px", height: "auto"}} />
                                    <h5>Web Security</h5>
                                </div>
                                <div className="item">
                                    <img src={logoexample} alt="Image" style={{width: "120px", height: "auto"}} />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={logoexample} alt="Image" style={{width: "120px", height: "auto"}} />
                                    <h5>Java</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={purpleBackground} />
        </section>
    )
}