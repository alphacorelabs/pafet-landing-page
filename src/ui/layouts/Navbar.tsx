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
import ContainerLayout from "./ContainerLayout";
import { NavbarData, navbarIcons } from "../../data/NavbarData";
import { NavIconProps } from "../../types/interfaces/NavbarProps";
import CtaButton from "../CtaButton";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

function Navbar() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const location = useLocation();
  const id = location.pathname.split("/")[1];
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const navigate = useNavigate();

  return (
    <VStack
      w="full"
      justify="start"
      align="start"
      bgColor="white"
      py={["15px", "15px", "20px"]}
      position="fixed"
      top="0"
      left="0"
      zIndex={999999}
      mb="100px"
    >
      {isDesktop ? (
        <ContainerLayout>
          <HStack w="full" justify="space-between" align="center" gap="20px">
            <HStack justify="space-between" align="center" gap="80px">
              <Link to="/">
                <VStack w="101.8px" h="30px" justify="center" align="center">
                  <Image
                    w="full"
                    h="full"
                    src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/aopbsrnbxqzqws5gijem"
                    alt="pafet-logo"
                    objectFit="cover"
                  />
                </VStack>
              </Link>

              <HStack justify="space-between" align="center" gap="40px">
                {NavbarData.map((item, i) => (
                  <>
                    {item?.hasChildren ? (
                      <Menu key={i} isLazy>
                        {({ isOpen, onClose }) => (
                          <>
                            <MenuButton
                              as={Button}
                              w="fit-content"
                              rightIcon={<IoIosArrowDown />}
                              color={item?.id === id ? "brand.100" : "alt.100"}
                              bgColor="transparent"
                              _hover={{
                                bgColor: "transparent",
                                color: "brand.100",
                              }}
                              p="initial"
                              onMouseEnter={(e) => {
                                if (typeof window !== "undefined") {
                                  e.currentTarget.click();
                                }
                              }}
                            >
                              <Text
                                key={i}
                                fontSize={16}
                                fontWeight={item?.id === id ? 600 : 500}
                                lineHeight="160%"
                                letterSpacing="0%"
                                cursor="pointer"
                              >
                                {item?.display}
                              </Text>
                            </MenuButton>
                            <MenuList
                              w="733px"
                              h="243px"
                              p="20px"
                              bgColor="white"
                              rounded="20px"
                              border="1px solid"
                              borderColor="grey.200"
                              onMouseLeave={() => {
                                if (typeof window !== "undefined") {
                                  onClose();
                                }
                              }}
                            >
                              <SimpleGrid
                                w="full"
                                columns={2}
                                gap="20px"
                                bgColor="white"
                              >
                                {item.submenu?.map((subItem, i) => (
                                  <Link to={subItem?.url} key={i}>
                                    <MenuItem
                                      bgColor="white"
                                      w="full"
                                      _hover={{
                                        rounded: "12px",
                                        bgColor: "grey.100",
                                      }}
                                    >
                                      <HStack
                                        w="full"
                                        justify="start"
                                        align="start"
                                        gap="16px"
                                        minH="74px"
                                      >
                                        <VStack
                                          w="60px"
                                          h="48px"
                                          rounded="12px"
                                          justify="center"
                                          align="center"
                                          bgColor={subItem?.iconBgColor}
                                        >
                                          <Icon
                                            as={subItem?.icon}
                                            fontSize="24px"
                                          />
                                        </VStack>

                                        <VStack
                                          w="full"
                                          justify="start"
                                          align="start"
                                          gap="4px"
                                        >
                                          <Text
                                            fontSize={16}
                                            fontWeight={600}
                                            color="brand.300"
                                            lineHeight="160%"
                                            letterSpacing="0%"
                                          >
                                            {subItem?.title}
                                          </Text>

                                          <Text
                                            fontSize={14}
                                            fontWeight={400}
                                            color="grey.500"
                                            lineHeight="160%"
                                            letterSpacing="0%"
                                          >
                                            {subItem?.description}
                                          </Text>
                                        </VStack>
                                      </HStack>
                                    </MenuItem>
                                  </Link>
                                ))}
                              </SimpleGrid>
                            </MenuList>
                          </>
                        )}
                      </Menu>
                    ) : (
                      <NavLink to={item?.path} key={i}>
                        <Text
                          fontSize={16}
                          fontWeight={item?.id === id ? 600 : 500}
                          color={item?.id === id ? "brand.100" : "alt.100"}
                          lineHeight="160%"
                          letterSpacing="0%"
                          _hover={{
                            color: "brand.100",
                          }}
                        >
                          {item?.display}
                        </Text>
                      </NavLink>
                    )}
                  </>
                ))}
              </HStack>
            </HStack>

            <HStack w="full" justify="end" align="center" gap="24px">
              <HStack
                w="88px"
                h="44px"
                justify="center"
                align="center"
                rounded="full"
                border="1px solid"
                borderColor="alt.200"
                py="10px"
                px="16px"
                backdropFilter="blur(22.598642349243164px)"
              >
                {navbarIcons.map((item: NavIconProps, i: number) => (
                  <Link to={item?.url} style={{ display: "block" }}>
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

              <Center height="46px">
                <Divider orientation="vertical" />
              </Center>

              <HStack
                w="fit-content"
                justify="space-between"
                align="center"
                gap="24px"
              >
                <Link to="#">
                  <Button
                    variant="link"
                    color="grey.700"
                    fontSize={16}
                    fontWeight={500}
                    lineHeight="160%"
                    letterSpacing="0%"
                    _hover={{
                      color: "brand.100",
                    }}
                  >
                    Sign In
                  </Button>
                </Link>

                <CtaButton
                  isLink={true}
                  isGradient={true}
                  btnText="Get Started"
                  btnUrl="#"
                  isSmall={true}
                />
              </HStack>
            </HStack>
          </HStack>
        </ContainerLayout>
      ) : (
        <ContainerLayout>
          <HStack w="full" justify="space-between" align="center">
            <Link to="/">
              <VStack w="101.8px" h="30px" justify="center" align="center">
                <Image
                  w="full"
                  h="full"
                  src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/aopbsrnbxqzqws5gijem"
                  alt="pafet-logo"
                  objectFit="cover"
                />
              </VStack>
            </Link>

            <Icon
              as={IoMenuOutline}
              fontSize="40px"
              color="brand.300"
              cursor="pointer"
              onClick={onToggle}
              _hover={{
                color: "brand.100",
              }}
            />
          </HStack>

          <Drawer size="md" placement={"top"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent
              bgColor="white"
              h="784px"
              overflowY="auto"
              border="1px solid"
              borderColor="brand.300"
            >
              <DrawerCloseButton top="25px" right="25px" />
              <DrawerBody>
                <VStack
                  w="full"
                  mt="100px"
                  gap="20px"
                  justify="start"
                  align="start"
                >
                  {NavbarData.map((item, i) => (
                    <>
                      {item?.hasChildren ? (
                        <Accordion w="full" allowToggle key={i} p="initial">
                          <AccordionItem w="full" border="none" p="initial">
                            <AccordionButton
                              as={Button}
                              w="full"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              gap="4px"
                              color={item?.id === id ? "brand.100" : "alt.100"}
                              bgColor="transparent"
                              _hover={{
                                bgColor: "transparent",
                                color: "brand.100",
                              }}
                              _expanded={{
                                color:
                                  item?.id === id ? "brand.100" : "alt.100",
                              }}
                              p="initial"
                            >
                              <Text
                                key={i}
                                fontSize={16}
                                fontWeight={item?.id === id ? 600 : 500}
                                lineHeight="160%"
                                letterSpacing="0%"
                                cursor="pointer"
                              >
                                {item?.display}
                              </Text>
                              <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel
                              w="full"
                              h="full"
                              bgColor="grey.100"
                              rounded="20px"
                              p="12px"
                            >
                              <SimpleGrid w="full" columns={1} gap="12px">
                                {item.submenu?.map((subItem, index) => (
                                  <Link
                                    key={index}
                                    to={subItem?.url}
                                    onClick={onToggle}
                                  >
                                    <HStack
                                      w="full"
                                      justify="start"
                                      align="start"
                                      gap="16px"
                                      minH="74px"
                                      transition="all 0.3s ease-in-out"
                                      _hover={{
                                        p: "10px",
                                        bgColor: "white",
                                        rounded: "20px",
                                      }}
                                    >
                                      <VStack
                                        w="60px"
                                        h="48px"
                                        rounded="12px"
                                        justify="center"
                                        align="center"
                                        bgColor={subItem?.iconBgColor}
                                      >
                                        <Icon
                                          as={subItem?.icon}
                                          fontSize="24px"
                                        />
                                      </VStack>

                                      <VStack
                                        w="full"
                                        justify="start"
                                        align="start"
                                        gap="4px"
                                      >
                                        <Text
                                          fontSize={16}
                                          fontWeight={600}
                                          color="brand.300"
                                          lineHeight="160%"
                                          letterSpacing="0%"
                                        >
                                          {subItem?.title}
                                        </Text>

                                        <Text
                                          fontSize={14}
                                          fontWeight={400}
                                          color="grey.500"
                                          lineHeight="160%"
                                          letterSpacing="0%"
                                        >
                                          {subItem?.description}
                                        </Text>
                                      </VStack>
                                    </HStack>
                                  </Link>
                                ))}
                              </SimpleGrid>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <NavLink to={item?.path} key={i} onClick={onToggle}>
                          <Text
                            fontSize={16}
                            fontWeight={item?.id === id ? 600 : 500}
                            color={item?.id === id ? "brand.100" : "alt.100"}
                            lineHeight="160%"
                            letterSpacing="0%"
                            _hover={{
                              color: "brand.100",
                            }}
                          >
                            {item?.display}
                          </Text>
                        </NavLink>
                      )}
                    </>
                  ))}

                  <VStack
                    w="full"
                    justify="center"
                    align="center"
                    gap="20px"
                    mt="40px"
                  >
                        <Link to="#" style={{ display: "block", width: "100%" }}>
                            <Button
                                w="full"
                                bgColor="white"
                                border="1px solid"
                                borderColor="alt.200"
                                py="28px"
                                px="24px"
                                rounded="full"
                                color="grey.700"
                                fontSize={16}
                                fontWeight={500}
                                lineHeight="160%"
                                letterSpacing="0%"
                                _hover={{
                                    bgColor: "brand.100",
                                    color: "white",
                                }}
                            >
                                Sign In
                            </Button>
                        </Link>

                    <HStack
                        w="full"
                        justify="start"
                        align="center"
                        gap="10px"
                    >
                        <CtaButton
                            isLink={true}
                            isSmall={false}
                            isGradient={true}
                            btnText="Create Your USD Account"
                            btnUrl="#"
                        />

                        <HStack
                            w="full"
                            h="56px"
                            justify="center"
                            align="center"
                            rounded="full"
                            bgColor="white"
                            border="1px solid"
                            borderColor="alt.200"
                            py="16px"
                            px="16px"
                            backdropFilter="blur(22.598642349243164px)"
                        >
                            {navbarIcons.map((item: NavIconProps, i: number) => (
                                <Link to={item?.url} style={{ display: "block" }}>
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

                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </ContainerLayout>
      )}
    </VStack>
  );
}

export default Navbar;
