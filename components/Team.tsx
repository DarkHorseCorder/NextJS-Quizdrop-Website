import React from "react"
import { Flex, Box, Text, Heading, Image, Grid } from '@chakra-ui/react'

const Team = () => {
    return (
        <Flex id="team" my={32} flexDirection="column" color="white" px={{ base: 0, md: 40 }} mx={{ base: 0, md: 10 }} justify="ceenter" align="center">
            <Flex flex={1} flexDirection="column" justify="center" align="center">
                <Heading size="2xl">Meet the Team</Heading>
            </Flex>
            <Flex align="center" justify="center" width="80%" p={10} mt={10} borderRadius={50} bg="#0f175c" boxShadow="12px 12px 12px #16c1eb">
                <Grid width="100%"
                    templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                    gap={10}
                    zIndex={1}>
                    <Flex  w="100%" align="center" flexDirection="column">
                        <Image src="/images/team1.png" rounded="full" width={{ base: '100px', md: '120px' }} height={{ base: '100px', md: '120px' }} border="solid" borderWidth={3} borderColor="#6e6bbe" alt="CEO" />
                        <Text mt={4} fontSize="xl" as="b">Jacky</Text>
                        <Text fontSize="lg" color="gray.400" textAlign="center">Chief Executive Officer</Text>
                    </Flex>
                    <Flex w="100%" align="center" flexDirection="column">
                        <Image src="/images/team4.png" rounded="full" width={{ base: '100px', md: '120px' }} height={{ base: '100px', md: '120px' }} border="solid" borderWidth={3} borderColor="#6e6bbe" alt="CTO" />
                        <Text mt={4} fontSize="xl" as="b">King</Text>
                        <Text fontSize="lg" color="gray.400" textAlign="center">Chief Technology Officer</Text>
                    </Flex>
                    <Flex w="100%" align="center" flexDirection="column">
                        <Image src="/images/team3.png" rounded="full" width={{ base: '100px', md: '120px' }} height={{ base: '100px', md: '120px' }} border="solid" borderWidth={3} borderColor="#6e6bbe" alt="COO" />
                        <Text mt={4} fontSize="xl" as="b">JSJ</Text>
                        <Text fontSize="lg" color="gray.400" textAlign="center">Chief Operating Officer</Text>
                    </Flex>
                    <Flex w="100%" align="center" flexDirection="column">
                        <Image src="/images/team2.png" rounded="full" width={{ base: '100px', md: '120px' }} height={{ base: '100px', md: '120px' }} border="solid" borderWidth={3} borderColor="#6e6bbe" alt="Sales" />
                        <Text mt={4} fontSize="xl" as="b">Maddison</Text>
                        <Text fontSize="lg" color="gray.400" textAlign="center">Sales and Community Manager</Text>
                    </Flex>
                    <Flex w="100%" align="center" flexDirection="column">
                        <Image src="/images/team5.png" rounded="full" width={{ base: '100px', md: '120px' }} height={{ base: '100px', md: '120px' }} border="solid" borderWidth={3} borderColor="#6e6bbe" alt="Writer" />
                        <Text mt={4} fontSize="xl" as="b">JPM</Text>
                        <Text fontSize="lg" color="gray.400" textAlign="center">Writer</Text>
                    </Flex>
                    <Flex w="100%" align="center" flexDirection="column">
                        <Image src="/images/team6.png" rounded="full" width={{ base: '100px', md: '120px' }} height={{ base: '100px', md: '120px' }} border="solid" borderWidth={3} borderColor="#6e6bbe" alt="Advisor" />
                        <Text mt={4} fontSize="xl" as="b">MKe</Text>
                        <Text fontSize="lg" color="gray.400" textAlign="center">Advisor</Text>
                    </Flex>
                </Grid>
            </Flex>
        </Flex>
    );
}

export default Team