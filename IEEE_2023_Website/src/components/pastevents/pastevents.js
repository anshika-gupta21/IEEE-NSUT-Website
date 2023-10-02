import {Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pos1 from "../Galleria/Galleria_images/Screenshot 2023-10-02 143325.png"

export const Projects=()=>{
    const projects=[
        {
        title:"Business Startup",
        description:"Design",
        imgUrl: pos1,
    },
    {
        title:"Business Startup",
        description:"Design",
        imgUrl: pos1,
    },
    {
        title:"Business Startup",
        description:"Design",
        imgUrl: pos1,
    },
    {
        title:"Business Startup",
        description:"Design",
        imgUrl: pos1,
    },
    {
        title:"Business Startup",
        description:"Design",
        imgUrl: pos1,
    },
    {
        title:"Business Startup",
        description:"Design",
        imgUrl: pos1,
    },
];

return(
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>lorem Impsun</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab One</Nav.Link></Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab One</Nav.Link></Nav.Item>    
                            
                            
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project,index)=>{
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}/>
                                                )
                                            })

                                        }
                                        </Row></Tab.Pane>
                                        <Tab.Pane eventKey="second">lorem</Tab.Pane>
                                        <Tab.Pane eventKey="third">lorem</Tab.Pane>
                                        
                                        </Tab.Content></Tab.Container></Col>
            </Row>
        </Container>
    </section>
)
}