import React from "react"
import { Flex, Box, Text, Heading, Image } from '@chakra-ui/react'

const Service = () => {
    return (
        <Flex id="features" mt={20} flexDirection="column" color="white" px={{ base: 0, md: 40 }} mx={{ base: 0, md: 10 }} justify="ceenter" align="center">
            <Flex flex={1} flexDirection="column" justify="center" align="center">
                <Text mt={2} fontSize="2xl" fontWeight="700" color="#6e6bbe">What we serve</Text>
                <Heading size="xl">Features That We</Heading>
                <Heading size="xl">Provide for You</Heading>
            </Flex>
            <Flex align="center" justify="center" width="80%" mt={10}>
                <Flex flexDirection={{ base: 'column', md: 'row' }}>
                    <Box flex={1} bg="#0f175c" zIndex={1} borderRadius={15} m={2} p={10} align="center">
                        <Image src='/images/money-flow.svg' width="78px" />
                        <Text fontSize="xl" fontWeight="bold" color="white" mt={2}>Lock and Play</Text>
                        <Text color="gray.400" mt={8}>
                            Lock two quizdrop tokens, start playing and win rewards of quizdrop tokens. You will also be rewarded with sponsored tokens if the quiz is sponsored.
                        </Text>
                    </Box>
                    <Box flex={1} bg="#0f175c" zIndex={1} borderRadius={15} m={2} p={10} align="center">
                        <Image src='/images/game-controller.svg' width="78px" />
                        <Text fontSize="xl" fontWeight="bold" color="white" mt={2}>Play-To-Earn</Text>
                        <Text color="gray.400" mt={8}>
                            A unique and amazing quiz game to earn quizdrop tokens. Play the quiz game and win quizdrop tokens as a reward for every correct answer.
                        </Text>
                    </Box>
                    <Box flex={1} bg="#0f175c" zIndex={1} borderRadius={15} m={2} p={10} align="center">
                        <Image src='/images/trophy.svg' width="78px" />
                        <Text fontSize="xl" fontWeight="bold" color="white" mt={2}>Sponsored Quiz</Text>
                        <Text color="gray.400" mt={8}>
                            When you play a quiz game posted by Quizdrop, you will be rewarded with Qdrop tokens. If the game is sponsored you will be rewarded with both the Qdrop as well as the sponsored tokens.
                        </Text>
                    </Box>
                    <Box flex={1} bg="#0f175c" zIndex={1} borderRadius={15} m={2} p={10} align="center">
                        <Image src='/images/nft.svg' width="78px" />
                        <Text fontSize="xl" fontWeight="bold" color="white" mt={2}>Non-Fungible Token</Text>
                        <Text color="gray.400" mt={8}>
                            The team will launch NFT immidiately after Phase 1 of the project is completed.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Service;