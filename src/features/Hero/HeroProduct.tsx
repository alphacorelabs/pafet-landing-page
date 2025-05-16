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
import { ProductProps } from "../../types/interfaces/ProductProps";
import { IoIosCheckmarkCircle } from "react-icons/io";
import CtaButton from "../../ui/CtaButton";
import { NavIconProps } from "../../types/interfaces/NavbarProps";
import { navbarIcons } from "../../data/NavbarData";



function HeroProduct({ product }: {  product: any}) {

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
            >
                <SimpleGrid
                  w="full"
                  columns={[1, 1, 1, 2]}
                  gap="40px"
                  justifyContent="center"
                  alignItems="center"
                >
                    <VStack
                      w="full"
                      justify="start"
                      align="start"
                      gap="20px"
                      py={["20px", "20px", "100px"]}
                      pl={["initial", "initial", "40px"]}
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
                                <Icon
                                    as={product?.subTitleIcon}
                                    fontSize="24px"
                                    color="brand.500"
                                />
                                <Text
                                    fontSize={[14, 14, 18]}
                                    fontWeight={600}
                                    lineHeight="160%"
                                    letterSpacing="0%"
                                >
                                   {product?.subTitle}
                                </Text>
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
                                {product?.heading}
                            </Heading>

                            <Text
                                fontSize={[16, 16, 20]}
                                fontWeight={400}
                                lineHeight={["160%", "160%", "150%"]}
                                letterSpacing={["0%", "0%", "-3%"]}
                                color="grey.500"
                            >
                                {product?.subHeading}
                            </Text>
                        </VStack>

                        <VStack
                          w="full"
                          justify="start"
                          align="start"
                          gap="21px"
                        >
                            {product?.benefits?.map((item: any, i: number) => (
                                <HStack
                                  key={i}
                                  w="full"
                                  justify="start"
                                  align="center"
                                  gap="10px"
                                >
                                    <Icon
                                      as={IoIosCheckmarkCircle}
                                      fontSize="24px"
                                      color="semantics.500"
                                    />

                                    <Text
                                        fontSize={16}
                                        fontWeight={600}
                                        lineHeight="160%"
                                        letterSpacing="0%"
                                        color="grey.700"
                                    >
                                        {item}
                                    </Text>

                                </HStack>
                            ))}

                            <HStack
                                w="full"
                                justify="start"
                                align="center"
                                gap={["10px", "10px", "20px"]}
                                mt="20px"
                            >
                                <CtaButton
                                    isLink={true}
                                    isSmall={false}
                                    isGradient={true}
                                    btnText={product?.callToAction}
                                    btnUrl={product?.callToActionUrl}
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
                                    py={["8px", "8px", "16px"]}
                                    px={["16px", "16px", "24px"]}
                                    backdropFilter="blur(22.598642349243164px)"
                                >
                                    {navbarIcons.map((item: NavIconProps, i: number) => (
                                        <Link to={item?.url} style={{ display: "block" }}>
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


                    </VStack>

                    <VStack
                        w="full"
                        h={["390px", "390px", "640px"]}
                        rounded="20px"
                        overflow="hidden"
                        justify="center"
                        align="center"
                        data-aos="slide-left"
                        data-aos-duration="1000"
                    >
                        <Image
                            w="full"
                            h="full"
                            src={product?.imageUrl}
                            alt={`${product?.subTitle?.toLowerCase()}-product-image`}
                            objectFit="cover"
                        />

                    </VStack>

                </SimpleGrid>

            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default HeroProduct
