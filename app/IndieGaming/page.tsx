import { Flex } from '@chakra-ui/react';
import SubHeader from '../_components/SubHeader';
import Subreddit from '../_components/Subreddit';

export default function IndieGaming() {
    const page = 'IndieGaming';
    const subredditName = `r/${page}`;
    
    return (
        <Flex direction='column'>
            <SubHeader subredditName={subredditName} />
            <Subreddit page={page} />
        </Flex>
    )
}
