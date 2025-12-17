import React from "react";
import { VStack, Text, HStack, useBreakpointValue, Stack, Box, Heading } from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MainHeading from "../../ui/MainHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { whyUsData } from "../../data/WhyUsData";
import { FaQuoteLeft } from "react-icons/fa";

function WhyUs() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Stack w="full" justify="start" align="start" py={["4rem", "4rem", "6rem"]} bgGradient="linear(to-b, white, brand.500)">
      <ContainerLayout>
        <VStack w="full" justify="start" align="start" gap={["32px", "32px", "48px"]}>
          <MainHeading title="Trusted by Freelancers Who've Been There" subtitle="Customer Testimonials" isCenter={true} />

          <Box w="full">
            <Swiper
              style={{ width: "100%", paddingBottom: "50px" }}
              speed={800}
              loop={true}
              slidesPerView={1}
              spaceBetween={24}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              navigation={isDesktop}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 32,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
            >
              {whyUsData.map((item: any, i: number) => (
                <SwiperSlide key={i}>
                  <VStack
                    w="full"
                    justify="space-between"
                    align="start"
                    bgColor="white"
                    minH={["auto", "auto", "380px"]}
                    p={["24px", "24px", "40px"]}
                    gap="24px"
                    rounded="24px"
                    border="1px solid"
                    borderColor="grey.200"
                    boxShadow="0px 4px 20px rgba(114, 56, 242, 0.08)"
                    _hover={{
                      boxShadow: "0px 8px 32px rgba(114, 56, 242, 0.12)",
                      transform: "translateY(-4px)",
                      transition: "all 0.3s ease",
                    }}
                    position="relative"
                    overflow="hidden"
                  >
                    {/* Decorative gradient accent */}
                    <Box position="absolute" top="0" left="0" w="full" h="4px" bgGradient="linear(to-r, brand.100, brand.800)" />

                    {/* Quote icon */}
                    <Box position="absolute" top="32px" right="32px" opacity={0.1}>
                      <FaQuoteLeft size={64} color="#7238F2" />
                    </Box>

                    <VStack w="full" justify="start" align="start" gap="20px" zIndex={1}>
                      {/* Quote text */}
                      <Text
                        fontSize={[16, 16, 18]}
                        fontWeight={400}
                        color="grey.800"
                        lineHeight="180%"
                        letterSpacing="0%"
                        fontStyle="italic"
                        position="relative"
                      >
                        "{item?.quote}"
                      </Text>

                      {/* Divider */}
                      <Box w="60px" h="2px" bgGradient="linear(to-r, brand.100, brand.800)" rounded="full" />

                      {/* Author info */}
                      <VStack w="full" justify="start" align="start" gap="4px">
                        <HStack w="full" justify="start" align="center" gap="8px">
                          <Heading fontSize={[18, 18, 20]} fontWeight={600} color="brand.300" lineHeight="120%" letterSpacing="-1%">
                            {item?.name}
                          </Heading>
                        </HStack>
                        <Text fontSize={14} fontWeight={500} color="grey.600" lineHeight="160%" letterSpacing="0%">
                          {item?.role}
                        </Text>
                        {/* <Text fontSize={14} fontWeight={400} color="grey.500" lineHeight="160%" letterSpacing="0%">
                          {item?.location}
                        </Text> */}
                      </VStack>
                    </VStack>
                  </VStack>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </VStack>
      </ContainerLayout>
    </Stack>
  );
}

export default WhyUs;
