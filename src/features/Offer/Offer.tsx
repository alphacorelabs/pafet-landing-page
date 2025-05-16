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
import { offersData, offersSlides } from "../../data/OfferData";
import { OfferProps } from "../../types/interfaces/OfferProps";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



function Offer() {
  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      py={["3rem", "3rem", "6rem"]}
      gap="80px"
    >
        <ContainerLayout>
            <VStack
               w="full"
               justify="center"
               align="center"
               gap="40px"
            >
                <MainHeading
                  subtitle="What We Offer"
                  title="Everything you need to manage payments in one app"
                  isCenter={true}
                />
                
                <SimpleGrid
                  w="full"
                  columns={[1, 1, 2, 4]}
                  gap="24px"
                >
                    {offersData.map((item: OfferProps, i: number) => (
                        <VStack
                            w="full"
                            justify="start"
                            align="center"
                            bgColor="grey.75"
                            minH="420px"
                            rounded="20px"
                            border="1px solid"
                            borderColor="grey.100"
                            overflow="hidden"
                            data-aos={i % 2 === 0 ? "zoom-in-up": "zoom-in"}
                            data-aos-duration="1000"
                        >
                            <VStack
                                w={["full", "full", "300px"]}
                                h="185px"
                                justify="start"
                                align="start"
                                p={i % 2 === 0 ? "initial" : ["8px", "8px", "20px"]}
                                pl={i % 2 === 0 ? ["8px", "8px", "24px"] : "initial"}
                            >
                                <Image
                                    w="full"
                                    h="full"
                                    src={item.imageUrl}
                                    alt={`${item?.title?.toLowerCase()}-image`}
                                    objectFit="contain"
                                />
                            </VStack>

                            <VStack
                              w="full"
                              justify="start"
                              align="start"
                              gap="16px"
                              pt="20px"
                              pb="30px"
                              px="20px"
                            >
                                <Text
                                    fontSize={14}
                                    fontWeight={600}
                                    color="brand.100"
                                    lineHeight="160%"
                                    letterSpacing="0%"
                                    textTransform="uppercase"
                                >
                                    {item?.category}
                                </Text>

                                <Heading
                                    fontSize={[20, 20, 24]}
                                    fontWeight={500}
                                    color="brand.300"
                                    lineHeight="120%"
                                    letterSpacing="-4%"
                                >
                                    {item?.title}
                                </Heading>

                                <Text
                                    fontSize={16}
                                    fontWeight={400}
                                    lineHeight="150%"
                                    letterSpacing="-3%"
                                    color="grey.600"
                                >
                                    {item?.description}
                                </Text>

                            </VStack>

                        </VStack>
                    ))}

                </SimpleGrid>

            </VStack>
        </ContainerLayout>

        <VStack
            w="full"
            justify="start"
            align="start"
            bgColor="brand.100"
            p="20px"
        >
                <Swiper
                    style={{ width: "100%", height: "100%" }}
                    speed={2000}
                    loop={true}
                    parallax={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    pagination={false}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Parallax, Pagination, Navigation]}
                    navigation={false}
                        breakpoints={{
                            640: {
                                slidesPerView: 4,
                                navigation: false,
                            },
                            768: {
                                slidesPerView: 4,
                                navigation: false,
                            },
                            1024: {
                                slidesPerView: 8,
                            },
                        }}
                    >
                        {offersSlides.map((item: any, i: number) => (
                            <SwiperSlide key={i}>
                                <Image
                                    w="101px"
                                    h="32px"
                                    src={item}
                                    alt={`offer-${i+1}-slide-image`}
                                    objectFit="contain"
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>

        </VStack>



    </Stack>
  )
}

export default Offer
