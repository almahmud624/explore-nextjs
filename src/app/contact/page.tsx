import React from "react";
import Image from "next/image";
import contactImage from "public/images/contact-img.png";
import Button from "@/component/Button/Button";

const Contact = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center font-bold">Let's Keep in Touch</h1>
      <div className="flex justify-center items-center">
        <Image width="450" height="450" src={contactImage} />
        <div className="w-1/3">
          <form action="">
            <div className="flex flex-col space-y-5">
              <input
                type="text"
                placeholder="name"
                className="bg-transparent border border-2 py-2 px-3 text-sm border-gray-500"
              />
              <input
                type="email"
                name=""
                placeholder="email"
                className="bg-transparent border border-2 py-2 px-3 text-sm border-gray-500"
              />
              <textarea
                name=""
                id=""
                cols="30"
                placeholder="message"
                rows="10"
                className="bg-transparent border border-2 py-2 px-3 text-sm border-gray-500 h-28"
              />
              <Button url="#" style="!mt-0">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
