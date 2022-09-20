import React from 'react'
import {Stack,Heading, Text,Avatar} from "@chakra-ui/react"
export default function CompanyInfo({company}) {
    const {name,imageUrl,desc}=company;
  return (
    <Stack border="1px" justifyContent="center" p={3} spacing={3}>
    <Avatar
    size='lg'
    name='Prosper Otemuyiwa'
     src={imageUrl}
    />
    <Heading as="h2" fontSize="2xl">{name}</Heading>
    <Text>{desc}</Text>
    </Stack>
  )
}
