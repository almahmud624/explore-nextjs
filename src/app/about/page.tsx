import React from "react";
import Image from "next/image";
import Button from "@/component/Button/Button";

const About = () => {
  return (
    <div className="py-5">
      <div className="w-full h-[300px] relative">
        <Image
          fill={true}
          src="https://img.freepik.com/free-photo/creative-group-working-startup-using-laptops_74855-3370.jpg?w=740&t=st=1694231017~exp=1694231617~hmac=a9009bd329cbf8086484d9ee006e103e19706a9169369ab6a7aa55e9de9de88f"
          className="object-cover"
        />
        <div className="absolute bottom-3 left-3 bg-black text-white p-2">
          <h3 className="font-bold text-2xl">Digital Storytellers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
      <div className="py-10 flex gap-10">
        <div className="space-y-3">
          <h3 className="font-bold text-2xl">Who are we?</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, <br /> <br /> sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold text-2xl">Who are we?</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. <br /> <br />{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button url="/contact">Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
