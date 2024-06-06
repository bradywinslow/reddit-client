'use client'

import {
    Flex,
    Heading,
    Icon,
    Input } from '@chakra-ui/react';
import { SiReddit } from "react-icons/si";


export default function Header() {
    return (
        <Flex justify='center' align='center' borderBottom='solid thin #d7d7d7' height='75px'>
            <Flex
                direction='row'
                justify='start'
                align='center'
                width='100%'
                pl={5}
                gap={2}
            >
                <Icon as={SiReddit} boxSize={7} color='#ff6314' />
                <Heading as='h1' color='#ff6314' size='md'>Gaming Feed</Heading>
            </Flex>
            <Flex pr={5}>
                <Input
                    variant='outline'
                    placeholder='Search'
                    size='lg'
                    width={350}
                    height={45}
                    borderRadius={15}
                />
            </Flex>
        </Flex>
    )
}
