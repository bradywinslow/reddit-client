import { Flex } from '@chakra-ui/react';
import Subreddit from '../_components/Subreddit';

export default function TrueGaming() {
    const page = 'truegaming';
    const subredditName = `r/${page}`;

    return (
        <Flex direction='column'>
            <Subreddit page={page} subredditName={subredditName} />
        </Flex>
    )
}
