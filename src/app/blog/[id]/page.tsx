import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params?.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const { id } = params;
  const post = await getData(id);
  return (
    <>
      <div className="space-y-5">
        <div className="flex justify-between items-center gap-5">
          <div className="space-y-3 flex-1">
            <h2 className="text-3xl font-bold">{post?.title}</h2>
            <p>{post?.desc}</p>
            <div className="flex items-center gap-2">
              <Image
                height="30"
                width="30"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1694411087~exp=1694411687~hmac=18f5e29c1e10638d3e2bf586e2864e28c5a16a5c8e5e9545a82762aaec35f4b3"
                className="object-cover rounded-full"
                alt=""
              />
              <span>{post?.username}</span>
            </div>
          </div>
          <div className="w-[500px] h-[250px] relative">
            <Image
              fill={true}
              src={post?.img}
              className="object-cover"
              alt=""
            />
          </div>
        </div>
        <p>{post?.content}</p>
      </div>
    </>
  );
};

export default BlogPost;
