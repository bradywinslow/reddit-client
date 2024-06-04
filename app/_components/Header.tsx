import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Spacer } from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex justify='center'>
            <Center>
                <Heading>Reddit Video Games Feed</Heading>
            </Center>
            <Spacer />
            <Box>
                <Input variant='outline' placeholder='Search' size='md' />
            </Box>
            <Spacer />
            <Menu>
                <MenuButton as={Button}>
                    Subreddits
                </MenuButton>
                <MenuList>
                    <MenuItem>r/AndroidGaming</MenuItem>
                    <MenuItem>r/emulation</MenuItem>
                    <MenuItem>r/gamecollecting</MenuItem>
                    <MenuItem>r/gamemusic</MenuItem>
                    <MenuItem>r/gamephysics</MenuItem>
                    <MenuItem>r/gamernews</MenuItem>
                    <MenuItem>r/Games</MenuItem>
                    <MenuItem>r/gaming4gamers</MenuItem>
                    <MenuItem>r/gamingdetails</MenuItem>
                    <MenuItem>r/IndieGaming</MenuItem>
                    <MenuItem>r/MMORPG</MenuItem>
                    <MenuItem>r/patientgamers</MenuItem>
                    <MenuItem>r/randomactsofgaming</MenuItem>
                    <MenuItem>r/retrogaming</MenuItem>
                    <MenuItem>r/speedrun</MenuItem>
                    <MenuItem>r/truegaming</MenuItem>
                    <MenuItem>r/webgames</MenuItem>
                </MenuList>
                </Menu>
        </Flex>
    )
}
