import React from "react";
import Image from "next/image";
import Button from "@/component/Button/Button";
import { notFound } from "next/navigation";
import { items } from "./data.tsx";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const { category } = params;
  const data = getData(category);
  return (
    <>
      <div className="pb-5">
        <h4 className="font-bold text-xl text-red-600 mt-3 capitalize">
          {category}
        </h4>
        <div className="space-y-20">
          {data?.map((item) => (
            <div
              key={item?.id}
              className="flex gap-10 justify-center items-center mt-10 even:flex-row-reverse"
            >
              <div className="flex-1 space-y-3">
                <h2 className="text-3xl font-bold">{item?.title}</h2>
                <p>{item?.desc}</p>
                <Button url={item?.url}>See More</Button>
              </div>
              <div className="w-[450px] h-[300px] relative">
                <Image
                  fill={true}
                  src={item?.image}
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
