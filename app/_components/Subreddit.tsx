import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Image,
    Text } from "@chakra-ui/react"

import { BiChat, BiShare } from "react-icons/bi";
import { subredditNames, sampleData } from '../reddit/sampleData.js';

export default function Subreddit(data: any) {
    return (
        <Flex 
            direction='column'
            justify='center'
            align='center'
            mt='75px'
            overflowY='auto'
        >
            {subredditNames.map((item, index) => {
                return (
                    <Heading m={5} key={index}>{item.subheader}</Heading>
                )
            })}
            {sampleData.map((item, index) => {
                return (
                    <Card w={[200, 300, 400, 500]} key={index} mb={7}>
                        <CardHeader>
                            <Flex>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name={`${item.username}`} src={`${item.avatar}`} />

                                    <Box>
                                        <Text size='xs'>{item.username} | {item.time}</Text>
                                    </Box>

                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                {item.text}
                            </Text>
                        </CardBody>
                        <Flex mx={4}>
                            <Image
                                objectFit='cover'
                                src={item.image}
                                alt={item.altText}
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
            })}
        </Flex>
    )
}
