import React from 'react'

import companyData from "../data.json"

const CompanyContext=React.createContext(null)

export function useCompany(){

    return React.useContext(CompanyContext)
}

export default function CompanyProviderContext({children}) {


  const addNewElement=()=>{
    companyData.push({hello:"salam"})
  }
    
  return (
    <CompanyContext.Provider value={{companyData:companyData,addNewElement:addNewElement}}>{children}</CompanyContext.Provider>
  )
}
