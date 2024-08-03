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
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import rehypeRaw from 'rehype-raw';
import SubHeader from '../_components/SubHeader';
import SearchBar from './SearchBar';
import LoadingSkeleton from './LoadingSkeleton';
import { useSearchParams } from 'next/navigation';
import removeZeroWidthSpaces from '../_reddit/removeZeroWidthSpaces';


interface ListProps {
    children: React.ReactNode;
    ordered: boolean;
}

interface ListItemProps {
    children: React.ReactNode;
}

interface ParagraphProps {
    children: React.ReactNode;
}

const renderers: Components = {
    ul: ({ children }) => <ul style={{ marginLeft: '1.5rem' }}>{children}</ul>,
    ol: ({ children }) => <ol>{children}</ol>,
    li: ({ children }) => <li style={{ marginLeft: '0.5rem' }}>{children}</li>,
    p: ({ children }) => <Text mt={4} mb={4}>{children}</Text>,
    thead: ({ children }) => <thead style={{ marginLeft: '1rem' }}>{children}</thead>,
    tbody: ({ children }) => <tbody style={{ marginLeft: '1rem' }}>{children}</tbody>,
    th: ({ children }) => <th style={{ border: '1px solid #ccc', padding: '8px 10px' }}>{children}</th>,
    td: ({ children }) => <td style={{ border: '1px solid #ccc', padding: '8px 10px', textAlign: 'center' }}>{children}</td>
};

interface SubredditProps {
    page: string;
    subredditName: string;
}

const Subreddit: React.FC<SubredditProps> = ({ page, subredditName }) => {
    const [subredditData, setSubredditData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const searchParams = useSearchParams();
    const query = searchParams.get('query')?.toString() || '';
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSubredditData({ params: { page } });
                setSubredditData(data);
            } catch (error) {
                console.error('Error fetching subreddit data:', error);
            }
            setIsLoading(false);
        }

        fetchData();
    }, [page]);

    useEffect(() => {
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
    }, [query, subredditData]);

    return (
        <Box>
            {isLoading ? (
                <Box minH='100vh'>
                    <Flex direction='column' align='end' pr='25px'>
                        <SearchBar />
                    </Flex>

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
                    <Flex direction='column' align='end' pr='25px'>
                        <SearchBar />
                    </Flex>

                    <Flex direction='column' align='center'>
                        <SubHeader subredditName={subredditName} />

                        {filteredData.length > 0 ? (
                            filteredData.map((item: any, index: number) => {
                                const postData = item.data;
                                
                                // Remove zero-width spaces in returned Markdown
                                const postText = postData.selftext;
                                const cleanedPostText = removeZeroWidthSpaces(postText);

                                // Check if thumbnail ends in .jpg to prevent a blank spot appearing on a card
                                const postThumbnail = postData.thumbnail;
                                const postThumbnailPhoto = postThumbnail.endsWith('.jpg');
                                
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
                                                            components={renderers}
                                                        >
                                                            {cleanedPostText}
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
                                                {!postData.secure_media?.reddit_video?.fallback_url && postThumbnail !== 'self' && postThumbnail !== 'default' && postThumbnail !== '' && postThumbnailPhoto && (
                                                    <Flex justify='center' alignItems='center'>
                                                        <a
                                                            href={postData.url}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <Image
                                                                src={postThumbnail}
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

export default Subreddit;
