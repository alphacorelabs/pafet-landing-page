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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MainHeading from "../../ui/MainHeading";
import { contactInfo } from "../../data/AboutData";
import { socialIcons } from "../../data/NavbarData";



function ContactSection() {

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      py={["4rem", "4rem", "6rem"]}
      bgColor="alt.300"
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
                >
                    <VStack
                      w="full"
                      justify="center"
                      align="center"
                      data-aos="slide-right"
                      data-aos-duration="1000"
                    >
                        <Image
                            w="full"
                            h="full"
                            src={isDesktop 
                                ? "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/c9gnaxgrgej4yjzlgnl3"
                                :
                                "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/eomuotgl0pv31zb7apns"
                            }
                            objectFit="cover"
                            alt="pafet-contact-image"
                        />

                    </VStack>

                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        gap="20px"
                    >
                        <MainHeading
                          title="Reach out to Pafet"
                          subtitle="Contact Us"
                          isCenter={false}
                        />

                        <Text
                            fontSize={[18, 18, 20]}
                            fontWeight={500}
                            color="grey.500"
                            lineHeight="160%"
                            letterSpacing="0%"
                        >
                            Feel free to reach out to Pafet anytime! We're here to help you with whatever you need.
                        </Text>


                        <VStack
                            w="full"
                            minH="314px"
                            justify="start"
                            align="start"
                            gap="10px"
                            bgColor="grey.75"
                            border="1px solid"
                            borderColor="grey.200"
                            py="20px"
                            px="40px"
                            rounded="20px"
                        >
                            <VStack
                              w="full"
                              justify="start"
                              align="start"
                              gap="20px"  
                            >
                                {contactInfo.map((item, i) => (
                                    <VStack
                                      w="full"
                                      justify="start"
                                      align="start"
                                      gap="8px"
                                    >
                                        <HStack
                                          w="fit-content"
                                          justify="start"
                                          align="center"
                                          gap="20px"
                                        >
                                            <Icon
                                              as={item.icon}
                                              fontSize="24px"
                                              color="grey.500"
                                            />

                                            <Text
                                                fontSize={[18, 18, 20]}
                                                fontWeight={500}
                                                lineHeight="150%"
                                                color="grey.500"
                                                letterSpacing="-2%"
                                            >
                                               {item.title}:
                                            </Text>
                                        </HStack>

                                        <VStack
                                          w="full"
                                          justify="start"
                                          align="start"
                                          gap="20px"
                                        >
                                            <Text
                                                fontSize={[20, 20, 24]}
                                                fontWeight={400}
                                                lineHeight="150%"
                                                color="brand.100"
                                                letterSpacing="-2%"
                                            >
                                               {item.content}
                                            </Text>
                                        </VStack>

                                    </VStack>
                                ))}

                            </VStack>

                            <VStack
                              w="full"
                              justify="start"
                              align="start"
                              gap="20px"
                            >
                                <Text
                                    fontSize={[18, 18, 20]}
                                    fontWeight={500}
                                    lineHeight="150%"
                                    color="grey.500"
                                    letterSpacing="-2%"
                                >
                                    Socials:
                                </Text>

                                <HStack
                                    w="full"
                                    justify="start"
                                    align="center"
                                    gap="10px"
                                >
                                    {socialIcons.map((item, i) => (
                                        <Link 
                                            key={i}
                                            to={item?.url}
                                        >
                                            <Icon
                                                as={item.icon}
                                                fontSize="24px"
                                                color="brand.100"
                                                _hover={{
                                                    color: "brand.100"
                                                }}
                                            />
                                        
                                        </Link>
                                    ))}

                                </HStack>
                            </VStack>

                        </VStack>

                    </VStack>

                </SimpleGrid>

            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default ContactSection
