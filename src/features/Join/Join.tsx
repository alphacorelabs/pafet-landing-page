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
import { joinData } from "../../data/JoinData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Join() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const [activeCardIndex, setActiveCardIndex] = useState(1);

  const [isHovering, setIsHovering] = useState(false);

  return (
    <Stack w="full" justify="start" align="start" py={["4rem", "4rem", "6rem"]} bgColor="alt.300">
      <ContainerLayout>
        <VStack w="full" justify="start" align="start" gap="40px">
          <MainHeading title="Join other happy users of Pafet across Africa" subtitle="Join Pafet" isCenter={true} />

          {isDesktop ? (
        <Flex
        w="full"
        justify="center"
        align="center"
        position="relative"
      >
        {joinData.map((item: any, i: number) => {
          const isActive = isHovering ? (i === activeCardIndex) : (i === 1);
          
          return (
            <VStack
              key={i}
              w={isActive ? "40%" : "30%"}
              h="540px"
              justify="end"
              align="end"
              p="20px"
              bgImage={item?.imageUrl}
              bgPos="center"
              bgSize="cover"
              overflow="hidden"
              rounded="30px"
              position="relative"
              filter={isActive ? "initial" : "grayscale(90%)"}
              role="group"
              cursor="pointer"
              transition="all 0.4s ease-in-out"
              mx="8px"
              onMouseEnter={() => {
                setActiveCardIndex(i);
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
              _after={{
                content: '" "',
                w: "full",
                h: "full",
                inset: 0,
                position: "absolute",
                bg: "linear-gradient(180deg, rgba(0, 0, 0, 0) 35.19%, rgba(0, 0, 0, 0.75) 88.52%)",
                zIndex: 1,
              }}
            >
              <VStack
                w="full"
                justify="start"
                align="start"
                gap="8px"
                zIndex={2}
                transition="all 0.2s ease-in-out"
                _groupHover={{
                  h: "140px",
                  mb: "10px",
                }}
              >
                <Heading
                  fontSize={[20, 20, 24]}
                  fontFamily="general"
                  fontWeight={600}
                  color="white"
                  lineHeight="120%"
                  letterSpacing="-3%"
                >
                  {item?.name}
                </Heading>

                <Text
                  fontSize={[18, 18, 20]}
                  fontWeight={500}
                  lineHeight="120%"
                  letterSpacing="-3%"
                  color="alt.400"
                >
                  {item?.role}
                </Text>

                <Heading
                  display={isActive ? "flex" : "none"}
                  mt="10px"
                  fontSize={16}
                  fontWeight={400}
                  lineHeight="120%"
                  letterSpacing="-3%"
                  color="white"
                >
                  {item?.remark}
                </Heading>
              </VStack>
            </VStack>
          );
        })}
      </Flex>
          ) : (
            <VStack w="full" justify="start" align="start">
              <Swiper
                style={{ width: "100%", height: "100%" }}
                speed={1000}
                loop={false}
                parallax={false}
                slidesPerView={1}
                spaceBetween={4}
                pagination={false}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
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
                {joinData.map((item: any, i: number) => (
                  <SwiperSlide key={i}>
                    <VStack
                      w="full"
                      h="540px"
                      justify="end"
                      align="end"
                      p="20px"
                      bgImage={item?.imageUrl}
                      bgPos="center"
                      bgSize="cover"
                      overflow="hidden"
                      rounded="30px"
                      position="relative"
                      filter="grayscale(90%)"
                      role="group"
                      cursor="pointer"
                      transition="filter 0.5s ease-in-out"
                      _after={{
                        content: '" "',
                        w: "full",
                        h: "full",
                        inset: 0,
                        position: "absolute",
                        bg: "linear-gradient(180deg, rgba(0, 0, 0, 0) 35.19%, rgba(0, 0, 0, 0.75) 88.52%)",
                        zIndex: 1,
                      }}
                      _hover={{
                        filter: "initial",
                      }}
                    >
                      <VStack
                        w="full"
                        justify="start"
                        align="start"
                        gap="8px"
                        zIndex={2}
                        transition="all 0.2s ease-in-out"
                        _groupHover={{
                          h: "140px",
                          mb: "10px",
                        }}
                      >
                        <Heading
                          fontSize={[20, 20, 24]}
                          fontFamily="general"
                          fontWeight={600}
                          color="white"
                          lineHeight="120%"
                          letterSpacing="-3%"
                        >
                          {item?.name}
                        </Heading>

                        <Text fontSize={[18, 18, 20]} fontWeight={500} lineHeight="120%" letterSpacing="-3%" color="alt.400">
                          {item?.role}
                        </Text>

                        <Heading
                          display="none"
                          mt="10px"
                          fontSize={16}
                          fontWeight={400}
                          lineHeight="120%"
                          letterSpacing="-3%"
                          color="white"
                          _groupHover={{
                            display: "flex",
                          }}
                        >
                          {item?.remark}
                        </Heading>
                      </VStack>
                    </VStack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </VStack>
          )}
        </VStack>
      </ContainerLayout>
    </Stack>
  );
}

export default Join;
