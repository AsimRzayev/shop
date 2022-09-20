import React from 'react'
import {Box, Heading,Flex} from "@chakra-ui/react"
import CompanyItem from './CompanyItem'
export default function Company() {
  return (
    <Box py={5} w={{base:"100%",md:"60%" }} mx="auto">

      <Heading as="h2" textAlign="center">Company List</Heading>
      <Flex mt={2} wrap="wrap" justifyContent="space-between">
        <CompanyItem  />
        <CompanyItem   />
        <CompanyItem  />
      </Flex>

    </Box>
  )
}
