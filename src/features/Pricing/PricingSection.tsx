import React from "react";
import {
  Box,
  VStack,
  Text,
  Heading,
  Stack,
  SimpleGrid,
  HStack,
  List,
  ListItem,
  ListIcon,
  Divider,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MainHeading from "../../ui/MainHeading";

function PricingSection() {
  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      py={["3rem", "3rem", "6rem"]}
      gap="60px"
      mt="1rem"
    >
      <ContainerLayout>
        <VStack w="full" justify="center" align="center" gap="60px">
          <MainHeading
            subtitle="Pricing"
            title="Transparent and Simple Pricing"
            isCenter={true}
          />

          {/* Deposit Fees Section */}
          <VStack
            w="full"
            justify="start"
            align="start"
            gap="40px"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Heading
              fontSize={[24, 28, 32]}
              fontWeight={600}
              color="brand.300"
              lineHeight="120%"
              letterSpacing="-4%"
            >
              Deposit Fees
            </Heading>

            <Text
              fontSize={16}
              fontWeight={400}
              lineHeight="150%"
              letterSpacing="-3%"
              color="grey.600"
              maxW="800px"
            >
              Our fees depend on the type of payment received into your USD
              account.
            </Text>

            <SimpleGrid
              w="full"
              columns={[1, 1, 2, 3]}
              gap="24px"
              mt="20px"
            >
              {/* Upwork Deposits - FREE */}
              <VStack
                w="full"
                justify="start"
                align="start"
                bgColor="brand.500"
                border="2px solid"
                borderColor="brand.100"
                rounded="20px"
                p="30px"
                gap="24px"
                minH="300px"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <VStack w="full" justify="start" align="start" gap="12px">
                  <Text
                    fontSize={14}
                    fontWeight={600}
                    color="brand.100"
                    lineHeight="160%"
                    letterSpacing="0%"
                    textTransform="uppercase"
                  >
                    Upwork Deposits
                  </Text>
                  <Heading
                    fontSize={[32, 36, 40]}
                    fontWeight={700}
                    color="brand.300"
                    lineHeight="120%"
                  >
                    FREE 🎉
                  </Heading>
                </VStack>

                <Divider borderColor="brand.100" />

                <VStack w="full" justify="start" align="start" gap="16px">
                  <Text
                    fontSize={14}
                    fontWeight={500}
                    color="grey.600"
                    lineHeight="150%"
                  >
                    Receiving payments from Upwork comes at no fee.
                  </Text>
                </VStack>
              </VStack>

              {/* Third Party Deposits - 1% */}
              <VStack
                w="full"
                justify="start"
                align="start"
                bgColor="grey.75"
                border="1px solid"
                borderColor="grey.200"
                rounded="20px"
                p="30px"
                gap="24px"
                minH="300px"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <VStack w="full" justify="start" align="start" gap="12px">
                  <Text
                    fontSize={14}
                    fontWeight={600}
                    color="brand.100"
                    lineHeight="160%"
                    letterSpacing="0%"
                    textTransform="uppercase"
                  >
                    Third Party Deposits
                  </Text>
                  <HStack align="baseline" spacing="4px">
                    <Heading
                      fontSize={[32, 36, 40]}
                      fontWeight={700}
                      color="brand.300"
                      lineHeight="120%"
                    >
                      1%
                    </Heading>
                  </HStack>
                </VStack>

                <Divider borderColor="grey.200" />

                <VStack w="full" justify="start" align="start" gap="16px">
                  <Text
                    fontSize={14}
                    fontWeight={500}
                    color="grey.600"
                    lineHeight="150%"
                  >
                    For deposits from platforms like Payoneer, PayPal, Wise,
                    Gusto, and other third parties.
                  </Text>
                </VStack>
              </VStack>

              {/* Wire Deposits */}
              <VStack
                w="full"
                justify="start"
                align="start"
                bgColor="grey.75"
                border="1px solid"
                borderColor="grey.200"
                rounded="20px"
                p="30px"
                gap="24px"
                minH="300px"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <VStack w="full" justify="start" align="start" gap="12px">
                  <Text
                    fontSize={14}
                    fontWeight={600}
                    color="brand.100"
                    lineHeight="160%"
                    letterSpacing="0%"
                    textTransform="uppercase"
                  >
                    Wire Deposits
                  </Text>
                  <HStack align="baseline" spacing="4px">
                    <Heading
                      fontSize={[32, 36, 40]}
                      fontWeight={700}
                      color="brand.300"
                      lineHeight="120%"
                    >
                      $20
                    </Heading>
                  </HStack>
                </VStack>

                <Divider borderColor="grey.200" />

                <VStack w="full" justify="start" align="start" gap="16px">
                  <Text
                    fontSize={14}
                    fontWeight={500}
                    color="grey.600"
                    lineHeight="150%"
                  >
                    For wire transfers from US banks and all non-US banks
                    below $100.
                  </Text>
                </VStack>
              </VStack>
            </SimpleGrid>
          </VStack>

          {/* Withdrawal Fees Section */}
          <VStack
            w="full"
            justify="start"
            align="start"
            gap="40px"
            mt="40px"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Heading
              fontSize={[24, 28, 32]}
              fontWeight={600}
              color="brand.300"
              lineHeight="120%"
              letterSpacing="-4%"
            >
              Withdrawal Fees
            </Heading>

            <VStack
              w="full"
              justify="start"
              align="start"
              bgColor="grey.75"
              border="1px solid"
              borderColor="grey.200"
              rounded="20px"
              p={["30px", "30px", "40px"]}
              gap="24px"
            >
              <Text
                fontSize={18}
                fontWeight={500}
                color="brand.300"
                lineHeight="150%"
              >
                Withdrawal fees vary based on your chosen payout partner.
              </Text>

              <Text
                fontSize={16}
                fontWeight={400}
                lineHeight="150%"
                letterSpacing="-3%"
                color="grey.600"
              >
                When you're ready to withdraw funds from your USD account, the
                fee will depend on the payout method and partner you select.
                Fees are displayed clearly before you confirm any withdrawal
                transaction.
              </Text>

              <List spacing={3} mt="12px">
                <ListItem display="flex" alignItems="start">
                  <ListIcon
                    as={CheckCircleIcon}
                    color="semantics.500"
                    mt="4px"
                  />
                  <Text fontSize={14} fontWeight={400} color="grey.600">
                    Multiple payout options available
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="start">
                  <ListIcon
                    as={CheckCircleIcon}
                    color="semantics.500"
                    mt="4px"
                  />
                  <Text fontSize={14} fontWeight={400} color="grey.600">
                    Transparent fees shown before confirmation
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="start">
                  <ListIcon
                    as={CheckCircleIcon}
                    color="semantics.500"
                    mt="4px"
                  />
                  <Text fontSize={14} fontWeight={400} color="grey.600">
                    Competitive rates through trusted partners
                  </Text>
                </ListItem>
              </List>
            </VStack>
          </VStack>

          {/* No Hidden Fees Section */}
          <VStack
            w="full"
            justify="center"
            align="center"
            gap="24px"
            mt="40px"
            p={["40px 20px", "40px 20px", "60px 40px"]}
            bgColor="brand.300"
            rounded="20px"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <Heading
              fontSize={[24, 28, 32]}
              fontWeight={600}
              color="white"
              lineHeight="120%"
              letterSpacing="-4%"
              textAlign="center"
            >
              No Hidden Fees
            </Heading>

            <Text
              fontSize={16}
              fontWeight={400}
              lineHeight="150%"
              letterSpacing="-3%"
              color="brand.1100"
              textAlign="center"
              maxW="700px"
            >
              What you see is what you pay. We believe in complete transparency
              with our pricing. No surprises, no hidden charges.
            </Text>
          </VStack>
        </VStack>
      </ContainerLayout>
    </Stack>
  );
}

export default PricingSection;
