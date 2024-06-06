import { 
    Button,
    Flex,
    Heading,
    Stack } from '@chakra-ui/react';

export default function SideNav() {
    return (
        <Flex
            ml={25}
            pr={25}
            w='250px'
            borderRight='solid thin #d7d7d7'
            height='100vh'
            direction='column'
        >
            <Heading as='h2' size='sm' py={5} textAlign='center'>Subreddits</Heading>
            <Stack spacing={5} align='start'>
                <Button variant='ghost' w='100%' size='sm'>r/AndroidGaming</Button>
                <Button variant='ghost' w='100%' size='sm'>r/emulation</Button>
                <Button variant='ghost' w='100%' size='sm'>r/gamecollecting</Button>
                <Button variant='ghost' w='100%' size='sm'>r/gamemusic</Button>
                <Button variant='ghost' w='100%' size='sm'>r/gamephysics</Button>
                <Button variant='ghost' w='100%' size='sm'>r/gamernews</Button>
                <Button variant='ghost' w='100%' size='sm'>r/Games</Button>
                <Button variant='ghost' w='100%' size='sm'>r/gaming4gamers</Button>
                <Button variant='ghost' w='100%' size='sm'>r/gamingdetails</Button>
                <Button variant='ghost' w='100%' size='sm'>r/IndieGaming</Button>
                <Button variant='ghost' w='100%' size='sm'>r/MMORPG</Button>
                <Button variant='ghost' w='100%' size='sm'>r/patientgamers</Button>
                <Button variant='ghost' w='100%' size='sm'>r/randomactsofgaming</Button>
                <Button variant='ghost' w='100%' size='sm'>r/retrogaming</Button>
                <Button variant='ghost' w='100%' size='sm'>r/speedrun</Button>
                <Button variant='ghost' w='100%' size='sm'>r/truegaming</Button>
                <Button variant='ghost' w='100%' size='sm'>r/webgames</Button>
            </Stack>
        </Flex>
    )
}
