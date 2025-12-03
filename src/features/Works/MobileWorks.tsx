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
import { worksData } from "../../data/WorksData";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



function MobileWorks() {



  return (
    <Stack
      w="full"
      justify="start"
      align="start"
    >
        <ContainerLayout>
            <VStack
              w="full"
              justify="start"
              align="start"
              gap="40px"
            >
                <MainHeading
                    subtitle="How It Works"
                    title="From Invoice to Payment in 4 Simple Steps"
                    isCenter={true}
                />

                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                    >
                            <Swiper
                                style={{ width: "100%", height: "100%" }}
                                speed={2000}
                                loop={true}
                                parallax={true}
                                slidesPerView={1}
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
                                            slidesPerView: 1,
                                            navigation: false,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            navigation: false,
                                        },
                                        1024: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                >
                                    {worksData.map((item: any, i: number) => (
                                        <SwiperSlide key={i}>
                                            <HStack
                                              w="full"
                                              justify="space-between"
                                              align="center"
                                              wrap="wrap"
                                              h="full"
                                              rounded="20px"
                                              border="2px solid"
                                              borderColor="grey.200"
                                              p="40px"
                                              gap="40px"
                                            >
                                                <VStack
                                                    w="full"
                                                    justify="start"
                                                    align="start"
                                                    gap="8px"
                                                >
                                                    <VStack
                                                        w="full"
                                                        justify="start"
                                                        align="start"
                                                        position="relative"
                                                    >
                                                        <Heading
                                                            fontSize="160px"
                                                            fontWeight={400}
                                                            color="brand.700"
                                                            lineHeight="100%"
                                                            letterSpacing="-1%"
                                                        >
                                                            {item?.id}
                                                        </Heading>

                                                        <Box
                                                          w="full"
                                                          h="180px"
                                                          position="absolute"
                                                          left={0}
                                                          bottom={0}
                                                          bgGradient="linear-gradient(180deg,rgba(142, 163, 255, 0) 0%, rgba(255, 255, 255, 1) 66%, rgba(255, 255, 255, 1) 100%)"
                                                        />
                                                    </VStack>


                                                    <VStack
                                                        w="full"
                                                        justify="start"
                                                        align="start"
                                                        gap="8px"
                                                    >
                                                        <Heading
                                                            fontSize={[20, 20, 24]}
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
                                                        >
                                                            {item?.content}
                                                        </Text>

                                                    </VStack>

                        
                                                </VStack>

                                                <VStack
                                                  w="full"
                                                  justify="center"
                                                  align="center"
                                                >
                                                    <Image
                                                      w="full"
                                                      h="full"
                                                      src={item?.imageUrl}
                                                      alt={`${item?.title?.toLowerCase()}-image`}
                                                    />

                                                </VStack>

                                            </HStack>
                                        </SwiperSlide>
                                    ))}
            
                                </Swiper>
            
                    </VStack>

              
                

            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default MobileWorks
