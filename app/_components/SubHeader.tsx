import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function SubHeader({ text }: {text: React.ReactNode }) {
    return (
        <Flex>
            <Heading m={5}>{text}</Heading>
        </Flex>
    )
}
