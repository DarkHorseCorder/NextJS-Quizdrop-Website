import React from "react"
import { Flex, Heading, Image, Text } from '@chakra-ui/react'

const Partners = () => {
    return (
        <Flex mt={32} flexDirection="column" color="white" px={{ base: 0, md: 40 }} mx={{ base: 0, md: 10 }} justify="ceenter" align="center">
            <Flex flex={1} flexDirection="column" justify="center" align="center">
                <Heading size="2xl">Our Partners</Heading>
            </Flex>
            <Flex align="center" justify="center" width="80%" mt={16}>
                <Flex align="center" justify="center" flexDirection={{ base: 'column', md: 'row' }}>
                    <Image src="/images/metaplay.svg" width={{ base: 32, md: 40 }} />
                    {/* <Image ml={{ base: 0, md: 20 }} mt={{ base: 10, md: 0}} src="/images/finexbox.png" width={{ base: 218, md: 226 }} height={{ base: 54, md: 62}}/> */}
                    <Image ml={{ base: 0, md: 20 }} mt={{ base: 10, md: 0}} src="/images/harmonypad.svg" width={{ base: 32, md: 40 }} />
                    <Image ml={{ base: 0, md: 20 }} mt={{ base: 10, md: 0}} src="/images/polygon-logo.png" width={{ base: 40, md: 60 }} />
                    <Image ml={{ base: 0, md: 20 }} mt={{ base: 10, md: 0}} src="/images/polygon-studios-logo.png" width={{ base: 40, md: 60 }} />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Partners;