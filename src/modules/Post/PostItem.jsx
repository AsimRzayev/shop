import {  Stack ,Heading,Text} from '@chakra-ui/react'
import React from 'react'

export default function PostItem({heading,desc}) {

  return (
    <Stack border="1px"  justifyContent="center" w={{base:"full",md:"30%"}} p={3} spacing={3} >
   
    <Heading as="h2" fontSize="2xl">{heading}</Heading>
    <Text>{desc}</Text>
    </Stack>
  )
}
