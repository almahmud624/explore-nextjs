"use client";
import React from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
const Dashboard = () => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.user?.name}`,
    fetcher
  );
  console.log(data);
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (status === "authenticated") {
    return (
      <div className="text-5xl font-bold grid place-items-center h-screen">
        Dashboard
      </div>
    );
  }
};

export default Dashboard;
