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
import CtaButton from "../../ui/CtaButton";
import { socialIcons } from "../../data/NavbarData";

function DownloadCTA() {
  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      pt={["4rem", "4rem", "3rem"]}
      pb={["4rem", "4rem", "2rem"]}
      position="relative"
      bgColor="brand.300"
      bgImage="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/zejtenswkjcihtoaz1gk"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <ContainerLayout>
        <VStack
          w="full"
          justify="start"
          align="start"
          gap="40px"
          py={["initial", "initial", "80px"]}
          px={["initial", "initial", "80px"]}
          zIndex={2}
        >
          <SimpleGrid w="full" columns={[1, 1, 1, 2]} gap="60px">
            <VStack w="full" justify="start" align="start" gap="40px">
              <VStack w="full" justify="start" align="start" gap="20px">
                <Heading
                  fontSize={[30, 30, 56]}
                  fontWeight={600}
                  color="white"
                  lineHeight="120%"
                  letterSpacing="-1%"
                >
                  The way you get paid shouldn’t hold you back.
                </Heading>

                <Text
                  fontSize={[16, 16, 18]}
                  fontWeight={400}
                  color="grey.500"
                  lineHeight="160%"
                  letterSpacing="0%"
                >
                  Pafet gives you everything you need to earn globally, spend freely, and stay in control.
                </Text>
              </VStack>

              <VStack w="full" justify="start" align="start" gap="20px">
                <Text
                  fontSize={14}
                  fontWeight={400}
                  lineHeight="160%"
                  color="brand.900"
                  textTransform="uppercase"
                >
                  Contact Us
                </Text>

                <VStack w="full" justify="start" align="start" gap="16px">
                  <Text
                    fontSize={16}
                    fontWeight={600}
                    lineHeight="160%"
                    letterSpacing="0%"
                    color="brand.900"
                  >
                    hello@usePafet.com
                  </Text>

                  <HStack w="full" justify="start" align="center" gap="10px">
                    {socialIcons.map((item, i) => (
                      <Link
                        key={i}
                        to={item?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon
                          as={item.icon}
                          fontSize="24px"
                          color="brand.1000"
                          _hover={{
                            color: "brand.100",
                          }}
                        />
                      </Link>
                    ))}
                  </HStack>
                </VStack>
              </VStack>
            </VStack>

            <VStack
              w="full"
              justify="center"
              align="center"
              gap="40px"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image
                w="full"
                h="full"
                src="https://miscfiles.nyc3.cdn.digitaloceanspaces.com/Frame%201618868140.png"
                alt="download-cta-image"
                objectFit="contain"
              />

              <CtaButton
                isLink={true}
                isSmall={true}
                isGradient={true}
                isDownload={true}
                btnText="Create Your Account Now"
                btnUrl="/"
              />
            </VStack>
          </SimpleGrid>
        </VStack>
      </ContainerLayout>
    </Stack>
  );
}

export default DownloadCTA;
