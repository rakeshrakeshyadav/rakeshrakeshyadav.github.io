import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import "./SkillCard.css";
const SkillsCard = ({key,icon,name}) => {
    console.log(icon)
  return (
    <>
    
    <Flex className="card" justifyContent={"center"} alignItem={"center"} >
        <Flex justifyContent={"center"} mt={2}>
        {icon}
        </Flex>
        <Text mt="2em">{name}</Text>
    </Flex>
    </>
  )
}

export default SkillsCard