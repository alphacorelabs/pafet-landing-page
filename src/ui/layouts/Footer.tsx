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
  Container,
} from "@chakra-ui/react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import { footerLinks } from "../../data/FooterData";

function Footer() {
  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      bgColor="brand.300"
      gap="40px"
      h={["1040px", "680px", "750px", "540px"]}
      overflow="hidden"
      pt={["2rem", "2rem", "2rem", "3rem"]}
    >
        <ContainerLayout>
            <VStack
                w="full"
                justify="start"
                align="start"
                gap="20px"
                px={["20px", "20px", "20px", "120px"]}
            >
                <SimpleGrid
                    w="full"
                    columns={[1, 2, 2, 4]}
                    py={["40px", "40px", "80px"]}
                    gap="40px"
                >
                    {footerLinks.map((item: any, i: number) => (
                        <VStack
                          key={i}
                          w="full"
                          justify="start"
                          align="start"
                          gap="20px"
                        >
                            <Text
                              fontSize={16}
                              fontWeight={400}
                              lineHeight="20px"
                              color="brand.1100"
                              letterSpacing="-3%"
                              textTransform="uppercase"
                            >
                                {item?.title}
                            </Text>

                            <VStack
                              w="full"
                              justify="start"
                              align="start"
                              gap="16px"
                            >
                                {item.links.map((link: any, index: number) => (
                                    <Link 
                                       key={index}
                                       to={link.url}
                                    >
                                        <Text
                                            fontSize={16}
                                            fontWeight={500}
                                            lineHeight="160%"
                                            color="brand.1000"
                                            letterSpacing="0%"
                                            _hover={{
                                                color: "brand.100"
                                            }}
                                        >
                                            {link?.display}
                                        </Text>
                                    </Link>
                                ))}

                            </VStack>

                        </VStack>
                    ))}

                </SimpleGrid>

                <VStack
                  w="full"
                  justify="center"
                  align="center"
                  h="200px"
                  overflow="hidden"
                  bgImage="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/uurodtiypcbxgrotclc5"
                  bgPos="center"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                >
                      <Text
                          fontSize={16}
                          fontWeight={500}
                          lineHeight="160%"
                          color="brand.1000"
                          letterSpacing="0%"
                          textAlign="center"
                          zIndex={2}
                          mt={["-100px", "-100px", "-250px"]}
                      >
                          &copy; {new Date().getFullYear()} Pafet. All rights reserved.
                      </Text>


                </VStack>


            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default Footer
