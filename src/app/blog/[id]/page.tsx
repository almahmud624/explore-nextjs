import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);
  return (
    <>
      <div className="space-y-5">
        <div className="flex justify-between items-center gap-5">
          <div className="space-y-3 flex-1">
            <h2 className="text-3xl font-bold">{data?.title}</h2>
            <p>{data?.body}</p>
            <div className="flex items-center gap-2">
              <Image
                height="30"
                width="30"
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1694411087~exp=1694411687~hmac=18f5e29c1e10638d3e2bf586e2864e28c5a16a5c8e5e9545a82762aaec35f4b3"
                className="object-cover rounded-full"
                alt=""
              />
              <span>User</span>
            </div>
          </div>
          <div className="w-[500px] h-[250px] relative">
            <Image
              fill={true}
              src="https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?w=740&t=st=1694409826~exp=1694410426~hmac=1a76e67133cedb658f2dfe2641b3bdc763229e52885cdb01b64c7f893b5b410f"
              className="object-cover"
              alt=""
            />
          </div>
        </div>
        <p>
          {data?.body} {data?.body} {data?.body}
        </p>
      </div>
    </>
  );
};

export default BlogPost;
