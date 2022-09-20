import React from 'react'
import {Box, Heading,Flex} from "@chakra-ui/react"
import ProductItem from './ProductItem'
export default function Product() {
  return (
    <Box py={5} w={{base:"100%",md:"60%" }} mx="auto">
        <Heading as="h2" textAlign="center">Product List</Heading>
        <Flex mt={2} wrap="wrap" justifyContent="space-between">
            <ProductItem prHeading={"Product1 "} desc="Lorem ipsum dolar set amet.Lorem ipsum dolar set amet.Lorem ipsum dolar set amet."/>
            <ProductItem prHeading={"Product2 "}   desc="Lorem ipsum dolar set amet.Lorem ipsum dolar set amet.Lorem ipsum dolar set amet."/>
            <ProductItem prHeading={"Product3 "}   desc="Lorem ipsum dolar set amet.Lorem ipsum dolar set amet.Lorem ipsum dolar set amet."/>
        </Flex>
    </Box>
  )
}
