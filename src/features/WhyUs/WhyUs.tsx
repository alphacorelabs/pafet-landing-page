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

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { whyUsData } from "../../data/WhyUsData";



function WhyUs() {

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      py={["4rem", "4rem", "6rem"]} 
    >
        <ContainerLayout>
            <VStack
              w="full"
              justify="start"
              align="start"
              gap="40px"
            >
                <MainHeading
                  title="What makes Pafet perfect?"
                  subtitle="Why Pafet"
                  isCenter={true}
                />

                {isDesktop ?
                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                    >

                        <Swiper
                            style={{ width: "100%", height: "100%" }}
                            speed={2000}
                            loop={false}
                            parallax={true}
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={false}
                            centeredSlides={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            modules={[Autoplay, Parallax, Pagination, Navigation]}
                            navigation={false}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        navigation: false,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        navigation: false,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                        >
                            {whyUsData.map((item: any, i: number) => (
                                <SwiperSlide key={i}>
                                    <VStack
                                        w="full"
                                        justify="space-between"
                                        align="start"
                                        bgColor="grey.50"
                                        h="320px"
                                        p="32px"
                                        gap="8px"
                                        rounded="20px"
                                    >
                                        <Icon
                                        as={item.icon}
                                        fontSize="64px"
                                        />


                                        <VStack 
                                            w="full" 
                                            justify="start" 
                                            align="start" 
                                            gap="16px"
                                        >
                                            <Heading
                                                fontSize={[20, 20, 24]}
                                                fontWeight={600}
                                                color="grey.800"
                                                lineHeight="120%"
                                                letterSpacing="-3%"
                                            >
                                                {item?.title}
                                            </Heading>
                                            <Text
                                                fontSize={16}
                                                fontWeight={400}
                                                color="grey.800"
                                                lineHeight="160%"
                                                letterSpacing="0%"
                                            >
                                                {item?.content}
                                            </Text>
                                        </VStack>

                                    </VStack>
                                </SwiperSlide>
                            ))}

                        </Swiper>

                    </VStack>

                    :

                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                    >
                        {whyUsData.map((item: any, i: number) => (
                            <VStack
                                key={i}
                                w="full"
                                justify="space-between"
                                align="start"
                                bgColor="grey.50"
                                h="320px"
                                p="32px"
                                gap="8px"
                                rounded="20px"
                            >
                                <Icon
                                    as={item.icon}
                                    fontSize="64px"
                                />


                                <VStack 
                                    w="full" 
                                    justify="start" 
                                    align="start" 
                                    gap="16px"
                                >
                                    <Heading
                                        fontSize={[20, 20, 24]}
                                        fontWeight={600}
                                        color="grey.800"
                                        lineHeight="120%"
                                        letterSpacing="-3%"
                                    >
                                        {item?.title}
                                    </Heading>
                                    <Text
                                        fontSize={16}
                                        fontWeight={400}
                                        color="grey.800"
                                        lineHeight="160%"
                                        letterSpacing="0%"
                                    >
                                        {item?.content}
                                    </Text>
                                </VStack>

                            </VStack>
                            ))}
                        
                    </VStack>
                
                }



            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default WhyUs
