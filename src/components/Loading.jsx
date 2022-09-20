import React from 'react'
import {Flex,Spinner} from "@chakra-ui/react"
export default function Loading() {
  return (
    <Flex py={5} justifyContent="center" alignItems="center"><Spinner size="lg"/></Flex>
  )
}
