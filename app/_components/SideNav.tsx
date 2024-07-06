import { 
    Button,
    Flex,
    Heading,
    Stack } from '@chakra-ui/react';

import Link from 'next/link';

export default function SideNav() {
    return (
        <Flex
            px={25}
            mt='75px'
            
            w='250px'
            borderRight='solid thin #d7d7d7'
            h='100%'
            direction='column'
            overflowX='scroll'
            position='fixed'
            overscrollBehavior='none'
        >
            <Heading as='h2' size='sm' py={5} textAlign='center'>Subreddits</Heading>
            <Stack spacing={5} align='start' mb={5}>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/AndroidGaming'>r/AndroidGaming</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/emulation'>r/emulation</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/gamecollecting'>r/gamecollecting</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/gamemusic'>r/gamemusic</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/GamePhysics'>r/GamePhysics</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/gamernews'>r/gamernews</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/Games'>r/Games</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/Gaming4Gamers'>r/Gaming4Gamers</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/GamingDetails'>r/GamingDetails</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/IndieGaming'>r/IndieGaming</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/MMORPG'>r/MMORPG</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/patientgamers'>r/patientgamers</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/RandomActsOfGaming'>r/RandomActsOfGaming</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/retrogaming'>r/retrogaming</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/speedrun'>r/speedrun</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm'>
                    <Link href='/truegaming'>r/truegaming</Link>
                </Button>
                <Button variant='ghost' w='100%' size='sm' mb='75px'>
                    <Link href='/WebGames'>r/WebGames</Link>
                </Button>
            </Stack>
        </Flex>
    )
}
