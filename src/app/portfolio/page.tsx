import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "UI UX design",
    image:
      "https://img.freepik.com/free-vector/isometric-ui-ux-background_23-2149047258.jpg?w=740&t=st=1694242670~exp=1694243270~hmac=b564b08248caabc77ab079abf6c3f6a5a313c9983aae8253175021451db266dc",
  },
  {
    id: 2,
    title: "Websites",
    image:
      "https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416730.jpg?w=740&t=st=1694242716~exp=1694243316~hmac=2900c085c2b23175cac08cc196370ad7a356c731fc4106ad8786a331e25af37a",
  },
  {
    id: 3,
    title: "Applications",
    image:
      "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063136.jpg?w=740&t=st=1694243817~exp=1694244417~hmac=e9b66bd4cd0b69d79e27e051927d4c829488065d986e243ecd3d793cbfc4fdad",
  },
];
const Portfolio = () => {
  return (
    <div className="max-w-[972px] mx-auto py-16">
      <h1 className="text-5xl font-bold">Our Works</h1>
      <div className="mt-5">
        <h5 className="font-bold mb-3">Choose a gallery</h5>
        <div className="flex gap-7">
          {data?.map((item) => (
            <div className="border-[3px] rounded shadow-md border-black group">
              <div className="w-[250px] h-[250px] relative">
                <Image
                  fill={true}
                  src={item?.image}
                  alt=""
                  className="filter grayscale group-hover:filter-none transition-all duration-300"
                />
                <h4 className="absolute right-2 bottom-1 text-white font-bold text-lg bg-black px-4 py-1 group-hover:text-red-500 transition-all duration-300">
                  {item?.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
