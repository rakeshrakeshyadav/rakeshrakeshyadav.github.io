import { Box, Flex, Text, Grid, Image, Heading } from "@chakra-ui/react";
import { motion} from "framer-motion";
import { CalendarIcon } from "@chakra-ui/icons";
import "./About.css";

const About = () => {
  return (
    <Box mt="2em">
        <Flex justifyContent={"center"} mt="80px" bgColor="#AFCDF0" w="80%" m="auto">
            <Text
            color="orange.500"
            fontSize="22px"
            letterSpacing="20px"
            fontWeight="700"
            >
            ABOUT
            </Text>
        </Flex>
        <Box id="ABOUT" pt={2} mt="2em">
        
        <Grid
            w="90%"
            m="auto"
            pt={4}
            gap={{ base: "2", md: "10" }}
            mt={{ base: "8", md: "0" }}
            gridTemplateColumns={{ base: "none", md: "1fr 2fr" }}
          
        >
           <motion.div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                padding:"0px 5px",
                }}
                initial={{
                    x:-200,
                    opacity:0,
                    }}
                transition={{duration:0.8}} whileInView={{opacity:1,x:0}}>
 <Image
            src="https://i.ibb.co/zQq0Rdz/profile.png"
            borderRadius="50%"
            w={{ base: "250px", md: "50%", lg:"50%"}}
            />
                </motion.div>
           
            <motion.div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                padding:"0px 5px",
                }}
                initial={{
                    x:-200,
                    opacity:0,
                    }}
                transition={{duration:0.8}} whileInView={{opacity:1,x:0}}>
                <Text letterSpacing={"1px"}  w={{sm:"100%",lg:"80%"}} fontWeight={"400"} lineHeight="2">
                    Hello Everyone ,I am Rakesh Kumar Yadav from Mumbai.
                    I have completed my graduation in Bachelor of Science (Computer Science) from Smt.CHM College.
                    After completing my graduation I joined Here Technologies, Navi Mumbai as a Spatial Data Specialist-I for 2 Years and 6 Months.
                </Text>
            </motion.div>
        </Grid>
        <br />
        <br />
        <Grid pt="5%" w="90%" gap="5" m='auto' gridTemplateColumns={{base:"1fr",md:"repeat(2,1fr)"}}>
        <Flex flexDirection="column">
          <Flex w="full" justifyContent={"center"}>
            <Text
              
              backgroundImage= "linear-gradient(to right top, #b725e0, #2387ff, #00b6ff, #33d6f3, #b2ece5);"
              backgroundClip="text"
              color="transparent"
              fontSize="22px"
              letterSpacing="20px"
              fontWeight="700"
            >
              EXPERIENCE
            </Text>
          </Flex>
          <br />
          <Flex
            flexDirection="column"
            gap="3"
            pl={{ base: "2", md: "8" }}
            mt="5"
            lineHeight={"2"}
          >
            <Heading letterSpacing={"1px"} size="md">
              SPATIAL DATA SPECIALIST-I
            </Heading>
              <Text letterSpacing={"1px"} as="i" fontWeight={"400"}>
                 HERE TECHNOLOGIES, NAVI MUMBAI
              </Text>
            <Heading letterSpacing={"1px"} as="i" size="sm">
              
              Duration
            </Heading>
            <Text letterSpacing={"1px"}>09/2019 – 03/2021</Text>

            <Heading letterSpacing={"1px"} as="i" size="sm">
              Responsibilities
            </Heading>
              <Text>
                3-D juction Maintainence
              </Text>
              <Text>
                Work Allocation 
              </Text>
              
                        </Flex>
        </Flex>
        <Flex flexDirection="column" gap="10">
          <Flex w="full" justifyContent={"center"}>
            <Text
                backgroundImage= "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)"
                backgroundClip="text"
                color="transparent"
               fontSize="22px"
               letterSpacing="20px"
               fontWeight="900"
            >
              EDUACTION
            </Text>
          </Flex>
          <Flex flexDirection={"column"} gap="3" lineHeight={"2"}>
      <Heading letterSpacing={"1px"} size="sm">
        FULL STACK WEB DEVELOPMENT (Full Time)
      </Heading>
      
        <Text letterSpacing={"1px"} as="i" fontWeight={"400"}>
           Masai School, Bangalore <br />
          <CalendarIcon /> 05/22 to present | Remote
        </Text>
      
      <Heading letterSpacing={"1px"} size="sm">
        B.Sc (Computer Science)
      </Heading>
      
        <Text letterSpacing={"1px"} as="i" fontWeight={"400"}>
           Smt.CHM College, Ulhasnagar <br />
          <CalendarIcon /> 2013 - 2016 <br />
        </Text>
     
      <Heading letterSpacing={"1px"} size="sm">
        HIGHER SECONDRY EDUCATION
      </Heading>
      
        <Text letterSpacing={"1px"} as="i" fontWeight={"400"}>
           Sri Chaitanya, Visakhapatnam <br />
          <CalendarIcon /> 2011-2012 <br />
         
        </Text>
     
    </Flex>
        </Flex>
       
      </Grid>
    </Box>
    
    </Box>
  );
};
export default About;
