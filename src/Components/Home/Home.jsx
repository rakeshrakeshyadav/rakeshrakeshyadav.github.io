import { Box, Flex, Text } from "@chakra-ui/react";
import {  Row, Col } from "react-bootstrap";

import Typewriter from "typewriter-effect";
import "./Home.css"
export const Home = () => {
  return (
    <Box className="banner" id="home" m="auto" >
      <Flex id="container" w="80%" >
        <Row className=" shadow-white-3 ">
          <Box xs={12} md={6} xl={9} m="auto" fontSize={{sm:'2em'}}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>{`Hi I'm Rakesh Yadav`}</h1>
          </Box>
          <Col xs={12} md={6} xl={9} className="mt-1 ml-3" id="typeWriter" >
            <Typewriter options={
                {
                strings:[ 'Full Stack Web Developer...','MERN Stack'],
            autoStart: true,
            loop: true,
            deleteSpeed: 20,
            }}
            />
          </Col>
          <Box w="80%" m="auto">
            <Text mt="2rem">
              Full Stack Web Developer, I have a passion for coding and get most
              enjoyment from solving problems with writing elegant/maintainable
              code and sharing knowledge
            </Text>
            <h2 className="pt-3">RELIABLE & RESPONSIBLE</h2>
          </Box>
        </Row>
      </Flex>
    </Box>
  );
};
