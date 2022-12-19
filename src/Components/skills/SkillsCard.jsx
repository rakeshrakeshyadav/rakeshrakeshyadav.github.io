import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import "./SkillCard.css";
const SkillsCard = ({key,icon,name}) => {
    console.log(icon)
  return (
    <>
    
    <Flex className="card" justifyContent={"center"} alignItem={"center"}  mt={{lg:"3em", base:"0"}}>
        <Flex justifyContent={"center"} mt={2}>
        {icon}
        </Flex>
        <Text mt="2em" fontSize={{base:"0.5em",md:"1rem",lg:"1.5rem"}}>{name}</Text>
    </Flex>
    </>
  )
}

export default SkillsCard