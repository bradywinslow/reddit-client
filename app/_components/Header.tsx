'use client'

import {
    Flex,
    Heading,
    Icon,
    Input } from '@chakra-ui/react';
import { SiReddit } from "react-icons/si";
import Link from 'next/link';

export default function Header() {
    return (
        <Flex
            justify='center'
            align='center'
            borderBottom='solid thin #d7d7d7'
            height='75px'
            position='fixed'
            top='0'
            w='100%'
            zIndex='9999'
            bgColor='white'
        >
            <Flex
                direction='row'
                justify='start'
                align='center'
                width='100%'
                height='100%'
                pl={5}
                gap={2}
            >
                <Link href='/'>
                    <Flex direction='row' align='center' width='100%' gap={2}>
                        <Icon as={SiReddit} boxSize={7} color='#ff6314' />
                        <Heading as='h1' color='#ff6314' size='md'>Gaming Feed</Heading>
                    </Flex>
                </Link>
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
