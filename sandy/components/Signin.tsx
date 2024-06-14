"use client"

import axios from "axios";
import { useState } from "react"

export default function SigninComp()
{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    async function handleSubmit(e:any)
    {
        e.preventDefault()
        await axios.post("http://localhost:3000/backend/api/signin",
                {username,password}   
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
                            <p>Welcome back! We've missed you. Let's find something special together.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-1 flex-col bg-slate-700 items-center justify-center">
                    <div className=" p-10 shadow-2xl rounded-md">
                        <div className=" flex mb-5 justify-center">
                        <h1 className="text-4xl font-bold text-white">Signin </h1> 
                        </div>
                        <div className="mt-2">
                            <label htmlFor="" className="mt-4 text-white">Username</label>
                            <br />
                            <input onChange={(e)=>{
                                setUsername(e.target.value)
                            }} value={username} type="email" className="mt-1 p-2 rounded-md" placeholder="enter username" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="" className="mt-4 text-white">Password</label>
                            <br />
                            <input onChange={(e)=>{
                                setPassword(e.target.value)
                            }} value={password} type="password" className="mt-1 p-2 rounded-md" placeholder="enter password" />
                        </div>
                        <div className="flex justify-center mt-10">
                            <button type="submit" className="bg-white p-1 w-40 rounded-md font-bold">Signin</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}