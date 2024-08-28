'use client'

import {
    Flex,
    Icon } from '@chakra-ui/react';
import { SiReddit } from 'react-icons/si';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

export default function MobileHeader() {

    return (
        <Flex
            justify='center'
            align='center'
            borderBottom='solid thin #d7d7d7'
            h='75px'
            position='fixed'
            w='100%'
            zIndex='9999'
            bgColor='white'
        >
            <Flex
                direction='row'
                justify='space-between'
                align='center'
                width='100%'
                h='100%'
                mx={['5px', '20px', '35px', '50px']}
                gap={2}
            >
                <Flex gap='3px'>
                    <MobileMenu />
                    <Flex align='center'>
                        <Link href='/'>
                            <Icon as={SiReddit} boxSize={7} color='#ff6314' />
                        </Link>
                    </Flex>
                </Flex>
                <SearchBar />
            </Flex>
        </Flex>
    )
}
