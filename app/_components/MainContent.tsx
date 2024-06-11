import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Image,
    Text } from "@chakra-ui/react"

import { BiChat, BiShare } from "react-icons/bi";

export default function MainContent() {
    return (
        <Card maxW='750px'>
            <CardHeader>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name='Reddit User' src='https://bit.ly/sage-adebayo' />

                        <Box>
                            <Text size='xs'>[Reddit user name] | [time posted]</Text>
                        </Box>

                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    [Post text]
                </Text>
            </CardBody>
            <Flex mx={4}>
                <Image
                    objectFit='cover'
                    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Chakra UI'
                    borderRadius='7px'
                />
            </Flex>

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                '& > button': {
                    minW: '136px',
                },
                }}
            >
                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                Comments
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                Share
                </Button>
            </CardFooter>
        </Card>
    )
}
