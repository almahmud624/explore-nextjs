"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WEBSITE_REGEX = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
const INITIAL_POST_FIELD = { title: "", img: "", desc: "", content: "" };
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
const getURL = (id) => {
  if (id) {
    return `/api/posts/${id}`;
  } else {
    return "/api/posts";
  }
};
const Dashboard = () => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const {
    data: posts,
    mutate,
    error,
    isLoading,
  } = useSWR(`/api/posts?username=${session?.user?.name}`, fetcher);
  const [validationError, setValidationError] = useState({});
  const [targettedPost, setTargetPost] = useState({});
  const [formData, setFormData] = useState(INITIAL_POST_FIELD);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const username = session?.user?.name;

    if (!WEBSITE_REGEX.test(formData?.img)) {
      return setValidationError({ imgInvalid: "Input valid image address!!" });
    }

    const url = getURL(targettedPost?._id);

    try {
      const res = await fetch(url, {
        method: targettedPost?._id ? "PATCH" : "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, ...formData }),
      });
      if (res.status === 201 || res.status === 200) {
        mutate();
        setFormData(INITIAL_POST_FIELD);
      }

      if (res.status === 200) {
        setTargetPost({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        mutate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // find targetted post
  const handleEditablePost = async (id) => {
    const post = posts?.find((post) => post?._id === id);
    setTargetPost(post);
  };

  useEffect(() => {
    if (targettedPost?._id) {
      setFormData(targettedPost);
    }
  }, [targettedPost, setFormData]);

  if (status === "authenticated") {
    return (
      <div className="flex justify-center gap-16 py-20 max-w-[978px] mx-auto">
        <div className="w-1/2">
          {isLoading ? (
            "Loading..."
          ) : (
            <div>
              {posts?.map((post) => (
                <div
                  key={post?._id}
                  className="flex justify-between items-center border-b border-gray-300 py-4 last:border-none"
                >
                  <div className="flex gap-3 items-center ">
                    <Image
                      width="100"
                      height="150"
                      src={post?.img}
                      alt=""
                      className="rounded"
                    />
                    <h4
                      className="font-semibold truncate w-60"
                      title={post?.title}
                    >
                      {post?.title}
                    </h4>
                  </div>
                  <div className="space-x-3">
                    <button
                      onClick={() => handleEditablePost(post?._id)}
                      className="text-blue-600 font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post?._id)}
                      className="text-red-600 font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-2xl mb-5 font-bold">Create new post</h4>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData?.title}
              onChange={handleChange}
              className="bg-transparent p-2 rounded border border-gray-700 focus:outline-none"
              required
            />
            <input
              type="text"
              name="img"
              placeholder="Image URL"
              value={formData?.img}
              onChange={handleChange}
              className="bg-transparent p-2 rounded border border-gray-700 focus:outline-none"
              onFocus={() => setValidationError({})}
              required
            />
            {validationError?.imgInvalid && (
              <span className="block text-red-500">
                {validationError?.imgInvalid}
              </span>
            )}
            <input
              type="text"
              name="desc"
              placeholder="Description"
              value={formData?.desc}
              onChange={handleChange}
              className="bg-transparent p-2 rounded border border-gray-700 focus:outline-none"
              required
            />
            <textarea
              placeholder="Content"
              name="content"
              value={formData?.content}
              onChange={handleChange}
              className="bg-transparent p-2 rounded border border-gray-700 focus:outline-none"
              required
            ></textarea>
            <button className="border border-gray-600 p-2 bg-gray-800 text-white rounded">
              {targettedPost?._id ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;
