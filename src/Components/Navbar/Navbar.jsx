import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  LinkIcon,
  PhoneIcon,
  StarIcon,
  InfoIcon,
} from "@chakra-ui/icons";
import './Navbar.css'
import { Box,Flex, IconButton,Text } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
} from '@chakra-ui/react'

import profile from "../images/profile.png"
import {Link} from 'react-scroll';
function NavBar() {
  return (

    <Box id="nav" display="flex" justify-content="space-between">
      
      <Box backgroundColor="#1A202C" p="1vh" w="100%" position={"fixed"} zIndex="100" >
      <Flex justifyContent={"space-between"}  >
        <Box w="30%" display='flex'>
        <img src={profile} alt="profile" id="profile"/>
        </Box>
        <Flex 
          justifyContent={{ base: "space-evenly", sm: "space-evenly", md: "space-evenly", lg: "space-evenly" }}
          w="60%"
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          color="purple.200"
          fontSize={{  md: "20", sm: "0", base: "0" }}
          mt='2'
        >
          <Text>
           
           <Link to="home" id="navhome" spy={true} smooth={true}>
           Home
            </Link>
          </Text>
          <Text>
            <Link to="about"   id="navabout" spy={true} smooth={true}>
              About
            </Link>
          </Text>
          <Text>
            <Link to="skills"  id="navskills" spy={true} smooth={true}>
              Skills
            </Link>
          </Text>
          <Text>
            <Link to="project" id="navproject" spy={true} smooth={true}>
              Project
            </Link>
          </Text>
          <Text>
            <Link to="Github" id="navgithub" spy={true} smooth={true}>
              GitHub
            </Link>
          </Text>
          <Text>
            <Link to="contact" id="navcontact" spy={true} smooth={true}>
              Contact
            </Link>
          </Text>
          <Text>
            <a href="https://drive.google.com/file/d/1n7hcFnFdIC2XjLyi3AtQlNra5x8A_W6T/view?usp=sharing" 
            target={"_blank"}
            spy={true} smooth={true}>
              Resume
            </a>
          </Text>
        </Flex>
        
        <Menu >
          <MenuButton
          w="10%"
          h=""
          bg="white"
            display={{
              base: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            mr="8vw"
          />
          <MenuList bg="#1A202C" w="10%" color="black" ml="2vw" pl="2vw" pr="2vw" fontFamily="brushscriptmt">
          <Link to="home" spy={true} smooth={true}>
          <MenuItem icon={<AddIcon />}>Home</MenuItem>
            </Link>
            
            <Link to="about" spy={true} smooth={true}>
              <MenuItem icon={<InfoIcon />} >
            
              About
           
              </MenuItem>
            </Link>
            <Link to="skills" spy={true} smooth={true}>
            <MenuItem icon={<StarIcon />}>
              Skills
            </MenuItem>
            </Link>
            
            <Link to="project" spy={true} smooth={true}>
            <MenuItem icon={<LinkIcon />} >
            
              Project
           
            </MenuItem>
            </Link>
            <Link to="contact" spy={true} smooth={true}>
             
              <MenuItem icon={<PhoneIcon />} >
              Contact
           </MenuItem>
            </Link>
           
            <a href="https://drive.google.com/file/d/1ln87u2TaNJ619qlEcVoXX7Q3T8pC73V3/view?usp=sharing" 
            target={"_blank"}
            spy={true} smooth={true}>
            
            <MenuItem icon={<ExternalLinkIcon />} >
            Resume
            </MenuItem>
            </a>
           
          </MenuList>
        </Menu>
      </Flex> 
      </Box>

    </Box >
  );
}

export default NavBar;

