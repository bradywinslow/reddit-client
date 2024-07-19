'use client'

import React from 'react';

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
import { IoOpenOutline } from "react-icons/io5";
import getSubredditData from '../_reddit/httpRequests';
import { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import rehypeRaw from 'rehype-raw';
import SubHeader from '../_components/SubHeader';
import SearchBar from './SearchBar';
import LoadingSkeleton from './LoadingSkeleton';

interface SubredditProps {
    page: string;
    subredditName: string;
}

const Subreddit: React.FC<SubredditProps> = ({ page, subredditName }) => {
    const [subredditData, setSubredditData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await getSubredditData( { params: { page } });
                setSubredditData(data);
            } catch (error) {
                console.error('Error fetching subredit data:', error);
            }
            setIsLoading(false);
        }

        fetchData();
    }, [page]);

    const posts = subredditData?.data?.children || [];

    return (
        <Box>
            {isLoading ? (
                <>
                    <LoadingSkeleton />
                </>
                
            ) : (
                <>
                    <Flex direction='column' align='end' pr='25px'>
                        <SearchBar />
                    </Flex>

                    <Flex direction='column' align='center'>
                        <SubHeader subredditName={subredditName}/>

                        {posts.map((item: any, index: number) => {
                            const postData = item.data;
                            
                            // Convert date/time Reddit post created to time elapsed since post created
                            const timestamp = postData.created_utc;
                            const currentDate = new Date(0);
                            const timeElapsed = formatDistance(currentDate.setUTCSeconds(timestamp), Date.now(), { addSuffix: true});

                            return (
                                <Card w={[200, 400, 500, 700]} key={index} mb={7} px='15px' gap='2px'>
                                    <CardHeader>
                                        <Flex>
                                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                                <Avatar name={`${postData.author}`} />

                                                <Box>
                                                    <Text fontSize='13px'>u/{postData.author} | {timeElapsed}</Text>
                                                </Box>

                                            </Flex>
                                        </Flex>
                                    </CardHeader>

                                    <CardBody>
                                        <Flex direction='row' justify='space-between' gap={2}>
                                            <Flex direction='column' flex={2} w='100%'>
                                                <Heading as='h4' size='sm'>
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkGfm, remarkRehype]}
                                                        rehypePlugins={[rehypeReact, rehypeRaw]}
                                                    >
                                                        {postData.title}
                                                    </ReactMarkdown>
                                                </Heading>
                                                <Text mt={15} width='auto' fontSize='14px'>
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkGfm, remarkRehype]}
                                                        rehypePlugins={[rehypeReact, rehypeRaw]}
                                                    >
                                                        {postData.selftext}
                                                    </ReactMarkdown>
                                                    <a
                                                        href={postData.url}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        {postData.url}
                                                    </a>
                                                </Text>
                                            </Flex>
                                            <Flex justify='right' flex={1} alignItems='center'>
                                                <a
                                                    href={postData.url}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <Image
                                                        src={postData.thumbnail}
                                                        alt=''
                                                        borderRadius='7px'
                                                        h='125px'
                                                        w='auto'
                                                    />
                                                </a>
                                            </Flex>
                                        </Flex>
                                    </CardBody>

                                    <CardFooter
                                        justify='space-between'
                                        flexWrap='wrap'
                                        sx={{
                                        '& > button': {
                                            minW: '136px',
                                        },
                                        }}
                                    >
                                        <Button
                                            flex='1'
                                            variant='ghost'
                                            rightIcon={<IoOpenOutline />}
                                        >
                                            <a
                                                href={`https://www.reddit.com${postData.permalink}`}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Open
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </Flex>
                </>
            )}
        </Box>
    )
}

export default Subreddit;
