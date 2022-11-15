// import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {
  Container,
  Flex,
  Box,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Grid,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,

  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";



function Contact() {
  return (
    <Box id="CONTACT">
      <Flex w="full" justifyContent={"center"}>
        <Text
          color="orange.500"
          fontSize="22px"
          letterSpacing="20px"
          fontWeight="700"
        >
          CONTACT ME
        </Text>
      </Flex>
      <Container
        maxW="full"
      >
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
          w={{ base: "full", lg: "60%" }}
          gap="3"
          m="auto"
        >
            <Box>
              <Box>
                <br />
                
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                    <Button
                      size="md"
                      height="48px"
                      width="fit-content"
                      variant="ghost"
                      color="#845EC2"
                      _hover={{ border: "1px solid #845EC2" }}
                      leftIcon={<MdPhone size="20px" color="#845EC2"/>}
                      letterSpacing={"1px"}
                    >
                      +91-7840953918
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="fit-content"
                      variant="ghost"
                      color="#845EC2"
                      _hover={{ border: "1px solid #845EC2" }}
                      leftIcon={<MdEmail color="#845EC2" size="20px" />}
                      letterSpacing={"1px"}
                    >
                      Rakeshy84@yahoo.com
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="fit-content"
                      variant="ghost"
                      color="#845EC2"
                      letterSpacing={"1px"}
                      _hover={{ border: "1px solid #845EC2" }}
                      leftIcon={<MdLocationOn color="#845EC2" size="20px" />}
                    >
                      Ambernath, Maharashtra
                    </Button>
                  </VStack>
                </Box>
                <HStack
                 
                  spacing={3}
                  px={5}
                 
                  alignItems="flex-start"
                >
                    <a href="https://www.linkedin.com/in/rakesh-kumar-yadav-88a5a6119/">
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#845EC2", color: "white" }}
                        icon={<FaLinkedinIn size="28px" />}
                      />
                    </a>
                    <a href="https://github.com/rakeshrakeshyadav">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#845EC2", color: "white" }}
                        icon={<BsGithub size="28px" />}
                      />
                    </a>
                   
                
                </HStack>
              </Box>
            </Box>
          
          
            <Box>
              <Box borderRadius="lg">
                <Box m={8}>
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel as="i">Your Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsPerson color="gray.800" />}
                        />
                        <Input
                          _focus={{ outline: "none" }}
                          border={"none"}
                          outline="none"
                          type="text"
                          size="md"
                          borderBottom={"1px solid gray"}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel as="i">Mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdOutlineEmail color="gray.800" />}
                        />
                        <Input
                          type="text"
                          size="md"
                          _focus={{ outline: "none" }}
                          border={"none"}
                          borderBottom={"1px solid gray"}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel as="i">Message</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="message"
                        resize="none"
                        _focus={{ outline: "none" }}
                        border={"none"}
                        outline="none"
                        type="text"
                        size="md"
                        borderBottom={"1px solid gray"}
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        variant="solid"
                        borderRadius={"20px"}
                        bg="#8F00FF"
                        _hover={{ backgroundColor:"845EC2" }}
                      >
                        Send Message
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
            </Box>
      
        </Grid>
      </Container>
      <br />
      
    </Box>
  );
}

export default Contact;
