import {
    Flex,
    Heading,
    Input } from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex justify='center' mx={50} my={15}>
            <Flex
                direction='row'
                justify='space-between'
                align='center' maxW='1200px'
                width='100%'
                borderBottom='solid thin grey'
                pb={15}
            >
                <Heading as='h1'>Reddit Video Games Feed</Heading>
                <Input variant='outline' placeholder='Search' size='lg' width={300} height={50} borderRadius={15}/>
            </Flex>
        </Flex>
    )
}
