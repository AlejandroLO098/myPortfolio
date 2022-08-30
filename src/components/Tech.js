import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import java from "../assets/img/java4.svg";
import react from "../assets/img/react.png";
import javascript from "../assets/img/javascript.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import aws from "../assets/img/aws.png";
import node from "../assets/img/node.png";
import git from "../assets/img/git.png";

export const Tech = () => {
  const responsive = {
    xtraLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="technologies" id="technologies">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Technologies</h2>
            <p>I like to work with</p>
            <div className="technologies-bx">
              <Carousel
                responsive={responsive}
                infinite={true}
                className="technologies-slider"
              >
                <div className="item">
                  <h5>Git</h5>
                  <img src={git} alt="Image" />
                </div>
                <div className="item">
                  <h5>AWS</h5>
                  <img src={aws} alt="Image" />
                </div>
                <div className="item">
                  <h5>Java</h5>
                  <img src={java} alt="Image" />
                </div>
                <div className="item">
                  <h5>React</h5>
                  <img src={react} alt="Image" />
                </div>
                <div className="item">
                  <h5>HTML</h5>
                  <img src={html} alt="Image" />
                </div>
                <div className="item">
                  <h5>CSS</h5>
                  <img src={css} alt="Image" />
                </div>
                <div className="item">
                  <h5>javascript</h5>
                  <img src={javascript} alt="Image" />
                </div>
                <div className="item">
                  <h5>Node JS</h5>
                  <img src={node} alt="Image" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
