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
import { motion, AnimatePresence } from "framer-motion";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import { DocumentIcon, MoneyReceiveIcon } from "../../ui/icons";
import CtaButton from "../../ui/CtaButton";
import { navbarIcons } from "../../data/NavbarData";
import { NavIconProps } from "../../types/interfaces/NavbarProps";

const ROTATING_WORDS = ["Freelancers", "Remote Workers", "Creators"];

function HeroHome() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack w="full" justify="start" align="start" pt="6rem" pb={["4rem", "4rem", "6rem"]}>
      <ContainerLayout>
        <VStack w="full" justify="start" align="start" rounded="40px" overflow="hidden" bgColor="brand.500">
          <SimpleGrid w="full" columns={[1, 1, 1, 2]} columnGap="80px">
            <VStack w="full" justify="start" align="start" gap="40px" py={["40px", "40px", "100px"]} pl={["20px", "20px", "96px"]}>
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
                <HStack w="fit-content" justify="space-between" align="center">
                  <Icon as={DocumentIcon} fontSize="24px" color="brand.500" />
                  <Text fontSize={18} fontWeight={600} lineHeight="160%" letterSpacing="0%">
                    Invoice
                  </Text>
                </HStack>

                <Text fontSize={18} fontWeight={600} lineHeight="160%" letterSpacing="0%">
                  =
                </Text>

                <HStack w="fit-content" justify="space-between" align="center">
                  <Icon as={MoneyReceiveIcon} fontSize="24px" />
                  <Text fontSize={18} fontWeight={600} lineHeight="160%" letterSpacing="0%">
                    Income
                  </Text>
                </HStack>
              </HStack>

              <VStack w="full" justify="start" align="start" gap="20px">
                <Heading
                  fontSize={[36, 36, 56]}
                  fontWeight={600}
                  lineHeight="120%"
                  colorScheme="brand.300"
                  letterSpacing={["-1%", "-1%", "-2%"]}
                >
                  Get Paid in USD by Global Clients
                </Heading>

                <Text
                  fontSize={[16, 16, 20]}
                  fontWeight={400}
                  lineHeight={["160%", "160%", "150%"]}
                  letterSpacing={["0%", "0%", "-3%"]}
                  color="grey.500"
                >
                  US Bank Account + Professional Invoicing for{" "}
                  <Box
                    as="span"
                    position="relative"
                    display="inline-block"
                    minW={["120px", "120px", "160px"]}
                    height="1em"
                    verticalAlign="baseline"
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWordIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          fontWeight: 600,
                          background: "linear-gradient(90deg, #4F46E5 0%, #7C3AED 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {ROTATING_WORDS[currentWordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </Box>
                  .
                </Text>
              </VStack>

              <HStack w="full" justify="start" align="center" gap="20px" wrap={["wrap", "wrap", "nowrap"]}>
                <CtaButton
                  isLink={true}
                  isSmall={false}
                  isGradient={true}
                  btnText="Get Started Today"
                  btnUrl="#"
                  handleClick={() => {
                    window.open("https://app.usepafet.com", "_blank");
                  }}
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
                          color: "brand.100",
                        }}
                      />
                    </Link>
                  ))}
                </HStack>
              </HStack>
            </VStack>

            <VStack w="full" justify="start" align="start" gap="10px">
              <VStack
                w="full"
                h="600px"
                bgImage={
                  isDesktop
                    ? "https://miscfiles.nyc3.cdn.digitaloceanspaces.com/homehero.webp"
                    : "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/yqbfzm8c4xftrg5zudvs"
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
  );
}

export default HeroHome;
