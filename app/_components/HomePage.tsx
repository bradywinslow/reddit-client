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
    Text } from '@chakra-ui/react'
import { IoOpenOutline } from "react-icons/io5";
import { getHomePageData, subredditsToDisplayOnHomePage } from '../_reddit/getHomePageData';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import rehypeRaw from 'rehype-raw';
import LoadingSkeleton from './LoadingSkeleton';
import { useSearchParams } from 'next/navigation';
import removeZeroWidthSpaces from '../_reddit/removeZeroWidthSpaces';
import extractYouTubeUrl from '../_reddit/extractYouTubeUrl';
import IsExternalLink from '../_reddit/IsExternalLink';
import convertUtcToTimeElapsed from '../_reddit/convertUtcToTimeElapsed';

const renderers: Components = {
    ul: ({ children }) => <ul style={{ marginLeft: '1.5rem', marginTop: '15px', marginBottom: '15px' }}>{children}</ul>,
    ol: ({ children }) => (
        <ol style={{ marginLeft: '1.75rem', listStyleType: 'decimal', marginTop: '15px', marginBottom: '15px' }}>{children}</ol>
      ),
    li: ({ children }) => <li style={{ marginLeft: '0.5rem' }}>{children}</li>,
    h1: ({ children }) => <Text mt={4} mb={0}>{children}</Text>,
    h3: ({ children }) => <Text mt={4} mb={0}>{children}</Text>,
    p: ({ children }) => <Text mt={4} mb={0}>{children}</Text>,
    thead: ({ children }) => <thead style={{ marginLeft: '1rem' }}>{children}</thead>,
    tbody: ({ children }) => <tbody style={{ marginLeft: '1rem' }}>{children}</tbody>,
    th: ({ children }) => <th style={{ border: '1px solid #ccc', padding: '8px 10px' }}>{children}</th>,
    td: ({ children }) => <td style={{ border: '1px solid #ccc', padding: '8px 10px', textAlign: 'center' }}>{children}</td>,
    code: ({ children }) => <code style={{ background: '#f4f4f4', border: '1px solid #ddd', borderLeft: '3px solid #ff6314', color: '#666', pageBreakInside: 'avoid', fontFamily: 'monospace', fontSize: '15px', lineHeight: '1.6', marginTop: '10px', maxWidth: '100%', overflow: 'auto', padding: '1em 1.5em', display: 'block', wordWrap: 'break-word' }}>{children}</code>
}

