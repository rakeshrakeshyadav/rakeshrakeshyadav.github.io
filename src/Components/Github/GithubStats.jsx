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
    <Box  pt={{base:'60px',lg:'2'}} w='full'  m='auto'  id='Github' >
    
    
    <Flex justifyContent={"center"} m={{lg:"80px",base:"0"}} bgColor="#AFCDF0"  w={{lg:"90%",base:"100%"}}>
            <Text
            color="orange.500"
            fontSize="22px"
            letterSpacing="5px"
            fontWeight="900"
            
            >
            GITHUB STATS AND CONTRIBUTATION 
            </Text>
        </Flex>

      <Grid  w={{lg:"80%",base:"100%"}} m="auto" bgColor="#A9ABAD" p="2em">
        <Box padding='4' m="auto">
        <GitHubCalendar
          username="rakeshrakeshyadav"
          transformData={selectLastHalfYear}          
          />
    
          </Box>        
        <Grid templateColumns={{lg:"repeat(2,1fr)"}} mt="3em">
        <Image src="https://github-readme-stats.vercel.app/api?username=rakeshrakeshyadav&count_private=true&theme=nord&border_radius=30" />
        <Image  src="https://streak-stats.demolab.com/?user=rakeshrakeshyadav&theme=nord&border_radius=30&date_format=M%20j%5B%2C%20Y%5D" />
        </Grid>
      
      </Grid>
    </Box>
  );
}

export default Github;