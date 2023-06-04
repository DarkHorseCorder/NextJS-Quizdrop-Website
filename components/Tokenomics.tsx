import React from "react"
import { Flex, Progress, Text, Heading, VStack, Image } from '@chakra-ui/react'
import ReportSvg from "public/images/report.svg"

const TOKENOMICS = [
    { "description": "Initial Dex Offering", "percentage": 41, "color": "teal" },
    { "description": "Play-to-Earn", "percentage": 25, "color": "green" },
    { "description": "Marketing", "percentage": 10, "color": "orange" },
    { "description": "Team", "percentage": 11, "color": "cyan" },
    { "description": "Development", "percentage": 5, "color": "yellow" },
    { "description": "Liquidity", "percentage": 8, "color": "pink" }
];

const Tokenomics = () => {
    return (
        <Flex id="tokenomics" mt={{ base: 10, md: 20 }} color="white" px={{ base: 0, md: 20 }} mx={{ base: 0, md: 10 }} justify="space-between"
            flexDirection={{ base: 'column', md: 'row' }}>
            <Flex flex={1} align="center" justify="center">
                <Image src="/images/report.svg" width={750} height={{ base: 550, md: 750}} alt="Report SVG" />
            </Flex>
            <Flex flex={1} flexDirection="column" justify="center" align={{ base: 'center', md: 'flex-start' }} width={{ base: '100%', md: '80%' }}>
                <Heading size="2xl">Tokenomics</Heading>
                <Text mt={4} fontSize="xl" color="gray.400" textAlign="center">Quizdrop token fundamentals and distribution.</Text>
                <Text fontSize="xl" color="gray.400" mb={10} textAlign="center">With a total of 2,000,000 supply token.</Text>
                {TOKENOMICS.map((tokenomic, index) => (
                    <VStack align="start" mt={4} width="70%" key={index}>
                        <Flex w="full">
                            <Text flex={1} flexGrow={1}>{tokenomic.description}</Text>
                            <Text as="b">{tokenomic.percentage}%</Text>
                        </Flex>
                        <Progress colorScheme={tokenomic.color} value={tokenomic.percentage} size="sm" width="100%" />
                    </VStack>
                ))}
            </Flex>
        </Flex>
    );
}

export default Tokenomics;