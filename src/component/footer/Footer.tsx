import React from "react";
import FooterLinks from "./FooterLinks";

export const Footer = () => {
  return (
    <div className="text-center space-y-36">
      <div className="space-y-3">
        <h1 className="capitalize text-4xl font-bold">
          Join our secret society
        </h1>
        <h5 className="text-gray-600">Be the first hear about the new post!</h5>
        <form action="" method="post">
          <div className="">
            <input
              type="email"
              name=""
              placeholder="Enter your email here*"
              className="bg-transparent border border-2 py-2 px-3 text-sm border-gray-700 border-r-0"
            />
            <button
              type="submit"
              className="px-3 border border-2 p-2 text-sm  bg-gray-700 text-white border-gray-700"
            >
              Join
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center border-box gap-14">
        <div className="w-1/2">
          <FooterLinks />
        </div>
        <span className="border-l h-36"></span>
        <div className="w-1/2">
          <p className="max-w-md">
            Holly "Oddly" L'Oiseau is an illustrator of peculiar paper and weird
            wares living in rural South Georgia. If you are strange, this is the
            place for you.
          </p>
        </div>
      </div>
    </div>
  );
};
