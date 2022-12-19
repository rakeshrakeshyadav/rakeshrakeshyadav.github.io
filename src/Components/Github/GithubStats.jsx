import { Box, Flex, Grid,  Image, Text } from "@chakra-ui/react";
import React from "react";
import {motion} from "framer-motion"
import GitHubCalendar from "react-github-calendar";

function Github() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Box  pt={{base:'60px',lg:'2'}} w='full'  m='auto'  id='Github'  >
    
    
    <Flex justifyContent={"center"} m="80px" bgColor="#AFCDF0">
            <Text
            color="orange.500"
            fontSize="22px"
            letterSpacing="5px"
            fontWeight="900"
            
            >
            GITHUB STATS AND CONTRIBUTATION 
            </Text>
        </Flex>
       
     
     
      <Flex  flexDir='column' align='center' mt='10' >

        <Box padding='4' >
         

        <GitHubCalendar
          username="rakeshrakeshyadav"
          transformData={selectLastHalfYear}          
          />
    
          </Box>
     
   
      
        
        <Flex>

        <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=rakeshrakeshyadav&layout=compact&theme=nord&border_radius=30" />
        <Image src="https://github-readme-stats.vercel.app/api?username=rakeshrakeshyadav&count_private=true&theme=nord&border_radius=30" />
        <Image  src="https://streak-stats.demolab.com/?user=rakeshrakeshyadav&theme=nord&border_radius=30&date_format=M%20j%5B%2C%20Y%5D" />
        

        
        

        
        </Flex>
      
      </Flex>
    </Box>
  );
}

export default Github;