"use client"

import { useForm } from "react-hook-form";
import { auth , createUserWithEmailAndPassword, onAuthStateChanged } from "@/Firebase/FirebaseConfig";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Signup() {

    const router = useRouter()


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    createUserWithEmailAndPassword(auth, data.Email, data.password)
     .then((userCredential) => {
        router.push('/dashboard');
        console.log(userCredential);
      })
     .catch((error) => {
        // Handle Errors here.
        console.error("Error creating user:", error);
      });
  };

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
         <h1 className="text-2xl text-gray-900">Sign Up</h1>
      <input placeholder="Type your Email" className=" px-3 bg-[whitesmoke] my-7 h-[40px] w-[70%]" type="email" {...register("Email", { required: true })} /> 
        
      <input placeholder="Type your password"  className=" px-3 bg-[whitesmoke] h-[40px] w-[70%]" type="password" {...register("password", { required: true })} />
      
      
      <input className= "mt-4 px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 hover:shadow-lg transition duration-300" value="Sign-Up"type="submit" />
    
    </form>
  );
}