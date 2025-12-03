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
import { PlayIcon } from "../../ui/icons";



function AboutSection() {
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
              justify="center"
              align="center"
              gap="40px"
            >
                <VStack
                    w="full"
                    justify="center"
                    align="center"
                    gap="20px"
                >
                    <MainHeading
                      title="Powering Africa’s Independent Workforce"
                      subtitle="About Us"
                      isCenter={true}
                    />


                    <VStack
                        w={["full", "full", "60%"]}
                        mx={["initial", "initial", "auto"]}
                        justify="center"
                        align="center"
                        gap="40px"
                    >
                        <Text
                            fontSize={[18, 18, 20]}
                            fontWeight={500}
                            color="grey.500"
                            lineHeight="160%"
                            letterSpacing="0%"
                            textAlign="center"
                        >
                            We’re not just familiar with the challenges African freelancers face – delayed payments, blocked funds, non-transparent exchange rates, and scattered tools. We built Pafet because we believe you deserve far better.

                        </Text>


                        <Text
                            fontSize={[18, 18, 20]}
                            fontWeight={500}
                            color="grey.500"
                            lineHeight="160%"
                            letterSpacing="0%"
                            textAlign="center"
                        >
                            Pafet is the financial platform we wished existed: a simple, secure, and comprehensive solution designed specifically for African freelancers, remote workers, creatives, and consultants who earn in USD and need flexible ways to manage, spend, and preserve their income.

                        </Text>


                    </VStack>


                    <VStack
                        w={["full", "full", "60%"]}
                        mx={["initial", "initial", "auto"]}
                        justify="center"
                        align="center"
                        bgImage="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/ladruesuqjcycdwphkx4"
                        h="480px"
                        bgSize="cover"
                        bgPos="center"
                        bgRepeat="no-repeat"
                        rounded="20px"
                        mt="40px"
                    >
                        <VStack
                          w="80px"
                          h="80px"
                          justify="center"
                          align="center"
                          backdropFilter="blur(12px)"
                          rounded="full"
                          cursor="pointer"
                        >
                            <Icon
                              as={PlayIcon}
                              fontSize="40px"
                            />

                        </VStack>
                        


                    </VStack>


                </VStack>


            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default AboutSection
