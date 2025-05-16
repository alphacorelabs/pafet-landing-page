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
} from "@chakra-ui/react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MainHeading from "../../ui/MainHeading";
import { supportData } from "../../data/SupportData";
import { AiOutlineQuestionCircle } from "react-icons/ai";



function Support() {
  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      pt="6rem"
      pb={["4rem", "4rem", "6rem"]}
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
                    w="full"
                    justify="center"
                    align="center"
                    gap="20px"
                >
                    <MainHeading
                      title="Help Center"
                      subtitle="Support"
                      isCenter={true}
                    />


                    <VStack
                        w={["full", "full", "40%"]}
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
                            We know how frustrating bad support can be. That’s why we treat every issue like it’s our own.
                        </Text>

                    </VStack>

                </VStack>

                <SimpleGrid
                  w="full"
                  columns={[1, 1, 1, 2]}
                  gap="40px"
                >
                    <VStack
                      w="full"
                      justify="start"
                      align="start"
                      gap="12px"
                      order={[2, 2, 1]}
                    >
                        {supportData.map((item, i) => (
                            <HStack
                                key={i}
                                w="full"
                                justify="start"
                                align="start"
                                gap="10px"
                                bgColor="grey.75"
                                border="1px solid"
                                borderColor="grey.200"
                                p="24px"
                                rounded="20px"
                            >
                                <Icon
                                  as={AiOutlineQuestionCircle}
                                  fontSize="24px"
                                  color="brand.100"
                                />

                                <VStack 
                                    w="full" 
                                    justify="start" 
                                    align="start" 
                                    gap="8px"
                                >
                                    <Heading
                                        fontSize={[18, 18, 20]}
                                        fontWeight={500}
                                        color="grey.800"
                                        lineHeight="120%"
                                        letterSpacing="-3%"
                                    >
                                        {item?.question}
                                    </Heading>
                                    <Text
                                        fontSize={16}
                                        fontWeight={400}
                                        color="grey.600"
                                        lineHeight="160%"
                                        letterSpacing="0%"
                                    >
                                        {item?.answer}
                                    </Text>
                                </VStack>

                            
                            </HStack>
                        ))}
                    </VStack>

                    <VStack
                        w="full"
                        h={["390px", "390px", "568px"]}
                        order={[1, 1, 2]}
                        justify="center"
                        align="center"
                        rounded="40px"
                        overflow="hidden"
                    >
                        <Image
                          w="full"
                          h="full"
                          src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/kqluoggegrqau5rjczni"
                          alt="support-image"
                          objectFit="cover"
                        />

                    </VStack>

                </SimpleGrid>

            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default Support
