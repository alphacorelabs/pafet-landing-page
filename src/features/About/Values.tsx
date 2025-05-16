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
import { valuesData } from "../../data/AboutData";


function Values() {
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
                <MainHeading
                  title="What We Stand For"
                  subtitle="Our Values"
                  isCenter={true}
                />

                <VStack
                    w="full"
                    justify="center"
                    align="center"
                    gap="40px"
                    py={["initial", "initial", "100px"]}
                    px={["initial", "initial", "128px"]}
                >
                    <SimpleGrid
                      w="full"
                      columns={[1, 1, 1, 3]}
                      gap="80px"
                    >
                        {valuesData.slice(0, 3).map((item, i) => (
                            <VStack
                                key={i}
                                w="full"
                                justify="center"
                                align="center"
                                gap="40px"
                                minH="247px"
                                position="relative"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <VStack
                                    w="305px"
                                    h="100px"
                                    justify="center"
                                    align="center"
                                    position="relative"
                                >
                                    <Image
                                        w="full"
                                        h="full"
                                        src={item.icon}
                                        alt={`${item?.title?.toLowerCase()}-image`}
                                        objectFit="contain"
                                    />
                                </VStack>

                                <VStack
                                    w="full"
                                    justify="center"
                                    align="center"
                                    gap="20px"
                                    p={["20px", "20px", "initial"]}
                                >
                                    <Heading
                                        fontSize={[18, 18, 20]}
                                        fontWeight={600}
                                        color="brand.300"
                                        lineHeight="120%"
                                        letterSpacing="-4%"
                                    >
                                        {item?.title}
                                    </Heading>
        
                                    <Text
                                        fontSize={16}
                                        fontWeight={400}
                                        color="grey.500"
                                        lineHeight="160%"
                                        letterSpacing="0%"
                                        textAlign="center"
                                    >
                                        {item.content}
                                    </Text>
        
                                </VStack>
                                

                            </VStack>
                        ))}

                    </SimpleGrid>

                    <SimpleGrid
                      w={["full", "full", "70%"]}
                      mx={["initial", "initial", "auto"]}
                      columns={[1, 1, 1, 2]}
                      gap="80px"
                    >
                        {valuesData.slice(3, 5).map((item, i) => (
                            <VStack
                                key={i}
                                w="full"
                                justify="center"
                                align="center"
                                gap="40px"
                                minH="247px"
                                position="relative"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <VStack
                                    w="305px"
                                    h="100px"
                                    justify="center"
                                    align="center"
                                    position="relative"
                                >
                                    <Image
                                        w="full"
                                        h="full"
                                        src={item.icon}
                                        alt={`${item?.title?.toLowerCase()}-image`}
                                        objectFit="contain"
                                    />
                                </VStack>

                                <VStack
                                    w="full"
                                    justify="center"
                                    align="center"
                                    gap="20px"
                                >
                                    <Heading
                                        fontSize={[18, 18, 20]}
                                        fontWeight={600}
                                        color="brand.300"
                                        lineHeight="120%"
                                        letterSpacing="-4%"
                                    >
                                        {item?.title}
                                    </Heading>
        
                                    <Text
                                        fontSize={16}
                                        fontWeight={400}
                                        color="grey.500"
                                        lineHeight="160%"
                                        letterSpacing="0%"
                                        textAlign="center"
                                    >
                                        {item.content}
                                    </Text>
        
                                </VStack>
                                

                            </VStack>
                        ))}

                    </SimpleGrid>

                </VStack>
            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default Values
