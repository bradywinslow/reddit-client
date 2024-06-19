'use client'

import Subreddit from '../_components/Subreddit';
import { retrieveSubredditData } from '../reddit/httpRequests';

export default function AndroidGaming() {
    const page = 'android-gaming';
    
    function retrieveAndroidGamingData(page: string) {       
        return retrieveSubredditData(page);
    }

    return (
        <Subreddit data={retrieveAndroidGamingData} />
    )
}
