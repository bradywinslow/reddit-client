'use client'

import { Flex } from '@chakra-ui/react';
import Subreddit from '../_components/Subreddit';
import { retrieveSubredditData } from '../reddit/httpRequests';

export default function AndroidGaming() {
    const page = 'android-gaming';
    
    function retrieveAndroidGamingData(page: string) {       
        return retrieveSubredditData(page);
    }

    return (
        <Flex
            direction='column'
            align='center'
            mx='auto'
        >
            <Subreddit data={retrieveAndroidGamingData} />
      </Flex>
    )
}
