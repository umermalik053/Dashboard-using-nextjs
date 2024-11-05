import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Signup from './modules/sign-up/signUp'
import SignIn from './modules/sign-in/signIn'

const page = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100%]'>
      <Tabs defaultValue="sign-in" className="flex  flex-col w-[500px] h-[350px]  shadow-md p-4 bg-white rounded-lg" >
  <TabsList className="w-[100%]">
    <TabsTrigger className="w-[50%]" value="sign-in">Sign In</TabsTrigger>
    <TabsTrigger className="w-[50%]" value="sign-up">sign-Up</TabsTrigger>
  </TabsList>
  <TabsContent value="sign-in">
    <SignIn/>
  </TabsContent>
  <TabsContent value="sign-up">
    <Signup/>
  </TabsContent>
</Tabs>

    </div>
  )
}

export default page
