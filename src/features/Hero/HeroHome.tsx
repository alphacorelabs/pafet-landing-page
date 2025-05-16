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
import { DocumentIcon, MoneyReceiveIcon } from "../../ui/icons";
import CtaButton from "../../ui/CtaButton";
import { navbarIcons } from "../../data/NavbarData";
import { NavIconProps } from "../../types/interfaces/NavbarProps";


function HeroHome() {

  const isDesktop = useBreakpointValue({ base: false, lg: true });  

  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      pt="6rem"
      pb={["4rem", "4rem", "6rem"]}
    >
        <ContainerLayout>
            <VStack
                w="full"
                justify="start"
                align="start"
                rounded="40px"
                overflow="hidden"
                bgColor="brand.500"
            >
                <SimpleGrid
                  w="full"
                  columns={[1, 1, 1, 2]}
                  columnGap="80px"
                >
                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        gap="40px"
                        py={["40px", "40px", "100px"]}
                        pl={["20px", "20px", "96px"]}
                    >
                        <HStack
                          w="fit-content"
                          justify="space-between"
                          align="center"
                          bgColor="brand.200"
                          color="white"
                          py="6px"
                          px="12px"
                          gap="8px"
                          rounded="8px"
                        >
                            <HStack
                              w="fit-content"
                              justify="space-between"
                              align="center"
                            >
                                <Icon
                                    as={DocumentIcon}
                                    fontSize="24px"
                                    color="brand.500"
                                />
                                <Text
                                  fontSize={18}
                                  fontWeight={600}
                                  lineHeight="160%"
                                  letterSpacing="0%"
                                >
                                    Invoice
                                </Text>

                            </HStack>

                            <Text
                                fontSize={18}
                                fontWeight={600}
                                lineHeight="160%"
                                letterSpacing="0%"
                            >
                                =
                            </Text>


                            <HStack
                              w="fit-content"
                              justify="space-between"
                              align="center"
                            >
                                <Icon
                                    as={MoneyReceiveIcon}
                                    fontSize="24px"
                                />
                                <Text
                                  fontSize={18}
                                  fontWeight={600}
                                  lineHeight="160%"
                                  letterSpacing="0%"
                                >
                                    Income
                                </Text>

                            </HStack>
                        </HStack>

                        <VStack
                            w="full"
                            justify="start"
                            align="start"
                            gap="20px"
                        >
                                <Heading
                                  fontSize={[36, 36, 56]}
                                  fontWeight={600}
                                  lineHeight="120%"
                                  colorScheme="brand.300"
                                  letterSpacing={["-1%", "-1%", "-2%"]}
                                >
                                    Take control of  your money moves.
                                </Heading>

                                <Text
                                  fontSize={[16, 16, 20]}
                                  fontWeight={400}
                                  lineHeight={["160%", "160%", "150%"]}
                                  letterSpacing={["0%", "0%", "-3%"]}
                                  color="grey.500"
                                >
                                    Pafet gives you a virtual USD account, card, and tools 
                                    to invoice global clients — all in one place.
                                </Text>
                        </VStack>

                        <HStack
                            w="full"
                            justify="start"
                            align="center"
                            gap="20px"
                            wrap={["wrap", "wrap", "nowrap"]}
                        >
                            <CtaButton
                                isLink={true}
                                isSmall={false}
                                isGradient={true}
                                btnText="Create Your USD Account"
                                btnUrl="/auth/sign-up"
                            />

                            <HStack
                                w="102px"
                                h="56px"
                                justify="center"
                                align="center"
                                rounded="full"
                                bgColor="white"
                                border="1px solid"
                                borderColor="alt.200"
                                py="16px"
                                px="24px"
                                backdropFilter="blur(22.598642349243164px)"
                            >
                                {navbarIcons.map((item: NavIconProps, i: number) => (
                                    <Link to={item?.url} key={i} style={{ display: "block" }}>
                                        <Icon 
                                            as={item.icon}
                                            fontSize="22px"
                                            mt="4px"
                                            _hover={{
                                                color: "brand.100"
                                            }}
                                        />
                                    </Link>
                                ))}
                            </HStack>
        
                            
    
                        </HStack>

                    </VStack>

                    <VStack
                      w="full"
                      justify="start"
                      align="start"
                      gap="10px"
                    >
                        <VStack
                          w="full"
                          h="600px"
                          bgImage={isDesktop 
                            ? "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/sl4xqduicxdkqqizi3lk"
                            : 
                            "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/v7kzavi7rez2doqfggec"
                          }
                          bgSize="cover"
                          bgPos="50% right"
                          bgRepeat="no-repeat"
                        />

                    </VStack>

                </SimpleGrid>

            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default HeroHome
