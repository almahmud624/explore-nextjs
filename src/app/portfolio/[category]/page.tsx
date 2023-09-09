import React from "react";
import Image from "next/image";
import Button from "@/component/Button/Button";

const data = [
  {
    id: 1,
    title: "lorem ipsum dollar emmet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius",
    image:
      "https://img.freepik.com/free-vector/furniture-shopping-app-interface_23-2148660330.jpg?w=740&t=st=1694271198~exp=1694271798~hmac=74a11a07b658d7eeb263ea7d8e24640e835ed98372b8532cd2ec4a70f1114645",
    url: "#",
  },
  {
    id: 2,
    title: "lorem ipsum dollar emmet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius",
    image:
      "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065783.jpg?w=740&t=st=1694272041~exp=1694272641~hmac=d3a393a62d7a47174bc5254cf5861b9a2bfb862c82b68624c4aa0ea11dbe8fb0",
    url: "#",
  },
  {
    id: 3,
    title: "lorem ipsum dollar emmet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius",
    image:
      "https://img.freepik.com/free-psd/user-interface-design-website-template_23-2149182791.jpg?w=996&t=st=1694272076~exp=1694272676~hmac=d64f9fe41a75ceb354fc712c61fa1fa1b4bd347b1d0232aad60e86665c02e9d8",
    url: "#",
  },
];

const Category = ({ params }) => {
  const { category } = params;
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
