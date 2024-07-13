'use client'

import {
    Flex,
    Heading,
    Icon,
    Input, 
    InputGroup,
    InputLeftElement,
    Stack} from '@chakra-ui/react';
import { SiReddit } from 'react-icons/si';
import Link from 'next/link';
import { GoSearch } from "react-icons/go";

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
                ml={['5px', '20px', '35px', '50px']}
                gap={2}
            >
                <Link href='/'>
                    <Flex direction='row' align='center' width='100%' gap={2}>
                        <Icon as={SiReddit} boxSize={7} color='#ff6314' />
                        <Heading as='h1' color='#ff6314' size='md'>Gaming Feed</Heading>
                    </Flex>
                </Link>
            </Flex>
                <search>
                    <Stack>
                        <Flex>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                        <Icon as={GoSearch}/>
                                </InputLeftElement>
                                <Input
                                    type='text'
                                    autoComplete='off'
                                    variant='outline'
                                    placeholder='Search'
                                    size='md'
                                    w={[200, 250, 300, 350]}
                                    borderRadius={15}
                                    mr={['5px', '20px', '35px', '50px']}
                                ></Input>
                            </InputGroup>
                        </Flex>
                    </Stack>
                </search>
        </Flex>
    )
}
