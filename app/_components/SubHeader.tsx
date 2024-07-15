import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function SubHeader({ subredditName }: {subredditName: React.ReactNode }) {
    return (
        <Flex
            justify='center'
            align='center'
            mt='90px'
            overflowY='auto'
        >
            <Heading size='lg' m={5}>{subredditName}</Heading>
        </Flex>
    )
}
