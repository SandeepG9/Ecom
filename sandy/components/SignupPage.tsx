"use client"

import axios from "axios";
import { useState } from "react"

export default function SignupComp()
{
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    async function handleSubmit(e:any)
    {
        e.preventDefault()
       await axios.post("http://localhost:3000/backend/api/signup",
            {username,password,firstname,lastname}   
       )
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="flex min-h-screen">
                <div className="flex flex-1 bg-slate-600 justify-center items-center ">
                    <div className=" flex flex-col text-white">
                        <div className="flex justify-center">
                            <h1 className="text-4xl font-bold">Welcome Back!</h1>
                        </div>
                        <div> 
                            <p>Join our family! Sign up today and start discovering amazing products crafted just for you.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-1 flex-col bg-slate-700 items-center justify-center">
                    <div className=" p-10 shadow-2xl rounded-md">
                        <div className=" flex mb-5 justify-center">
                        <h1 className="text-4xl font-bold text-white">Signup </h1> 
                        </div>
                        <div>
                            <label htmlFor="" className="mt-4 text-white">First Name</label>
                            <br />
                            <input onChange={(e)=>{
                                setFirstname(e.target.value)
                            }} value={firstname} type="text" className="mt-1 p-2 rounded-md" placeholder="enter first name" />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="" className="mt-4 text-white">Last Name</label>
                            <br />
                            <input onChange={(e)=>{
                                setLastname(e.target.value)
                            }} value={lastname} type="text" className="mt-1 p-2 rounded-md" placeholder="enter lastname" />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="" className="mt-4 text-white">Username</label>
                            <br />
                            <input onChange={(e)=>{
                                setUsername(e.target.value)
                            }} value={username} type="email" className="mt-1 p-2 rounded-md" placeholder="enter username" />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="" className="mt-4 text-white">Password</label>
                            <br />
                            <input onChange={(e)=>{
                                setPassword(e.target.value)
                            }} value={password} type="password" className="mt-1 p-2 rounded-md" placeholder="enter password" />
                        </div>
                        <div className="flex justify-center mt-10">
                            <button type="submit" className="bg-white p-1 w-40 rounded-md font-bold">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}