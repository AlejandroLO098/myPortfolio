import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ProjectCard from "./ProjectCard";
import pro01 from "../assets/img/ecomv2.png";
import pro02 from "../assets/img/ecomv1.png";
import pro03 from "../assets/img/wikipedia2.png";
import pro04 from "../assets/img/blue-marble.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects01 = [
    {
      title: "Ecommerce V2",
      description: "Second version of videogame ecommerce full stack",
      imgurl: pro01,
      url: "https://main.d2bo0r8q8rvxx5.amplifyapp.com/",
    },
    {
      title: "Ecommerce V1",
      description: "First version of my videogame ecommerce website",
      imgurl: pro02,
      url: "https://main.d2mce6lmi95tow.amplifyapp.com/",
    },
    {
      title: "Wikipedia",
      description: "Wikipedia redesign with multiple APIs and a backend server",
      imgurl: pro03,
      url: "",
    },
    {
      title: "Blue Marble",
      description: "Hope Hacks website that advocates for planet wellness",
      imgurl: pro04,
      url: "https://hopehacks1.herokuapp.com",
    },
  ];
  const projects02 = [];
  const projects03 = [];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link className="left" eventKey="first">
                          Portfolio Creation
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="middle" eventKey="second">
                          Website Development
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="right" eventKey="third">
                          Frontend / Backend
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="projectslideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects01.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects02.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects03.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
