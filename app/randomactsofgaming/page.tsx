import { Flex } from '@chakra-ui/react';
import Subreddit from '../_components/Subreddit';

export default function RandomActsOfGaming() {
    const page = 'RandomActsOfGaming';
    const subredditName = `r/${page}`;
    
    return (
        <Flex direction='column'>
            <Subreddit page={page} subredditName={subredditName} />
        </Flex>
    )
}
