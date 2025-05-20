import { VStack } from '@chakra-ui/react'
import React from 'react'

function ContainerLayout({ children }: { children: React.ReactNode }) {
  return (
    <VStack
        w={["full", "full", "full", "80%"]}
        px={["20px", "20px", "20px", "initial"]}
        mx={["initial", "initial", "initial", "auto"]}
        justify="start"
        align="start"
    >
        {children}
    </VStack>
  )
}

export default ContainerLayout
