import React from 'react'
import { Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { MainHeadingProps } from '../types/interfaces/MainHeadingProps'

function MainHeading({ title, subtitle, isCenter }: MainHeadingProps) {
  return (
    <VStack
        w={isCenter ? ["full", "full", "full", "52%"]: "full"}
        mx={isCenter ? ["initial", "initial", "initial", "auto"] : "initial"}
        justify={isCenter ? "center" : ["center", "center", "start"]}
        align={isCenter ? "center" : ["center", "center", "start"]}
        py="8px"
        gap="16px"
    >
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
            <Text
                fontSize={18}
                fontWeight={600}
                color="white"
                lineHeight="160%"
                letterSpacing="0%"
                textAlign="center"
                textTransform="uppercase"
            >
                {subtitle}
            </Text>
        </HStack>

        <Heading
            fontSize={[28, 28, 48]}
            fontWeight={600}
            color="brand.300"
            lineHeight="120%"
            letterSpacing="-2%"
            textAlign={isCenter ? "center" : "initial"}
        >
           {title}
        </Heading>

    </VStack>
  )
}

export default MainHeading
