import React from 'react'
import {Stack,Heading, Text, Link} from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"
import { ROUTES } from '../../routes'
import CompanyInfo from '../../components/CompanyInfo'
import { useCompany } from '../../components/CompanyProvider'
export default function ProductItem({prHeading,desc}) {
   const {companyData}=useCompany();
   
  return (
    <Stack spacing={2} w={{base:"100%",md:"30%" }} mt={2}>
        <Heading as="h3" fontSize="xl">{prHeading}</Heading>
        <Text>{desc}</Text>
        <Link as={RouterLink} color="blue.500" to={ROUTES.COMPANY_DETAILS}>Etrafli oxu</Link>
        <CompanyInfo company={companyData[0]}/>
    </Stack>
  )
}
