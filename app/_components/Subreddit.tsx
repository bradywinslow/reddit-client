'use client'

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
    Link,
    Text } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { BiChat, BiShare } from 'react-icons/bi';
import getSubredditData from '../_reddit/httpRequests';
import { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';

interface SubredditProps {
    page: string;
}

const Subreddit: React.FC<SubredditProps> = ({ page }) => {
    const [subredditData, setSubredditData] = useState<any>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await getSubredditData( { params: { page } });
                setSubredditData(data);
            } catch (error) {
                console.error('Error fetching subredit data:', error);
            }
        }

        fetchData();
    }, [page]);

    const posts = subredditData?.data?.children || [];

    return (
        <Flex 
            direction='column'
            justify='center'
            align='center'
            mt='75px'
            overflowY='auto'
        >
            {posts && posts.length > 0 && (
                <Heading m={5}>{posts[0]?.data.subreddit_name_prefixed}</Heading>
            )}
            
            {posts.map((item: any, index: number) => {
                const postData = item.data;
                const imageUrl = postData?.preview?.images?.[0].source?.url;
                
                // Convert date/time Reddit post created to time elapsed since post created
                const timestamp = postData.created_utc;
                const currentDate = new Date(0);
                const timeElapsed = formatDistance(currentDate.setUTCSeconds(timestamp), Date.now(), { addSuffix: true});

                return (
                    <Card w={[200, 350, 500, 650]} key={index} mb={7} mx={7}>
                        <CardHeader>
                            <Flex>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name={`${postData.author}`} src={`${imageUrl}`} />

                                    <Box>
                                        <Text size='xs'>u/{postData.author} | {timeElapsed}</Text>
                                    </Box>

                                </Flex>
                            </Flex>
                        </CardHeader>

                        <CardBody>
                            <Heading as='h4' size='md'>
                                {postData.title}
                            </Heading>
                            <Text mt={15}>
                                {postData.selftext}
                                <Link href={postData.url}>{postData.url}</Link>
                            </Text>
                        </CardBody>
                                            
                        <Flex mx={4} justify='center'>
                            <Link href={postData.url} isExternal>
                                <Image
                                    src={postData.thumbnail}
                                    alt=''
                                    borderRadius='7px'
                                    w='200px'
                                />
                            </Link>
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

export default Subreddit;
