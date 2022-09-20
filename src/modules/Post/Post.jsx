import React from 'react'
import {Box, Heading,Flex, Button} from "@chakra-ui/react"
import PostItem from './PostItem'

import Loading from '../../components/Loading';
import ErrorPage from '../../components/ErrorPage';
import { PostService } from '../../services/postService';
import { useQuery,useMutation } from '@tanstack/react-query';
const postService=new PostService();

export default function Post() {
  const {data:posts,isLoading,error,isError}=useQuery(["getUsers"],postService.getPostData)
  
  const {mutate}=useMutation(()=>postService.sendPostData({message:"Qarabag Azerbaycandir!",region:"Fransa",myAge:20}))

if(isLoading){
  return <Loading/>
}
if(isError){
  return <ErrorPage error={JSON.parse(error.message)} />
}

const sendData=()=>{
  mutate();
}
  return (
    <Box py={5} w={{base:"100%",md:"60%" }} mx="auto">

      <Heading as="h2" textAlign="center">Post List</Heading>
      <Flex mt={2} wrap="wrap" justifyContent="space-between" rowGap={5}>
       {posts?.map(post=><PostItem key={post.id}  heading={post.heading} desc={post.desc}/>
       )} 
      </Flex>

<Button onClick={sendData}>Click me!</Button>

    </Box>
  )
}
