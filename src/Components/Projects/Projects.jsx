import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard  from './ProjectCard';
import Zoomcar from "../images/Zoomcar.png"
import emailomatic from "../images/emailomatic.PNG"
import Bontime from "../images/Bontime.PNG"
const Projects = () => {
  const project = [{

    id:2,
    imageUrl: Zoomcar,
    imageAlt: 'Zoom Car',
    techStack: ['HTML','CSS','JavaScript','Bootstrap' ],
    About: 'Rent car application with a very interactive UI and lots of things to learn while working. It provides customers their service at different modes , and allow to hire car and also on rent.',
    Title: 'ZOOM CAR',
    time: 'Completed in 5 Days',
    projectType: 'Individual',
    gitlink: 'https://github.com/rakeshrakeshyadav/reflective-decision-5937',
    deploy: 'https://zoomcar1.netlify.app/',
   
  },
  {
    id:3,
    imageUrl:Bontime,
    imageAlt: 'Bonsai',
    techStack: ["JavaScript", "REACT","CHAKRA UI", "HTML" ,"CSS"  ],
    About: 'Bonsai is building the global operating system for freelance work.The way the world works is changing. Companies want on-demand talent rather than full time employees. Workers want flexible and independent careers. This is one of the largest socio-economic shifts since the Industrial Revolution.',
    Title: 'BONTIME',
    time: 'Completed in 5 Days',
    projectType: 'Group',
    gitlink: 'https://github.com/ajay329/BONSAI-CLONE',
    deploy: 'https://eclectic-halva-300fe0.netlify.app/',
    
  },
  {
    id:1,
    imageUrl: emailomatic,
    imageAlt: 'Emailomatic',
    techStack: [ "JavaScript", "HTML" ,"CSS", "React" , "Chakra UI","NODEJS","EXPRESS" ],
    About: "Grow your business on your terms with Emailomatic's All-In-One marketing, automation & email marketing platform",
    Title: 'EMAILOMATIC',
    time: 'Completed in 5 Days',
    projectType: 'Group',
    gitlink: 'https://github.com/VinayKumar1801/rebel-hook-6465',
    deploy: 'https://emailomatic.netlify.app/',
    
  }
  ]
   
  return (
    <Box  id='project'   pt={{base:'60px',lg:'20'}}> 
        <Flex justifyContent={"center"} mt="80px" bgColor="#AFCDF0" w={{lg:"90%",base:"100%"}} m="auto">
            <Text
            color="orange.500"
            fontSize="22px"
            letterSpacing="10px"
            fontWeight="900"
            
            >
            PROJECTS
            </Text>
        </Flex>
    <Box  className="vertical-line"  w="40%" m="auto">
      {project.map((project) => {
        return (
         
          <Grid
            key={project.id}
            mt={{lg:"2rem", md:"1rem", base:"0.5rem"}}
           
           
            style={{
              background:'#5899B6',
              padding:'0px',
              // background:'linear-gradient(to right top, #0a57dc, #0087fb, #00a7e1, #00c0a3, #2dd15e)',
              color: '#fff',
              borderRadius: 15,
              boxShadow:
                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
              
            }}
          
          >
            <ProjectCard project={project} />
          </Grid>
       
        );
      })}
    </Box>
    </Box>
  );
    
  
}

export default Projects