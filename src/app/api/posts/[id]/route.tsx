import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
export const GET = async (req: any, { params }: any) => {
  const { id } = params;
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (req: any, { params }: any) => {
  const { id } = params;
  try {
    await connect();
    const post = await Post.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PATCH = async (req: any, { params }: any) => {
  const { id } = params;
  const body = await req.json();
  try {
    await connect();
    const post = await Post.findByIdAndUpdate(id, body, { new: true });
    return new NextResponse("Post has been updated", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
