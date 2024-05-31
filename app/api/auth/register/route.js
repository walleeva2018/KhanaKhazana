
import User from "@/app/models/User";
import connectMongo from "@/dbConnect/connectMongo";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request) => {
  const { fname, lname, email, password } = await request.json();

  console.log(fname, lname, email, password);

  await connectMongo()


  const newUser = {
    firstName: fname,
    lastName: lname,
    email,
    password: password,
  };

  console.log(newUser);

  try {
    await User.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};