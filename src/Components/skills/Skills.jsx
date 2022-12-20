import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiRedux,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { Box, Flex, Grid, Text} from "@chakra-ui/react";


import "./Skills.css"
import SkillsCard from "./SkillsCard";
const data = [
  { name: "HTML", icon: <SiHtml5 size="5.5rem" color="#ff6637" /> },
  { name: "CSS", icon: <SiCss3 size="5.5rem" color="#6767ff" /> },
  { name: "Javascript", icon: <SiJavascript size="5.5rem"  color="#228b22" /> },
  { name: "NodeJs", icon: <IoLogoNodejs size="5.5rem" color="#228b22" /> },
  { name: "React", icon: <SiReact size="5.5rem" color="#61dafb" /> },
  { name: "ExpressJs", icon: <SiExpress size="5.5rem" color="gray" /> },
  { name: "MongoDB", icon: <SiMongodb size="5.5rem" color="#399d39" /> },
  { name: "Chakra UI", icon: <SiChakraui size="5.5rem" color="#61dafb" /> },
  { name: "Redux", icon: <SiRedux size="5.5rem" color="#ad61ff" /> },
  
];

function Skills() {
  return (
    <Box w="100%" id="skills">
    
      <Flex justifyContent={"center"} m="80px" bgColor="#AFCDF0" >
            <Text
            color="orange.500"
            fontSize="22px"
            letterSpacing="10px"
            fontWeight="900"
            
            >
            TECH STACKS
            </Text>
        </Flex>
    <Box id="skills" w="70%" m="auto">

      { <Grid templateColumns={{lg:"repeat(5,1fr)" ,md:"repeat(3,1fr)",base:"repeat(3,1fr)"}}  gap={20}>
         {data.map((el) => (
          <Box
            key={el.name}
            
          >
          <SkillsCard key={el.name} icon={el.icon} name={el.name} />
            {/* <div>{el.icon}</div> */}
            {/* <div className="toolName"> {el.name}</div> */}
          </Box>
        ))}
      </Grid>}

    </Box>
    </Box>
  );
}

export default Skills;
