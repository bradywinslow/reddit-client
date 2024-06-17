'use client'

import { Flex } from "@chakra-ui/react";
import SubHeader from "../_components/SubHeader";
import MainContent from "../_components/MainContent";

export default function AndroidGaming() {
    const page = 'android-gaming';
    
    return (
        <Flex
            direction='column'
            align='center'
            mx={7}
            overflowX='scroll'
        >
            <SubHeader text='Android Gaming' />
            <MainContent />
      </Flex>
    )
}
