import { 
    Button,
    Flex,
    Heading } from '@chakra-ui/react';

import Link from 'next/link';
import { sideNavData } from '../_reddit/sideNavData.js';

export default function SideNav() {
    return (
        <Flex
            px={25}
            mt='75px'
            mb='100px'
            w='250px'
            h='100%'
            borderRight='solid thin #d7d7d7'
            direction='column'
            overflowX='scroll'
            position='fixed'
            overscrollBehavior='none'
        >
            <Heading as='h2' size='sm' py={5} textAlign='center'>Subreddits</Heading>
            <Flex justify='center' align='center' pb={5}>
                <Flex w='100%' direction='column' gap={5} pb={70}>
                    {sideNavData.map((item, index) => {
                        return (
                            <Button key={index} variant='ghost' w='100%' size='sm'>
                                <Link href={item.path} passHref>{item.name}</Link>
                            </Button>
                        )
                    })}
                </Flex>
            </Flex>
        </Flex>
    )
}
