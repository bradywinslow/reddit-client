import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Skeleton,
    SkeletonCircle,
    SkeletonText } from '@chakra-ui/react';
import React from 'react'

export default function LoadingSkeleton() {
    return (

    <Box>
        <Flex direction='column' align='end' pr='25px'>
            <Box w={[200, 250, 300, 350]}>
                <Skeleton h='40px' borderRadius={15} />
            </Box>
        </Flex>

        <Flex direction='column' align='center'>
            <Box w={[175, 200, 225, 250]} m={5}>
                <Skeleton h='40px' borderRadius={15} />
            </Box>

            <Card w={[200, 400, 500, 700]} mb={7} px='15px' gap='2px'>
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <SkeletonCircle size='55px' />

                            <Box w='150px'>
                                <Skeleton h='20px' />
                            </Box>

                        </Flex>
                    </Flex>
                </CardHeader>

                <CardBody>
                    <Flex direction='row' justify='space-between' gap={2}>
                        <Flex direction='column' flex={2} w='100%'>
                            <Skeleton h='30px' />
                            <SkeletonText mt='25px' width='auto' fontSize='14px' noOfLines={7} spacing={4} />
                        </Flex>
                    </Flex>
                </CardBody>

                <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                    '& > button': {
                        minW: '136px',
                    },
                    }}
                >
                    <Box flex='1'>
                        <Skeleton h='40px' />
                    </Box>
                </CardFooter>
            </Card>
        </Flex>
    </Box>
  )
}
