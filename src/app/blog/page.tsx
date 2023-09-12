"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
const Blog = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR("/api/posts", fetcher, { revalidateOnFocus: true });
  // const data = await getData();
  return (
    <>
      <div className=" space-y-10">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {posts?.map((item) => (
              <div
                key={item?._id}
                className="flex gap-5 justify-center items-center"
              >
                <div className="w-[300px] h-[200px] relative">
                  <Image
                    fill={true}
                    src={item?.img}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Link href={`/blog/${item?._id}`}>
                    <h4 className="text-2xl font-bold">{item?.title}</h4>
                  </Link>
                  <p>{item?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
