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
import { faqsData } from "../../data/FaqsData";



function FAQs() {
  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      pt="8rem"
      pb={["4rem", "4rem", "6rem"]}
      bgColor="alt.300"
    >
        <ContainerLayout>
            <VStack
              w="full"
              justify="start"
              align="start"
              gap="40px"
            >
                <MainHeading
                  title="Got questions? We’ve got answers"
                  subtitle="Faqs"
                  isCenter={true}
                />

                <VStack
                    w={["full", "full", "80%"]}
                    mx={["initial", "initial", "auto"]}
                    justify="center"
                    align="center"
                    gap="20px"
                >
                    <Accordion w="full" defaultIndex={[0]} p="initial" allowToggle>
                        {faqsData.map((item: any, i: number) => (
                            <AccordionItem key={i} p={["10px", "10px", "40px"]}>
                                <h2>
                                <AccordionButton 
                                    _hover={{ bgColor: "transparent" }}
                                    display="flex"
                                    w="full"
                                    justifyContent="space-between"
                                    alignItems={["start", "start", "center"]}
                                    p="initial"

                                >
                                        <Heading
                                            fontSize={[20, 20, 24]}
                                            fontWeight={600}
                                            color="grey.800"
                                            lineHeight="120%"
                                            letterSpacing="-1%"
                                            textAlign={["start", "start", "center"]}
                                        >
                                            {item?.question}
                                        </Heading>
                                    <AccordionIcon color="grey.700"/>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel p="initial" pt="20px" pb={4}>
                                    <Text
                                        fontSize={16}
                                        fontWeight={400}
                                        color="grey.700"
                                        lineHeight="160%"
                                        letterSpacing="0%"
                                        whiteSpace="pre-line"
                                    >
                                        {item.answer}
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>

                        ))}
                    </Accordion>

                    <VStack
                      w="full"
                      justify="center"
                      align="center"
                      mt="20px"
                      gap="16px"
                    >
                        <Link to="/contact">
                            <HStack
                                w="fit-content"
                                justify="center"
                                align="center"
                                gap="8px"
                                _hover={{
                                    gap: "12px",
                                    transition: "all 0.2s ease"
                                }}
                            >
                                <Text
                                    fontSize={16}
                                    fontWeight={500}
                                    color="grey.700"
                                    lineHeight="160%"
                                    letterSpacing="0%"
                                    _hover={{
                                        color: "brand.100"
                                    }}
                                >
                                    Don't see your question? Talk to us
                                </Text>
                                <Text
                                    fontSize={16}
                                    fontWeight={500}
                                    color="brand.100"
                                    lineHeight="160%"
                                    letterSpacing="0%"
                                >
                                    →
                                </Text>
                            </HStack>
                        </Link>
                    </VStack>



                </VStack>

            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default FAQs
