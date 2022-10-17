import { HamburgerIcon } from '@chakra-ui/icons';

import { Box, Hide, IconButton, Show,Text } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
} from '@chakra-ui/react'
import Nav from 'react-bootstrap/Nav';
import profile from "../assets/img/profile.png"
function NavBar() {
  return (

    <Box id="nav" display="flex" justify-content="space-between">
      <Nav  className="justify-content-end m-4  text-white">
          <Nav.Item className='justify-content-start ' id="logo">
          <img src={profile} alt="profile" id="profile"/>
          </Nav.Item>
        </Nav>
    <Hide below="sm">
        <Nav variant="pills" className="justify-content-center m-3  text-white fontsize-10">
          <Nav.Item>
            <Nav.Link id="navlink"eventKey="Home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  id ="navlink"eventKey="Skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id ="navlink" eventKey="Project" >Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  id ="navlink"eventKey="Contact" >Contact</Nav.Link>
          </Nav.Item>
        </Nav>
    </Hide>
    <Show below="sm">
    <Menu>
    <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
    <MenuList>
      <MenuItem >
        Home
      </MenuItem>
      <MenuItem >
        About
      </MenuItem>
      <MenuItem >
        Projects
      </MenuItem>
      <MenuItem >
        Contact
      </MenuItem>
      
    </MenuList>
</Menu>
    </Show>
    </Box >
  );
}

export default NavBar;


