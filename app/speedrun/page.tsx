import { Flex } from "@chakra-ui/react";
import SubHeader from "../_components/SubHeader";
import MainContent from "../_components/MainContent";

export default function Speedrun() {
    return (
        <Flex direction='column' align='center' mx={7}>
            <SubHeader text='Speedrun' />
            <MainContent />
        </Flex>
    )
}
