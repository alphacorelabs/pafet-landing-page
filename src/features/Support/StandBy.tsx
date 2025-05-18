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
import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";

function StandBy() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Stack w="full" justify="start" align="start" py={["4rem", "4rem", "6rem"]} bgColor="grey.100">
      <ContainerLayout>
        <VStack w="full" justify="center" align="center" py={["40px", "40px", "100px"]} px={["20px", "20px", "128px"]} gap="24px">
          <VStack w={["full", "full", "60%"]} mx={["initial", "initial", "auto"]} justify="center" align="center" gap="24px">
            <Heading fontSize={[28, 28, 56]} fontWeight={600} lineHeight="120%" color="grey.800" letterSpacing="-4%" textAlign="center">
              Still need help? Our team is on standby
            </Heading>
          </VStack>

          <Text
            fontSize={[16, 16, 20]}
            fontWeight={[400, 400, 500]}
            lineHeight="160%"
            color="grey.600"
            letterSpacing="0%"
            textAlign="center"
          >
            Message us in the app or send a quick email to
            <Text
              as="span"
              fontSize={[16, 16, 20]}
              fontWeight={[400, 400, 600]}
              mx="1"
              lineHeight="160%"
              color="brand.100"
              letterSpacing="0%"
              textAlign="center"
            >
              hello@usePafet.com
            </Text>
          </Text>

          <HStack
            w={["full", "full", "80%"]}
            mx={["initial", "initial", "auto"]}
            justify="space-between"
            align="center"
            gap="40px"
            wrap={["wrap", "wrap", "nowrap"]}
            mt="40px"
          >
            <HStack
              w="full"
              justify={["center", "center", "start"]}
              align="center"
              gap={["4px", "4px", "10px"]}
              wrap={["wrap", "wrap", "nowrap"]}
            >
              <HStack w="fit-content" justify="start" align="center" gap="10px">
                <Icon as={FaRegEnvelope} fontSize="24px" color="grey.600" />

                <Text fontSize={[18, 18, 20]} fontWeight={500} lineHeight="160%" color="grey.600" letterSpacing="0%" textAlign="center">
                  Email address:
                </Text>
              </HStack>

              <Text
                fontSize={[18, 18, 20]}
                fontWeight={600}
                mx="1"
                lineHeight="160%"
                color="brand.100"
                letterSpacing="0%"
                textAlign="center"
              >
                hello@usePafet.com
              </Text>
            </HStack>

            {isDesktop ? (
              <HStack
                w="full"
                justify={["center", "center", "end"]}
                align="center"
                gap={["4px", "4px", "10px"]}
                wrap={["wrap", "wrap", "nowrap"]}
              >
                <HStack w="fit-content" justify="start" align="center" gap="10px">
                  <Icon as={MdOutlinePhone} fontSize="24px" color="grey.600" />

                  <Text fontSize={[18, 18, 20]} fontWeight={500} lineHeight="160%" color="grey.600" letterSpacing="0%" textAlign="center">
                    Call line:
                  </Text>
                </HStack>

                <Text
                  fontSize={[18, 18, 20]}
                  fontWeight={600}
                  mx="1"
                  lineHeight="160%"
                  color="brand.100"
                  letterSpacing="0%"
                  textAlign="center"
                >
                  +1(302) 564-2246
                </Text>
              </HStack>
            ) : (
              <VStack w="full" justify="center" align="center">
                <HStack w="fit-content" justify="start" align="center" gap="10px">
                  <Icon as={MdOutlinePhone} fontSize="24px" color="grey.600" />

                  <Text fontSize={[18, 18, 20]} fontWeight={500} lineHeight="160%" color="grey.600" letterSpacing="0%" textAlign="center">
                    Call line:
                  </Text>
                </HStack>

                <Text
                  fontSize={[18, 18, 20]}
                  fontWeight={600}
                  mx="1"
                  lineHeight="160%"
                  color="brand.100"
                  letterSpacing="0%"
                  textAlign="center"
                >
                  +1(302) 564-2246
                </Text>
              </VStack>
            )}
          </HStack>
        </VStack>
      </ContainerLayout>
    </Stack>
  );
}

export default StandBy;
