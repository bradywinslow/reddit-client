import { Flex } from '@chakra-ui/react';
import Subreddit from '../_components/Subreddit';

export default function Mmorpg() {
    const page = 'MMORPG';
    const subredditName = `r/${page}`;

    return (
        <Flex direction='column'>
            <Subreddit page={page} subredditName={subredditName} />
        </Flex>
    )
}
