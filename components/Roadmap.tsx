import React, { useState } from "react"
import { Flex, Box, Text, Heading, Button, VStack, Grid } from '@chakra-ui/react'

const Roadmap = () => {
    const [tab, setTab] = useState(1);

    return (
        <Flex id="roadmap" mt={32} flex={1} bg="#0f175c" color="white">
            <Box my={16} align="center" width="full">
                <Heading size="2xl">Road Map</Heading>
                <Flex flex={1} align="center" justify="center" mt={16}>
                    <Button onClick={() => setTab(1)} bg={(tab === 1) ? '#16c1eb' : ''} borderRadius={30} py={6} px={6} _hover={{ backgroundColor: '#16c1eb' }}>Phase 1</Button>
                    {/* <Button onClick={() => setTab(2)} bg={(tab === 2) ? '#16c1eb' : ''} borderRadius={30} py={6} px={6} ml={4} _hover={{ backgroundColor: '#16c1eb' }}>Phase 2</Button> */}
                </Flex>
                {tab === 1 ?
                <VStack mt={6} zIndex={1}>
                    <Text color="gray.400" mb={4}>September 2021 - January 2022</Text>
                    <Grid width={{ base: '90%', md: '50%' }}
                        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                        templateRows={{ base: "repeat(15, 1fr)", md: "repeat(7, 1fr)"}}
                        autoFlow="column"
                        gap={3}
                        zIndex={1}>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text textAlign="left">Launch Website / Social Medias / Whitepaper</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>Private Sale</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>Initial Dex Offering (Harmonypad and Playpad)</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>First DEX Listing</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>Contract Audit</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>Launch of Quizdrop Play-to-Earn Game</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>Coinmarketcap Listing</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>Quizchest Reward Booster</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>Quizstake</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>CEX Listing</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>Sponsored Quiz Game</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>Coingecko Listing</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="dashed" borderColor="#00c291" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#00c291" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>DONE</Text>
                            </Box>
                            <Text>Marketing and Promotion</Text>
                        </Flex>
                    </Grid>
                </VStack> : null}
                {tab === 2 ?
                <VStack mt={6} zIndex={1}>
                    <Text color="gray.400" mb={4}>February 2022 - April 2022</Text>
                    <Grid width={{ base: '90%', md: '50%' }}
                        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                        gap={3}
                        zIndex={1}>
                        <Flex w="100%" borderStyle="solid" borderColor="#6e6bbe" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#6e6bbe" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>PENDING</Text>
                            </Box>
                            <Text>NFT Launch</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="solid" borderColor="#6e6bbe" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#6e6bbe" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>PENDING</Text>
                            </Box>
                            <Text textAlign="left">Multiplayer Grand Prize Quiz Tournament</Text>
                        </Flex>
                        <Flex w="100%" borderStyle="solid" borderColor="#6e6bbe" borderWidth={3} align="center" px={2} py={2} bg="#051d4">
                            <Box bg="#6e6bbe" px={2} py={1} minW={24} mr={2}>
                                <Text as="b" fontSize={18}>PENDING</Text>
                            </Box>
                            <Text textAlign="left">Phase 2 detailed info will be updated before phase 1 completion</Text>
                        </Flex>
                    </Grid>
                </VStack> : null}
            </Box>
        </Flex>
    );
}

export default Roadmap;