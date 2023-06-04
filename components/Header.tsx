import React, { useState, useEffect, useRef } from "react";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    useDisclosure,
    Image,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
} from '@chakra-ui/icons';
import { motion, useAnimation } from 'framer-motion'
import useOnScreen from "helpers/useOnScreen"

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const controls = useAnimation();
    const rootRef = useRef(null);
    const onScreen = useOnScreen(rootRef);

    useEffect(() => {
        controls.start(() => ({
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }));
    }, [controls, onScreen]);

    return (
        <Box id="home">
            <Flex
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 4 }}
                px={{ base: 6 }}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        bg="white"
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <motion.div ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls}>
                <Flex flex={{ base: 1 }} align="center" justify={{ base: 'center', md: 'start' }}>
                    <Image src="/images/quizdrop.png" width={16} height={16} alt="Quizdrop" />
                    <Box ml={6} display={{ base: 'none', md: 'block'}}>
                        <Text
                            fontWeight="700"
                            fontFamily={'heading'}
                            fontSize={18}
                            color={useColorModeValue('white', 'white')}>
                            Q U I Z D R O P
                        </Text>
                        <Text
                            mt={-2}
                            fontWeight="700"
                            fontSize={18}
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.600', 'white')}>
                            Q U I Z D R O P
                        </Text>
                    </Box>
                </Flex>
                </motion.div>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'end' }}>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.400', 'gray.200');
    const linkHoverColor = useColorModeValue('white', 'white');
    const controls = useAnimation();
    const rootRef = useRef(null);
    const onScreen = useOnScreen(rootRef);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        controls.start((custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 1,
                ease: "easeOut"
            }
        }));
    }, [controls, onScreen]);

    useEffect(() => {
        fetch(`https://api.pancakeswap.info/api/v2/tokens/0x80dd860289d6dafa733c85a58d9f11707838687d`)
            .then(response => response.json())
            .then(result => setPrice(+(Number(result.data.price).toFixed(3))));
    }, []);

    return (
        <Stack direction={'row'} spacing={4} align="center" zIndex={100}>
            {NAV_ITEMS.map((navItem, index) => (
                <motion.div key={navItem.label} ref={rootRef} initial={{ opacity: 0, y: -50 }} animate={controls} custom={index}>
                    <Box>
                        <Popover trigger={'hover'} placement={'bottom-start'}>
                            <PopoverTrigger>
                                <Link
                                    zIndex={10}
                                    p={2}
                                    href={navItem.href ?? '#'}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor,
                                    }}>
                                    {navItem.label}
                                </Link>
                            </PopoverTrigger>
                        </Popover>
                    </Box>
                </motion.div>
            ))}
            <motion.div ref={rootRef} initial={{ opacity: 0, y: -50 }} animate={controls} custom={NAV_ITEMS.length + 1}>
                <Link href="https://audit.solidgrp.io/audits/quizdrop" target="_blank" isExternal style={{ textDecoration: 'none' }}>
                    <Button borderWidth={4} borderRadius={30} py={5} px={8} ml={4} color="white" borderColor="#6e6bbe" bg="transparent" _hover={{ backgroundColor: '#6e6bbe' }}>Audit</Button>
                </Link>
            </motion.div>
            <motion.div ref={rootRef} initial={{ opacity: 0, y: -50 }} animate={controls} custom={NAV_ITEMS.length + 1}>
                <Link href="/Quizdrop-whitepaper.pdf" target="_blank" isExternal style={{ textDecoration: 'none' }}>
                    <Button bg="#16c1eb" py={6} px={8} ml={1} color="white" borderRadius={30} _hover={{ backgroundColor: "#16c1eb"}}>Whitepaper</Button>
                </Link>
            </motion.div>
            {price ?
            <motion.div ref={rootRef} initial={{ opacity: 0, y: -50 }} animate={controls} custom={NAV_ITEMS.length + 1}>
                <Flex align="center" color="white">
                <Image src="/images/dollar.svg" width="8" mr={2} /> {price}
                </Flex>
            </motion.div> : null}
        </Stack>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('#080c48', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.400', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: '#home',
    },
    {
        label: 'Features',
        href: '#features',
    },
    {
        label: 'Tokenomics',
        href: '#tokenomics',
    },
    {
        label: 'Road Map',
        href: '#roadmap',
    },
    {
        label: 'Team',
        href: '#team',
    },
];