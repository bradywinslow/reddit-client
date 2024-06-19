import { Flex } from "@chakra-ui/react";
import SubHeader from "../_components/SubHeader";
import MainContent from "../_components/Subreddit";

export default function GameCollecting() {
    return (
        <Flex direction='column' align='center' mx={7}>
            <SubHeader text='Game Collecting' />
            <MainContent />
        </Flex>
    )
}
