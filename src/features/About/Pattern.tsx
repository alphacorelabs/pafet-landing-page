import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Text,
  HStack,
  useBreakpointValue,
  SimpleGrid,
  Icon,
  Heading,
  Stack,
  Divider,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MainHeading from "../../ui/MainHeading";




function Pattern() {

  const [selectedTab, setSelectedTab] = useState("What we offer");
  const [hoveredTab, setHoveredTab] = useState<any>(null); 
  const buttonRefs = useRef<any>([]);
  
  const tabContents = [
    {
        display: "What we offer",
        title: "Pafet gives you everything!",
        content: "We streamline the entire payment process, making it effortless for you—from creating detailed invoices to receiving payments, withdrawing your funds, managing your balances, and even spending with a convenient USD virtual card. Everything you need is available on a single, user-friendly platform.",
    },


    {
        display: "Our mission",
        title: "Pafet gives you everything!",
        content: "We streamline the entire payment process, making it effortless for you—from creating detailed invoices to receiving payments, withdrawing your funds, managing your balances, and even spending with a convenient USD virtual card. Everything you need is available on a single, user-friendly platform.",
    },
  ]

  const getFilteredTab = (tab: string): any => {
    const filteredTab = tabContents.find(item => item.display === tab);
    return filteredTab;
  }

    const getBoxStyles = () => {
      if (hoveredTab !== null && buttonRefs.current[hoveredTab]) {
        const button = buttonRefs.current[hoveredTab];
        const { offsetLeft, offsetWidth } = button;
        return {
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
          opacity: 1,
        };
      }
      // Default to selected tab if no hover
      const selectedIndex = tabContents.findIndex(
        (item) => item.display === selectedTab
      );
      if (selectedIndex !== -1 && buttonRefs.current[selectedIndex]) {
        const button = buttonRefs.current[selectedIndex];
        const { offsetLeft, offsetWidth } = button;
        return {
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
          opacity: 1,
        };
      }
      return { opacity: 0 };
    };
  

 

  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      py={["4rem", "4rem", "6rem"]}
      bgColor="white"
    >
        <ContainerLayout>
            <VStack
              w="full"
              justify="center"
              align="center"
              gap="40px"
            >
                    <VStack
                        w={["full", "full", "60%"]}
                        mx={["initial", "initial", "auto"]}
                        h={["full", "full", "425px"]}
                        justify="center"
                        align="center"
                        gap="40px"
                        bgImage="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/g92dw4jgdr3exf3osecl"
                        bgPos="center"
                        bgSize="cover"
                        bgRepeat="no-repeat"
                        bgColor="brand.100"
                        rounded="20px"
                        p={["40px", "40px", "initial"]}
                    >
                        <VStack
                          w={["full", "full", "70%"]}
                          mx={["initial", "initial", "auto"]}
                          justify="center"
                          align="center"
                          gap="24px"
                        >
                            <HStack
                              w={["full", "full", "70%"]}
                              mx={["initial", "initial", "auto"]}
                              justify="space-between"
                              align="center"
                              gap="20px"
                              backdropFilter="blur(12px)"
                              bgColor="alt.500"
                              rounded="full"
                              p="4px"
                            >
                                {tabContents.map((item: any, i: number) => (
                                    <Button
                                        key={i}
                                        ref={(el) => {
                                          buttonRefs.current[i] = el;
                                        }}
                                        w="full"
                                        rounded="full"
                                        h="initial"
                                        py="12px"
                                        px="16px"
                                        fontSize={14}
                                        fontWeight={600}
                                        lineHeight="160%"
                                        letterSpacing="0%"
                                        bgColor="transparent"
                                        color={selectedTab === item.display ? "brand.100" : "brand.100"}
                                        zIndex={2}
                                        _hover={{}}
                                        onClick={() => setSelectedTab(item.display)}
                                        onMouseEnter={() => setHoveredTab(i)} 
                                        onMouseLeave={() => setHoveredTab(null)} 
                                        className="pattern-tab"
                                    >
                                        {item.display}
                                    </Button>
                                ))}

                              <Box
                                as="span"
                                position="absolute"
                                top="4px"
                                h="calc(100% - 8px)"
                                bgColor="white"
                                rounded="full"
                                transition="all 0.3s ease"
                                zIndex={1}
                                {...getBoxStyles()} 
                              />
                            </HStack>

                            <VStack
                              w="full"
                              justify="center"
                              align="center"
                              gap="20px"
                            >
                                <Heading
                                    fontSize={[32, 32, 36]}
                                    fontWeight={600}
                                    color="white"
                                    lineHeight="120%"
                                    letterSpacing="4%"
                                    textAlign="center"
                                >
                                    {getFilteredTab(selectedTab)?.title}
                                </Heading>

                            </VStack>

                            <Text
                                fontSize={16}
                                fontWeight={400}
                                color="white"
                                lineHeight="160%"
                                letterSpacing="0%"
                                textAlign="center"
                            >
                               {getFilteredTab(selectedTab)?.content}
                            </Text>
                            

                        </VStack>

                    </VStack>


            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default Pattern
