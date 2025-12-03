import React from "react";
import {
  VStack,
  Text,
  HStack,
  useBreakpointValue,
  SimpleGrid,
  Icon,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MainHeading from "../../ui/MainHeading";
import { supportIntro, beforeReachingOut, contactMethods } from "../../data/SupportData";
import { FaCheckCircle, FaEnvelope, FaComments, FaTwitter, FaInstagram } from "react-icons/fa";



function Support() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      pt="6rem"
      pb={["4rem", "4rem", "6rem"]}
      bgColor="white"
    >
        <ContainerLayout>
            <VStack
                w="full"
                justify="start"
                align="start"
                gap="48px"
            >
                <VStack
                    w="full"
                    justify="center"
                    align="center"
                    gap="20px"
                >
                    <MainHeading
                      title="Help Center"
                      subtitle="Support"
                      isCenter={true}
                    />

                    <VStack
                        w={["full", "full", "80%"]}
                        mx={["initial", "initial", "auto"]}
                        justify="center"
                        align="center"
                        gap="20px"
                    >
                        <Text
                            fontSize={[16, 16, 18]}
                            fontWeight={400}
                            color="grey.700"
                            lineHeight="180%"
                            letterSpacing="0%"
                            textAlign="center"
                        >
                            {supportIntro}
                        </Text>
                    </VStack>
                </VStack>

                <SimpleGrid
                  w="full"
                  columns={[1, 1, 1, 2]}
                  gap={["32px", "32px", "48px"]}
                >
                    {/* Before You Reach Out Section */}
                    <VStack
                      w="full"
                      justify="start"
                      align="start"
                      gap="24px"
                      bgColor="grey.50"
                      p={["24px", "24px", "32px"]}
                      rounded="24px"
                      border="1px solid"
                      borderColor="grey.200"
                      order={[2, 2, 1]}
                    >
                        <Heading
                            fontSize={[20, 20, 24]}
                            fontWeight={600}
                            color="grey.800"
                            lineHeight="120%"
                            letterSpacing="-1%"
                        >
                            {beforeReachingOut.title}
                        </Heading>
                        
                        <List spacing="12px" w="full">
                            {beforeReachingOut.items.map((item, i) => (
                                <ListItem key={i}>
                                    <HStack align="start" gap="12px">
                                        <ListIcon as={FaCheckCircle} color="brand.100" mt="4px" />
                                        {i === 0 ? (
                                            <Text
                                                fontSize={16}
                                                fontWeight={400}
                                                color="grey.700"
                                                lineHeight="160%"
                                                letterSpacing="0%"
                                            >
                                                Have a quick look at our{" "}
                                                <Link to="/faqs">
                                                    <Text
                                                        as="span"
                                                        color="brand.100"
                                                        fontWeight={500}
                                                        _hover={{
                                                            textDecoration: "underline"
                                                        }}
                                                    >
                                                        FAQs
                                                    </Text>
                                                </Link>
                                                {" "}– your answer might already be there!
                                            </Text>
                                        ) : (
                                            <Text
                                                fontSize={16}
                                                fontWeight={400}
                                                color="grey.700"
                                                lineHeight="160%"
                                                letterSpacing="0%"
                                            >
                                                {item}
                                            </Text>
                                        )}
                                    </HStack>
                                </ListItem>
                            ))}
                        </List>
                    </VStack>

                    {/* Image Section */}
                    <VStack
                        w="full"
                        h={["390px", "390px", "568px"]}
                        order={[1, 1, 2]}
                        justify="center"
                        align="center"
                        rounded="40px"
                        overflow="hidden"
                    >
                        <Image
                          w="full"
                          h="full"
                          src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/kqluoggegrqau5rjczni"
                          alt="support-image"
                          objectFit="cover"
                        />
                    </VStack>
                </SimpleGrid>

                {/* Need to Speak with Someone Section */}
                <VStack
                  w="full"
                  justify="start"
                  align="start"
                  gap="32px"
                  mt="32px"
                >
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
                            letterSpacing="-1%"
                        >
                            {contactMethods.title}
                        </Heading>
                        
                        <Text
                            fontSize={16}
                            fontWeight={400}
                            color="grey.700"
                            lineHeight="160%"
                            letterSpacing="0%"
                        >
                            {contactMethods.description}
                        </Text>
                    </VStack>

                    {/* Contact Methods */}
                    <SimpleGrid
                        w="full"
                        columns={[1, 1, 1, 3]}
                        gap="24px"
                    >
                        {contactMethods.methods.map((method, i) => (
                            <VStack
                                key={i}
                                w="full"
                                justify="start"
                                align="start"
                                gap="12px"
                                bgColor="white"
                                p="24px"
                                rounded="20px"
                                border="1px solid"
                                borderColor="grey.200"
                            >
                                <HStack gap="12px">
                                    <Icon
                                        as={
                                            method.title === "Email Us" ? FaEnvelope :
                                            method.title === "Live Chat" ? FaComments :
                                            FaTwitter
                                        }
                                        fontSize="24px"
                                        color="brand.100"
                                    />
                                    <Heading
                                        fontSize={[18, 18, 20]}
                                        fontWeight={600}
                                        color="grey.800"
                                        lineHeight="120%"
                                        letterSpacing="-1%"
                                    >
                                        {method.title}
                                    </Heading>
                                </HStack>
                                
                                <Text
                                    fontSize={16}
                                    fontWeight={400}
                                    color="grey.700"
                                    lineHeight="160%"
                                    letterSpacing="0%"
                                    whiteSpace="pre-line"
                                >
                                    {method.content}
                                </Text>

                                {method.email && (
                                    <Link to={`mailto:${method.email}`}>
                                        <Text
                                            fontSize={16}
                                            fontWeight={500}
                                            color="brand.100"
                                            lineHeight="160%"
                                            letterSpacing="0%"
                                            _hover={{
                                                textDecoration: "underline"
                                            }}
                                        >
                                            {method.email}
                                        </Text>
                                    </Link>
                                )}

                                {method.hours && (
                                    <Text
                                        fontSize={16}
                                        fontWeight={500}
                                        color="grey.800"
                                        lineHeight="160%"
                                        letterSpacing="0%"
                                    >
                                        {method.hours}
                                    </Text>
                                )}

                                {method.social && (
                                    <VStack
                                        w="full"
                                        justify="start"
                                        align="start"
                                        gap="8px"
                                        pt="8px"
                                    >
                                        {method.social.map((social, idx) => (
                                            <HStack key={idx} gap="8px">
                                                <Icon
                                                    as={social.platform.includes("Twitter") ? FaTwitter : FaInstagram}
                                                    fontSize="20px"
                                                    color="brand.100"
                                                />
                                                <Text
                                                    fontSize={16}
                                                    fontWeight={500}
                                                    color="grey.800"
                                                    lineHeight="160%"
                                                    letterSpacing="0%"
                                                >
                                                    {social.platform}: {social.handle}
                                                </Text>
                                            </HStack>
                                        ))}
                                        {method.note && (
                                            <Text
                                                fontSize={14}
                                                fontWeight={400}
                                                color="grey.600"
                                                lineHeight="160%"
                                                letterSpacing="0%"
                                                fontStyle="italic"
                                                pt="8px"
                                            >
                                                ({method.note})
                                            </Text>
                                        )}
                                    </VStack>
                                )}
                            </VStack>
                        ))}
                    </SimpleGrid>
                </VStack>

            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default Support
