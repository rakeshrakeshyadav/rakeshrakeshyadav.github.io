import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard  from './ProjectCard';

const Projects = () => {
  const project = [{

    id:2,
    imageUrl: "Zoomcar",
    imageAlt: 'Zoom Car',
    techStack: ['HTML','CSS','JavaScript','Bootstrap' ],
    About: 'Rent car application with a very interactive UI and lots of things to learn while working. It provides customers their service at different modes , and allow to hire car and also on rent.',
    Title: 'ZOOM CAR',
    time: 'Completed in 5 Days',
    projectType: 'Group',
    gitlink: 'https://github.com/zuhedshaikh95/low-head-7683',
    deploy: 'https://magical-kashata-a20ef2.netlify.app',
    month:"2 month",
  },
  {
    id:3,
    imageUrl:"Sendinlue",
    imageAlt: 'SendinBlue',
    techStack: ["JavaScript", "Bootstrap", "HTML" ,"CSS"  ],
    About: 'Sendinblue is the smartest and most intuitive platform for growing businesses and empowering B2B and B2C businesses, ecommerce sellers and agencies to build customer relationships.',
    Title: 'SENDINBLUE',
    time: 'Completed in 5 Days',
    projectType: 'Individual',
    gitlink: 'https://github.com/Raj-1313/ossified_church_1296',
    deploy: 'https://boisterous-malabi-45100c.netlify.app',
    month:"3 month",
  },
  {
    id:1,
    imageUrl: "airgarage",
    imageAlt: 'AirGarage',
    techStack: [ "JavaScript", "HTML" ,"CSS", "React" , "Chakra UI" ],
    About: 'AirGarage is a full service parking operator and a site that allows users to locate parking along with price and rating.',
    Title: 'AIR GARAGE',
    time: 'Completed in 5 Days',
    projectType: 'Individual',
    gitlink: 'https://github.com/Raj-1313/Raj-1313--slow-argument-2201/tree/main/my-app',
    deploy: 'https://my-app-nu-indol.vercel.app',
    month:"1 month",
  }
  ]
   
  return (
    <Box  id='project'   pt={{base:'60px',lg:'2'}}> 
       <Box  className="skillsHeader"  mt='5' mb='25'>
                  <h2  >PROJECTS</h2>
              </Box>
    <Box  className="vertical-line"  w="40%" m="auto">
      {project.map((project) => {
        return (
         
          <Box
            key={project.id}
            
            style={{
              backgroundImage: 'linear-gradient(to right top, #c9bff2, #b9d6fa, #c2e7f6, #def4f3, #fcfefd)',
              padding:'0px',
              background:'background-image: linear-gradient(to right top, #64d9e8, #34dfdf, #00e3cd, #00e6b3, #38e791)',
              color: '#fff',
              borderRadius: 15,
              boxShadow:
                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            }}
          
          >
            <ProjectCard project={project} />
          </Box>
       
        );
      })}
    </Box>
    </Box>
  );
    
  
}

export default Projects