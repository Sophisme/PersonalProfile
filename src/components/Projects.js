import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import{ ProjectCard} from "./ProjectCard";
import purpleBackground from '../images/purpleBackground.jpeg';
import logoexample from '../images/logoexample.png';

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup1",
            description: "Design & Development",
            imgUrl: logoexample,
    
        },
        {
            title: "Business Startup2",
            description: "Design & Development",
            imgUrl: logoexample,
        },
        {
            title: "Business Startup3",
            description: "Design & Development",
            imgUrl: logoexample,

        },
        {
            title: "Business Startup4",
            description: "Design & Development",
            imgUrl: logoexample,

        },
        {
            title: "Business Startup5",
            description: "Design & Development",
            imgUrl: logoexample,

        },
        {
            title: "Business Startup6",
            description: "Design & Development",
            imgUrl: logoexample,

        },


    ];

    return (

        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br></br>Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>

                            </Tab.Pane>
                            <Tab.Pane eventKey="second"> Lorem ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    
                    
                    </Col>
                </Row>
            </Container>
            <img className = "background-image-right" src={purpleBackground}></img>
        </section>
    )

}