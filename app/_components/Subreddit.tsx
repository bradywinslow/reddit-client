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
    Text } from '@chakra-ui/react'
import { BiChat, BiShare } from 'react-icons/bi';
import getSubredditData from '../reddit/httpRequests';
import { useEffect, useState } from 'react';

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

                return (
                    <Card w={[200, 300, 400, 500]} key={index} mb={7}>
                        <CardHeader>
                            <Flex>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name={`${postData.author}`} src={`${postData.thumbnail}`} />

                                    <Box>
                                        <Text size='xs'>u/{postData.author} | {postData.created_utc}</Text>
                                    </Box>

                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                {postData.selftext}
                            </Text>
                        </CardBody>
                        
                    {imageUrl && (
                        <Flex mx={4}>
                            <Image
                                objectFit='cover'
                                src={imageUrl}
                                alt={postData.title}
                                borderRadius='7px'
                            />
                        </Flex>
                    )}

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
