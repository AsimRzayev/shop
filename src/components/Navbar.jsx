import React from 'react'
import {Flex, Heading, Link} from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"
import { ROUTES } from '../routes'
 export default function Navbar() {
  return (
    <Flex bg="blue.500" color="white" justifyContent="space-between" p={5}>
        <Link href='https://maxi.az'><Heading as="h2"> Orient-Shop.az </Heading></Link>
        <Flex columnGap={5} alignItems="center">
            <RouterLink to={ROUTES.PRODUCT}>Products</RouterLink>
            <RouterLink to={ROUTES.COMPANIES}>Companies</RouterLink>
            <RouterLink to={ROUTES.POST}>Posts</RouterLink>
        </Flex>
    </Flex>
  )
}
