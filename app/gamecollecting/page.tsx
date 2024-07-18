import { Flex } from '@chakra-ui/react';
import Subreddit from '../_components/Subreddit';

export default function GameCollecting() {
    const page = 'gamecollecting';
    const subredditName = `r/${page}`;
    
    return (
        <Flex direction='column'>
            <Subreddit page={page} subredditName={subredditName} />
        </Flex>
    )
}
