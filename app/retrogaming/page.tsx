import { Flex } from '@chakra-ui/react';
import SubHeader from '../_components/SubHeader';
import Subreddit from '../_components/Subreddit';

export default function RetroGaming() {
    const page = 'retrogaming';
    const subredditName = `r/${page}`;

    return (
        <Flex direction='column'>
            <SubHeader subredditName={subredditName} />
            <Subreddit page={page} />
        </Flex>
    )
}
