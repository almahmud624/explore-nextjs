"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };
  return (
    <div>
      <div className="h-screen grid place-items-center">
        <div className="max-w-xs mx-auto">
          <h1 className="text-3xl font-bold mb-5 text-center">
            Create an account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-3">
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
            <div className="space-y-3">
              <button
                type="submit"
                className={`border py-2 px-3 rounded text-white bg-black mt-5 w-full`}
              >
                Sign in
              </button>
              <span className="block text-center">Or</span>
              <button
                type="button"
                onClick={() => signIn("google")}
                className="flex items-center w-full bg-green-700 p-2 justify-center rounded text-white"
              >
                <span>Sign in with Google </span>{" "}
              </button>
            </div>
            <Link
              href="/dashboard/register"
              className="block mt-5 text-center underline"
            >
              Create new account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
