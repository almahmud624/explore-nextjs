"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="h-screen grid place-items-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-5 text-center">
          Create an account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Username"
            required
            className="border rounded py-2 px-2 bg-transparent border-gray-600 focus:outline-none w-full"
          />
          <input
            type="email"
            placeholder="email"
            required
            className="border rounded py-2 px-2 bg-transparent border-gray-600 focus:outline-none w-full"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="border rounded py-2 px-2 bg-transparent border-gray-600 focus:outline-none w-full"
          />
          <button
            type="submit"
            className={`border py-2 px-3 rounded text-white bg-black mt-5`}
          >
            Sign Up
          </button>
          <Link
            href="/dashboard/login"
            className="block mt-5 text-center underline"
          >
            Login with an existing account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
