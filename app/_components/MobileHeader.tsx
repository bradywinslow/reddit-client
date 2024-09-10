'use client'

import {
    Flex,
    Icon } from '@chakra-ui/react';
import { FaGamepad } from "react-icons/fa6";
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

export default function MobileHeader() {

    return (
        <Flex
            borderBottom='solid thin #d7d7d7'
            h='75px'
            position='fixed'
            w='100%'
            zIndex='9999'
            bgColor='white'
        >
            <Flex
                align='center'
                width='100%'
                mx={['5px', '20px', '35px', '50px']}
            >
                <Flex gap='3px' direction='row' align='center' w='100%'>
                    <MobileMenu />
                        <Link href='/'>
                            <Flex>
                                <Icon as={FaGamepad} boxSize={8} color='#ff6314' />
                            </Flex>
                        </Link>
                </Flex>
                <SearchBar />
            </Flex>
        </Flex>
    )
}
