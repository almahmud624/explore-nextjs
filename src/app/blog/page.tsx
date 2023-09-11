import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "https://img.freepik.com/free-photo/man-working-desk-top-view_23-2149930937.jpg?w=740&t=st=1694275806~exp=1694276406~hmac=ae000f56b4b9d07ea2bf07a0d7b5d76c2d8a4fba1d51dfa17e762cf9a9abcf08",

  "https://img.freepik.com/free-photo/website-design-content-layout-graphic_53876-21203.jpg?w=826&t=st=1694275994~exp=1694276594~hmac=c1a605b3db02af4d80b7a9d4e9f0125d11d1a7ddd1a3bc61a5f0fa7d644d66ed",

  "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104509.jpg?w=740&t=st=1694276133~exp=1694276733~hmac=eddac0e108a997c63a22a11ef5d76c00b4060f757b5cacdf7daaf11b083986f2",
  "https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?w=740&t=st=1694409826~exp=1694410426~hmac=1a76e67133cedb658f2dfe2641b3bdc763229e52885cdb01b64c7f893b5b410f",
];

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Blog = async () => {
  const data = await getData();
  return (
    <>
      <div className=" space-y-10">
        {data?.slice(0, 4)?.map((item) => (
          <div
            key={item?.id}
            className="flex gap-5 justify-center items-center"
          >
            <div className="w-[300px] h-[200px] relative">
              <Image
                fill={true}
                src={images[item?.id - 1]}
                alt=""
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <Link href={`/blog/${item?.id}`}>
                <h4 className="text-2xl font-bold">{item?.title}</h4>
              </Link>
              <p>{item?.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
