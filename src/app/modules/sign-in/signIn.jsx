"use client"

import { useForm } from "react-hook-form";
import { auth,signInWithEmailAndPassword,onAuthStateChanged } from "@/Firebase/FirebaseConfig";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
export default function SignIn() {
    const router = useRouter()
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => {
    signInWithEmailAndPassword(auth, data.Email, data.password)
     .then((userCredential) => {
        router.push('/dashboard');
      })
     .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push('/dashboard');
          // ...
        }
      });  
    }  

)
 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center ">
    
      <h1 className="text-2xl text-gray-900">Sign In</h1>
      <input placeholder="Type your Email" className=" px-3 bg-[whitesmoke] my-7 h-[40px] w-[70%]" type="email" {...register("Email", { required: true })} /> 
          
      <input placeholder="Type your password"  className=" px-3 bg-[whitesmoke] h-[40px] w-[70%]" type="password" {...register("password", { required: true })} />
     
      
      <input className= "mt-4 px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 hover:shadow-lg transition duration-300" value="Sign-In"type="submit" />
    </form>
  );
}