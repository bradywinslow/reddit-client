import { Flex } from '@chakra-ui/react';
import Subreddit from '../_components/Subreddit';

export default function RetroGaming() {
    const page = 'retrogaming';
    const subredditName = `r/${page}`;

    return (
        <Flex direction='column'>
            <Subreddit page={page} subredditName={subredditName} />
        </Flex>
    )
}
