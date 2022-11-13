import { Container, Row, Col } from "react-bootstrap";

import Typewriter from "typewriter-effect";
import "./Home.css"
export const Home = () => {
  return (
    <section className="banner" id="banner">
      <Container id="container">
        <Row className=" shadow-white-3 ">
          <Col xs={12} md={6} xl={9}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>{`Hi I'm Rakesh Yadav`}</h1>
          </Col>
          <Col xs={12} md={6} xl={9} className="mt-4" id="typeWriter">
            <Typewriter options={
                {
                strings:[ 'Full Stack Web Developer...','MERN Stack'],
            autoStart: true,
            loop: true,
            deleteSpeed: 20,
            }}
            />
          </Col>
          <Col xs={12} md={6} xl={9} className="pt-3 text-primary">
            <p>
              Full Stack Web Developer, I have a passion for coding and get most
              enjoyment from solving problems with writing elegant/maintainable
              code and sharing knowledge
            </p>
            <h2 className="pt-3">RELIABLE & RESPONSIBLE</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
