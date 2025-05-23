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
import CtaButton from "../../ui/CtaButton";

function Solution() {
  return (
    <Stack w="full" justify="start" align="start" py={["4rem", "4rem", "6rem"]}>
      <ContainerLayout>
        <VStack w="full" justify="center" align="center" gap="40px">
          <MainHeading subtitle="Our Solution" title="Built for African Freelancers and Businesses" isCenter={true} />

          <SimpleGrid w="full" columns={[1, 1, 1, 12]} gap="24px">
            <VStack
              w="full"
              overflow="hidden"
              rounded="20px"
              minH="492px"
              justify="end"
              align="start"
              bgImage="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/dwfp9dxwnhojhcimgqwi"
              bgSize="cover"
              bgPos="center"
              bgRepeat="no-repeat"
              position="relative"
              gridColumn={["span 1", "span 1", "span 1", "span 4"]}
            >
              <Box w="full" h={["100px", "100px", "120px"]} position="absolute" left={0} right={0} bottom={0} backdropFilter="blur(5px)" />
              <Heading fontSize={[24, 24, 28]} fontWeight={600} color="white" lineHeight="140%" letterSpacing="-4%" zIndex={2} p="26px">
                You work globally. Your money should too.
              </Heading>
            </VStack>

            <VStack
              w="full"
              justify="start"
              align="start"
              minH="492px"
              bgColor="brand.100"
              rounded="20px"
              p="20px"
              gap="20px"
              bgImage="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/s7909bgqzvpldqwzu56c"
              bgPos="10% 100%"
              bgSize="contain"
              bgRepeat="no-repeat"
              gridColumn={["span 1", "span 1", "span 1", "span 4"]}
            >
              <VStack w="full" justify="start" align="start" gap="20px">
                <Heading fontSize={[18, 18, 20]} fontWeight={600} color="brand.800" lineHeight="120%" letterSpacing="-4%">
                  Other platforms offer little bits.
                </Heading>

                <Heading fontSize={[32, 32, 36]} fontWeight={600} color="white" lineHeight="120%" letterSpacing="-4%">
                  Pafet gives you the whole picture.
                </Heading>
              </VStack>

              <CtaButton isLink={true} isGradient={false} isSmall={true} btnText="Create Your USD Account" btnUrl="#" />
            </VStack>

            <VStack
              w="full"
              justify="start"
              align="start"
              minH="492px"
              bgColor="brand.400"
              rounded="20px"
              p="20px"
              gap="30px"
              gridColumn={["span 1", "span 1", "span 1", "span 3"]}
            >
              <VStack w="full" justify="start" align="start" gap="20px">
                <Heading fontSize={[20, 20, 24]} fontWeight={600} color="brand.300" lineHeight="120%" letterSpacing="-4%">
                  Use Pafet — a clean, connected flow to get paid, hold USD, and spend without limits.
                </Heading>
              </VStack>

              <CtaButton isLink={true} isGradient={false} isSmall={true} btnText="Download Your App" isDownload={true} btnUrl="#" />

              <Image
                w="full"
                h="full"
                src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/pgewtyzuj6gyhwumlzu2"
                alt="pafet-other-image"
                objectFit="contain"
              />
            </VStack>
          </SimpleGrid>
        </VStack>
      </ContainerLayout>
    </Stack>
  );
}

export default Solution;
