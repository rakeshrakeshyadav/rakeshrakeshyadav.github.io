import { Container,Row,Col } from "react-bootstrap"
import{ArrowRightCircle} from "react-bootstrap-icons"
import profile from "../assets/img/profile.png"
import Type from "./Type"
export const Home=()=>{
    return(
        <section className="banner" id="home">
            <Container >
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Rakesh Yadav`}</h1>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <Type/>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                    
                        <p>
                            Full Stack Web Developer, I have a passion for coding and get most enjoyment from solving problems with writing elegant/maintainable code and sharing knowledge
                        </p>
                            <h2>RELIABLE & RESPONSIBLE</h2>
                        <button>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} id="profile">
                        <img src={profile} alt="profile img"  />
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}
