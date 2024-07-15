import { Flex } from '@chakra-ui/react';
import SubHeader from '../_components/SubHeader';
import Subreddit from '../_components/Subreddit';

export default function GamingDetails() {
    const page = 'GamingDetails';
    const subredditName = `r/${page}`;
    
    return (
        <Flex direction='column'>
            <SubHeader subredditName={subredditName} />
            <Subreddit page={page} />
        </Flex>
    )
}
