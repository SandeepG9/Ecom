import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new  PrismaClient()

export  async function POST(req:NextRequest)
{
    const {requsername,reqpassword} = await req.json()
    const existingUser = await client.user.findFirst({where:{username:requsername}})
    console.log(existingUser)
    if(!existingUser)
    {
       return NextResponse.json({"message":"User not found with this username"})
    }
    return NextResponse.json({"message":"Signin Api hitting"})
}