import { NextRequest, NextResponse } from "next/server"
import {PrismaClient } from "@prisma/client";
const client =new PrismaClient()
export async function POST(req:NextRequest)
{
    
    const data = await req.json();
    try{
        const user = await client.user.create({
        data:{
                username:data.username,
                password:data.password,
                firstname:data.firstname,
                lastname:data.lastname
            }
        })
        console.log(user)
    }
    catch(e)
    {
        return NextResponse.json({"message":"Somethin went wront"})
    }
    return NextResponse.json({"message":"Signup Successfully"})
}