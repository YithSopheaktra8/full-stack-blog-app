import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [content, setContent] = useState("");
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (!isSignedIn) {
    return <div className="">Please sign in to write a post.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPost = {
      title: formData.get("title"), // get the title from the form data with the name title
      desc: formData.get("desc"),
      category: formData.get("category"),
      content,
    };

    mutation.mutate(newPost);

  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6" onSubmit={handleSubmit}>
        <button className="p-2 w-max shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          name="title"
          type="text"
          placeholder="Title of the post"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className="flex items-center gap-4">
          <label className="text-sm">Choose a category</label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md focus:outline-none"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="seo">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md focus:outline-none "
          name="desc"
          id=""
          placeholder="A Short Description"
        ></textarea>
        <ReactQuill
          value={content}
          onChange={setContent}
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default WritePage;
