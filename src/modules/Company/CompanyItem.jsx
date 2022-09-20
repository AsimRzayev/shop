import { Button, Link, Stack } from '@chakra-ui/react'
import React from 'react'
import CompanyInfo from '../../components/CompanyInfo'
import {Link as RouterLink} from "react-router-dom"
import { ROUTES } from '../../routes'
import { useCompany } from '../../components/CompanyProvider'
export default function CompanyItem() {
const {companyData,addNewElement}=useCompany()
console.log(companyData)
  return (
    <Stack spacing={2} w={{base:"100%",md:"30%" }}>
        <CompanyInfo company={companyData[1]}/>
        <Link as={RouterLink} to={ROUTES.COMPANY_DETAILS} color="blue.500">Etrafli bax</Link>
        <Button onClick={()=>{
            addNewElement();
            console.log(companyData)
            }}>
            Click
        </Button>
    </Stack>
  )
}
