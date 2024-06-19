import { Flex } from "@chakra-ui/react";
import SubHeader from "../_components/SubHeader";
import MainContent from "../_components/Subreddit";

export default function Gaming4Gamers() {
    return (
        <Flex direction='column' align='center' mx={7}>
            <SubHeader text='Gaming 4 Gamers' />
            <MainContent />
        </Flex>
    )
}
