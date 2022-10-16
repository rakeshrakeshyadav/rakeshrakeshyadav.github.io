import { Text } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

export default function Type(){
    return (
        <Text fontSize={{base:'md',sm:'md',md:'md',lg:'2xl'}}>
        <Typewriter 
        options={{
            strings:[ 'Full Stack web Developer','Creative....'],
            autoStart: true,
            loop: true,
            deleteSpeed: 60,
        }}
        /></Text>
    )
}