const HomePage = () => {
    const [homePageData, setHomePageData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const searchParams = useSearchParams();
    const query = searchParams.get('query')?.toString() || '';
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        // Fetch data and store in dataToDisplay array; sort dataToDisplay based on time posted starting with most recent first
        let dataToDisplay: object[] = [];
        const pagesToFetch = subredditsToDisplayOnHomePage();

        const fetchData = async () => {
            for (let i = 0; i < pagesToFetch.length; i++) {
                try {
                    const data = await getHomePageData({ params: { page: pagesToFetch[i].page } });
                    dataToDisplay.push(...data.data.children);
                } catch (error) {
                    console.error('Error fetching subreddit data:', error);
                }
            }
            dataToDisplay.sort((a: any, b: any) => b.data.created_utc - a.data.created_utc);
            setHomePageData(dataToDisplay);
            setIsLoading(false);
            return dataToDisplay;
        }
        console.log(dataToDisplay);

        fetchData();
    }, []);

    useEffect(() => {
        if (homePageData) {
            const posts = homePageData || [];
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
    }, [query, homePageData]);

    return (
        <Box mt='125px'>

            {/* Loading skeleton */}
            {isLoading ? (
                <Box h='100vh'>
                    
                    <Box gap='2px'>
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                    </Box>
                </Box>
                
            ) : filteredData.length === 0 && query ? ( // Show "No results found" when search term returns zero results
                <Box h='100vh'>
                    <Text textAlign='center'>No results found.</Text>
                </Box>
            ) : ( // Displays all results because there is no search term
                <Box h='100vh'>
                    <Flex direction='column' align='center'>

                        {filteredData.map((item: any, index: number) => {
                            const postData = item.data;
                            
                            // Remove zero-width spaces in returned Markdown
                            const postText = postData.selftext;
                            const cleanedPostText = removeZeroWidthSpaces(postText);
                            
                            // Remove zero-width spaces in returned Markdown for crossposts
                            const crossPost = postData.crosspost_parent_list?.[0];
                            const cleanedCrossPostText = removeZeroWidthSpaces(crossPost?.selftext || '');

                            // Check if thumbnail ends in .jpg to prevent a blank spot appearing on a card
                            const postThumbnail = postData.thumbnail;
                            const postThumbnailPhoto = postThumbnail.endsWith('.jpg');

                            // Check if url is an external link
                            const postUrl = postData.url;
                            const postUrlIsExternalLink = IsExternalLink(postUrl);

                            // Extract YouTube URL if YouTube video is included in subreddit post
                            const stringToExtractUrlFrom = postData.media_embed?.content;
                            const youTubeUrl = extractYouTubeUrl(stringToExtractUrlFrom);
                            
                            // Convert date/time Subreddit post created to time elapsed since post created
                            const timestamp = postData.created_utc;
                            const crossPostTimestamp = crossPost?.created_utc;
                            const timeElapsed = convertUtcToTimeElapsed(timestamp);
                            const crossPostTimeElapsed = convertUtcToTimeElapsed(crossPostTimestamp);

                            return (
                                <Card w={[200, 400, 500, 700]} key={index} mb={7} px='15px'>
                                    <CardHeader>
                                        <Flex mb='-15px'>
                                            <Flex gap='4' alignItems='center' flexWrap='wrap'>
                                                <Avatar name={`${postData.author}`} />

                                                <Box>
                                                    <Text fontSize='13px'>{postData.subreddit_name_prefixed} | {timeElapsed}</Text>
                                                    <Text fontSize='12px'>{postData.author}</Text>
                                                </Box>

                                            </Flex>
                                        </Flex>
                                    </CardHeader>

                                    <CardBody>
                                        <Flex direction='column' mt='-1px' mb='-15px'>
                                            <Flex direction='column' w='100%'>
                                                <Heading as='h4' size='sm'>
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkGfm, remarkRehype]}
                                                        rehypePlugins={[rehypeReact, rehypeRaw]}
                                                    >
                                                        {postData.title}
                                                    </ReactMarkdown>
                                                </Heading>
                                                <Box width='auto' fontSize='14px'>
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkGfm, remarkRehype]}
                                                        rehypePlugins={[rehypeReact, rehypeRaw]}
                                                        components={renderers}
                                                    >
                                                        {cleanedPostText}
                                                    </ReactMarkdown>
                                                </Box>
                                            </Flex>
                                            
                                            { /* Show crosspost if original subreddit post includes one */ }
                                            {crossPost && (
                                                <Flex
                                                    direction='column'    
                                                    border='solid thin #d7d7d7'
                                                    borderRadius='7px'
                                                    mt='15px'
                                                    p='20px'
                                                >
                                                    <Flex
                                                        direction='column' w='100%'>
                                                        <Flex>
                                                            <Flex gap='4' alignItems='center' flexWrap='wrap'>
                                                                <Box>
                                                                    <Text fontSize='12px' mb='10px'>{crossPost?.subreddit_name_prefixed} | {crossPostTimeElapsed}</Text>
                                                                </Box>

                                                            </Flex>
                                                        </Flex>

                                                        <Heading as='h6' size='xs'>
                                                            <ReactMarkdown
                                                                remarkPlugins={[remarkGfm, remarkRehype]}
                                                                rehypePlugins={[rehypeReact, rehypeRaw]}
                                                            >
                                                                {crossPost?.title}
                                                            </ReactMarkdown>
                                                        </Heading>
                                                        <Box mt='10px' width='auto' fontSize='12px'>
                                                            <ReactMarkdown
                                                                remarkPlugins={[remarkGfm, remarkRehype]}
                                                                rehypePlugins={[rehypeReact, rehypeRaw]}
                                                                components={renderers}
                                                            >
                                                                {cleanedCrossPostText}
                                                            </ReactMarkdown>
                                                        </Box>
                                                    </Flex>

                                                    {/* Embed non-YouTube video in subreddit crosspost card if there is one */}
                                                    {postData.secure_media?.reddit_video?.fallback_url && (
                                                        <Flex justify='center' alignItems='center' mt='20px'>
                                                            <Box borderRadius='7px' overflow='hidden'>
                                                                <iframe
                                                                    src={postData.secure_media?.reddit_video?.fallback_url}
                                                                    width='300px'
                                                                    height='187px'
                                                                    allowFullScreen
                                                                />
                                                            </Box>
                                                        </Flex>
                                                    )}

                                                    {/* Embed YouTube video in subreddit crosspost card if there is one */}
                                                    {!postData.secure_media?.reddit_video?.fallback_url && postData.media_embed?.content && postData.secure_media?.type === 'youtube.com' && (
                                                        <Flex justify='center' alignItems='center' mt='20px'>
                                                            <Box borderRadius='7px' overflow='hidden'>
                                                                <iframe
                                                                    src={`https://www.youtube-nocookie.com/embed/${youTubeUrl}`}
                                                                    width='300px'
                                                                    height='187px'
                                                                    frameBorder='0'
                                                                    allow='encrypted-media'
                                                                    allowFullScreen
                                                                />
                                                            </Box>
                                                        </Flex>
                                                    )}

                                                    {/* Show thumbnail image if original subreddit crosspost includes one */}
                                                    {!postUrlIsExternalLink && !crossPost && !postData.secure_media?.reddit_video?.fallback_url && postData.url_overridden_by_dest === postData.url && postThumbnailPhoto && !postData.media_embed?.content && (
                                                        <Flex justify='center' alignItems='center'mt='20px'>
                                                            <a
                                                                href={postData.url}
                                                                target='_blank'
                                                                rel='noopener noreferrer'
                                                            >
                                                                <Image
                                                                    src={postThumbnail}
                                                                    alt={`${postData.subreddit_name_prefixed} - ${postData.title}`}
                                                                    borderRadius='7px'
                                                                    bg='black'
                                                                    textColor='grey'
                                                                    h='150px'
                                                                    w='auto'
                                                                />
                                                            </a>
                                                        </Flex>
                                                    )}

                                                    {/* Show url_overridden_by_dest image if original subreddit crosspost includes one */}
                                                    {!postUrlIsExternalLink && !crossPost && !postData.secure_media?.reddit_video?.fallback_url && postData.url_overridden_by_dest === postData.url && !postThumbnailPhoto && !postData.media_embed?.content && (
                                                        <Flex justify='center' alignItems='center'mt='20px'>
                                                            <a
                                                                href={postData.url}
                                                                target='_blank'
                                                                rel='noopener noreferrer'
                                                            >
                                                                <Image
                                                                    src={postData.url_overridden_by_dest}
                                                                    alt={`${postData.subreddit_name_prefixed} - ${postData.title}`}
                                                                    borderRadius='7px'
                                                                    bg='black'
                                                                    textColor='grey'
                                                                    h='150px'
                                                                    w='auto'
                                                                />
                                                            </a>
                                                        </Flex>
                                                    )}

                                                {/* Display link to external site when there is no media (photos/videos) in crosspost */}
                                                {postUrlIsExternalLink && !postData.secure_media?.reddit_video?.fallback_url && postData.secure_media?.type !== 'youtube.com' && (
                                                    <Flex
                                                        justify='center'
                                                        alignItems='center'
                                                        mt='20px'
                                                        border='solid thin #d7d7d7'
                                                        borderRadius='7px'
                                                        minH='40px'
                                                        pl='25px'
                                                        pr='25px'
                                                        pt='15px'
                                                        pb='15px'
                                                    >
                                                        <Text w='100%' textAlign='center' fontSize='14px'>
                                                            <a
                                                                href={postData.url}
                                                                target='_blank'
                                                                rel='noopener noreferrer'
                                                            >
                                                                {postData.url}
                                                            </a>
                                                        </Text>
                                                    </Flex>
                                                )}

                                                </Flex>
                                            )}

                                            {/* Embed non-YouTube video in subreddit post card if there is one */}
                                            {postData.secure_media?.reddit_video?.fallback_url && !crossPost && (
                                                <Flex justify='center' alignItems='center' mt='30px'>
                                                    <Box borderRadius='7px' overflow='hidden'>
                                                        <iframe
                                                            src={postData.secure_media?.reddit_video?.fallback_url}
                                                            width='300px'
                                                            height='187px'
                                                            allowFullScreen
                                                        />
                                                    </Box>
                                                </Flex>
                                            )}

                                            {/* Embed YouTube video in subreddit post card if there is one */}
                                            {!postData.secure_media?.reddit_video?.fallback_url && postData.media_embed?.content && postData.secure_media?.type === 'youtube.com' && !crossPost && (
                                                <Flex justify='center' alignItems='center' mt='30px'>
                                                    <Box borderRadius='7px' overflow='hidden'>
                                                        <iframe
                                                            src={`https://www.youtube-nocookie.com/embed/${youTubeUrl}`}
                                                            width='300px'
                                                            height='187px'
                                                            frameBorder='0'
                                                            allow='encrypted-media'
                                                            allowFullScreen
                                                        />
                                                    </Box>
                                                </Flex>
                                            )}

                                            {/* Show thumbnail image if original subreddit post includes one */}
                                            {!postUrlIsExternalLink && !crossPost && !postData.secure_media?.reddit_video?.fallback_url && postData.url_overridden_by_dest === postData.url && postThumbnailPhoto && !postData.media_embed?.content && (
                                                <Flex justify='center' alignItems='center'mt='30px'>
                                                    <a
                                                        href={postData.url}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        <Image
                                                            src={postThumbnail}
                                                            alt={`${postData.subreddit_name_prefixed} - ${postData.title}`}
                                                            borderRadius='7px'
                                                            bg='black'
                                                            textColor='grey'
                                                            h='150px'
                                                            w='auto'
                                                        />
                                                    </a>
                                                </Flex>
                                            )}

                                            {/* Show url_overridden_by_dest image if original subreddit post includes one */}
                                            {!postUrlIsExternalLink && !crossPost && !postData.secure_media?.reddit_video?.fallback_url && postData.url_overridden_by_dest === postData.url && !postThumbnailPhoto && !postData.media_embed?.content && (
                                                <Flex justify='center' alignItems='center'mt='30px'>
                                                    <a
                                                        href={postData.url}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        <Image
                                                            src={postData.url_overridden_by_dest}
                                                            alt={`${postData.subreddit_name_prefixed} - ${postData.title}`}
                                                            borderRadius='7px'
                                                            bg='black'
                                                            textColor='grey'
                                                            h='150px'
                                                            w='auto'
                                                        />
                                                    </a>
                                                </Flex>
                                            )}

                                            {/* Display link to external site when there is no media (photos/videos) */}
                                            {postUrlIsExternalLink && !postData.secure_media?.reddit_video?.fallback_url && postData.secure_media?.type !== 'youtube.com' && !crossPost && (
                                                <Flex
                                                    justify='center'
                                                    alignItems='center'
                                                    mt='30px'
                                                    border='solid thin #d7d7d7'
                                                    borderRadius='7px'
                                                    minH='40px'
                                                    pl='25px'
                                                    pr='25px'
                                                    pt='15px'
                                                    pb='15px'
                                                >
                                                    <Text w='100%' textAlign='center' fontSize='14px'>
                                                        <a
                                                            href={postData.url}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            {postData.url}
                                                        </a>
                                                    </Text>
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
                                        <a
                                            href={`https://www.reddit.com${postData.permalink}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{ width:'100%' }}
                                        >
                                            <Button
                                                flex='1'
                                                variant='ghost'
                                                rightIcon={<IoOpenOutline />}
                                                w='100%'
                                            >
                                                Open        
                                            </Button>
                                        </a>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </Flex>
                </Box>
            )}
        </Box>
    )
}

export default HomePage;
