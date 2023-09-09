import Link from "next/link";
import React from "react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="logo font-semibold text-lg">
          M<span className="text-red-300">@</span>PP
          <span className="text-red-300">e</span>D
        </div>
        <div className="flex items-center space-x-5">
          <nav className="space-x-5">
            {links?.map((link) => (
              <Link key={link?.id} href={link?.url} className="">
                {link?.title}
              </Link>
            ))}
          </nav>
          <button className="rounded-sm bg-red-600 py-1 px-3 text-white">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
