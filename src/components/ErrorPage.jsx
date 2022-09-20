import React from 'react'
import {Flex,Alert,AlertIcon,Text} from "@chakra-ui/react"
export default function ErrorPage({error}) {

  return (
    <Flex py={5} justifyContent="center" alignItems="center">
     <Alert status={error.code===500 ?'info': 'error'} >
    <AlertIcon />
    {error.message}-<Text color="red">{error.code}</Text>
  </Alert>
</Flex>
  )
}
