'use client'

import React, { useEffect, useState } from 'react';

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
    Skeleton,
    Text } from '@chakra-ui/react'
import { IoOpenOutline } from "react-icons/io5";
import getSubredditData from '../_reddit/httpRequests';
import { formatDistance } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import rehypeRaw from 'rehype-raw';
import LoadingSkeleton from './LoadingSkeleton';
import { useSearchParams } from 'next/navigation';
// import { subredditData } from '../_reddit/subredditData';
import { sampleData } from '../_reddit/subredditData';

export default function HomePage() {
    const [homePageData, setHomePageData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    // const searchParams = useSearchParams();
    // const query = searchParams.get('query')?.toString() || '';
    // const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            let homePagePromises = sampleData.map(item => {            
                return getSubredditData({ params: { page: item.page } });
            })
            const data = await Promise.all(homePagePromises);
            console.log(data);
            setHomePageData(data);
            setIsLoading(false);
        }
        fetchData();
    });

    /* useEffect(() => {
        if (subredditData) {
            const posts = subredditData?.data?.children || [];
            if (query) {
                setFilteredData(
                    posts.filter((item: any) => 
                        item.data.author.toLowerCase().includes(query.toLowerCase()) ||
                        item.data.title.toLowerCase().includes(query.toLowerCase()) ||
                        item.data.selftext.toLowerCase().includes(query.toLowerCase())    
                    )
                );
            } else {
                setFilteredData(posts);
            }
        }
    }, [query, subredditData]); */

    return (
        <Box>
            {isLoading ? (
                <Box minH='100vh'>
                    <Flex direction='column' align='center'>
                        <Box w={[175, 200, 225, 250]} m={5}>
                            <Skeleton h='40px' />
                        </Box>
                    </Flex>
                    <Box gap='2px'>
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                    </Box>
                </Box>
                
            ) : (
                <Box minH='100vh'>
                    <Flex direction='column' align='center'>
                        {homePageData.length > 0 ? (
                            homePageData.map((item: any, index: number) => {
                                const postData = item.data;
                                
                                // Convert date/time Reddit post created to time elapsed since post created
                                const timestamp = postData.created_utc;
                                const currentDate = new Date(0);
                                const timeElapsed = formatDistance(currentDate.setUTCSeconds(timestamp), Date.now(), { addSuffix: true});

                                return (
                                    <Card w={[200, 400, 500, 700]} key={index} mb={7} px={['2px', '9px', '16px']} gap='2px'>
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
                                            <Flex direction='column' gap={5}>
                                                <Flex direction='column' w='100%'>
                                                    <Heading as='h4' size='sm'>
                                                        <ReactMarkdown
                                                            remarkPlugins={[remarkGfm, remarkRehype]}
                                                            rehypePlugins={[rehypeReact, rehypeRaw]}
                                                        >
                                                            {postData.title}
                                                        </ReactMarkdown>
                                                    </Heading>
                                                    <Box mt={15} width='auto' fontSize='14px'>
                                                        <ReactMarkdown
                                                            remarkPlugins={[remarkGfm, remarkRehype]}
                                                            rehypePlugins={[rehypeReact, rehypeRaw]}
                                                        >
                                                            {postData.selftext}
                                                        </ReactMarkdown>
                                                    </Box>
                                                </Flex>
                                                {postData.secure_media?.reddit_video?.fallback_url && (
                                                    <Flex justify='center' alignItems='center'>
                                                        <a
                                                            href={postData.url}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <iframe
                                                                src={postData.secure_media?.reddit_video?.fallback_url}
                                                                width='300px'
                                                                height='187px'
                                                                allowFullScreen
                                                            />                                                               
                                                        </a>
                                                    </Flex>
                                                )}
                                                {!postData.secure_media?.reddit_video?.fallback_url && postData.thumbnail !== 'self' && postData.thumbnail !== 'default' && (
                                                    <Flex justify='center' alignItems='center'>
                                                        <a
                                                            href={postData.url}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <Image
                                                                src={postData.thumbnail}
                                                                alt=''
                                                                borderRadius='7px'
                                                                h='150px'
                                                                w='auto'
                                                            />
                                                        </a>
                                                    </Flex>
                                                )}
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
                            })
                        ) : (
                            <Text>No results found.</Text>
                        )}
                    </Flex>
                </Box>
            )}
        </Box>
    )
}
