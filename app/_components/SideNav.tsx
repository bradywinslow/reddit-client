import { 
    Button,
    Flex,
    Heading,
    Stack } from '@chakra-ui/react';

import Link from 'next/link';

export default function SideNav() {
    return (
        <Flex
            ml={25}
            pr={25}
            w='250px'
            borderRight='solid thin #d7d7d7'
            height='100vh'
            direction='column'
            overflowX='scroll'
        >
            <Heading as='h2' size='sm' py={5} textAlign='center'>Subreddits</Heading>
            <Stack spacing={5} align='start'>
                <Button variant='ghost' w='100%' size='sm'><Link href='/android-gaming'>r/AndroidGaming</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/emulation'>r/emulation</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/game-collecting'>r/gamecollecting</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/game-music'>r/gamemusic</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/game-physics'>r/gamephysics</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/gamer-news'>r/gamernews</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/games'>r/Games</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/gaming-4-gamers'>r/gaming4gamers</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/gaming-details'>r/gamingdetails</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/indie-gaming'>r/IndieGaming</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/mmorpg'>r/MMORPG</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/patient-gamers'>r/patientgamers</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/random-acts-of-gaming'>r/randomactsofgaming</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/retro-gaming'>r/retrogaming</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/speedrun'>r/speedrun</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/true-gaming'>r/truegaming</Link></Button>
                <Button variant='ghost' w='100%' size='sm'><Link href='/web-games'>r/webgames</Link></Button>
            </Stack>
        </Flex>
    )
}
