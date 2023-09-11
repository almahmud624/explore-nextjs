"use client";
import React from "react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Dashboard = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
  );
  const session = useSession();
  console.log(session);

  return <div>Dashboard</div>;
};

export default Dashboard;
