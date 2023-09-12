"use client";
import { signOut, useSession } from "next-auth/react";
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
  const { status } = useSession();
  return (
    <div>
      <div className="flex justify-between">
        <Link href="/">
          <div className="logo font-semibold text-lg">
            M<span className="text-red-300">@</span>PP
            <span className="text-red-300">e</span>D
          </div>
        </Link>
        <div className="flex items-center space-x-5">
          <nav className="space-x-5">
            {links?.map((link) => (
              <Link key={link?.id} href={link?.url} className="">
                {link?.title}
              </Link>
            ))}
          </nav>
          {status === "authenticated" && (
            <button
              onClick={() => signOut()}
              className="rounded bg-red-600 py-1 px-3 text-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
