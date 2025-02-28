import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";
import parse from "html-react-parser";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ "code-block": true }],
    ["clean"],
  ],
  syntax: true,
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "code-block",
];

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [content, setContent] = useState("");
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [cover, setCover] = useState("");
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  useEffect(() => {
    image && setContent((prev) => prev + `<p><image src="${image.url}"/></p>`);
  }, [image]);

  useEffect(() => {
    video &&
      setContent(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post created successfully");
      // navigate(`/${res.data.slug}`);
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
      img: cover.filePath || "",
      title: formData.get("title"), // get the title from the form data with the name title
      desc: formData.get("desc"),
      category: formData.get("category"),
      content,
    };

    mutation.mutate(newPost);
  };

  return (
    <div className=" flex gap-8 h-auto">
      <div className="flex flex-col gap-6 p-6 bg-gray-500/10 rounded-xl w-full">
        <h1 className="text-xl font-light">Create a New Post</h1>
        <form
          className="flex flex-col gap-6 flex-1 mb-6"
          onSubmit={handleSubmit}
        >
          <Upload setProgress={setProgress} setData={setCover} type="image">
            <button className="p-2 w-max shadow-md rounded-xl text-sm text-gray-500 bg-white">
              Add a cover image
            </button>
          </Upload>
          {cover && (
            <img
              src={cover.url}
              alt="cover"
              className="rounded-xl object-cover w-64 "
            />
          )}
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
          <div className="flex flex-1 ">
            <div className="flex flex-col gap-2 mr-2">
              <Upload setProgress={setProgress} setData={setImage} type="image">
                Image
              </Upload>
              <Upload setProgress={setProgress} setData={setVideo} type="video">
                Video
              </Upload>
            </div>
            <ReactQuill
              readOnly={0 < progress && progress < 100}
              value={content}
              onChange={setContent}
              className="flex-1 rounded-xl bg-white shadow-md"
              modules={modules}
              formats={formats}
            />
          </div>
          <button
            disabled={mutation.isPending || (0 < progress && progress < 100)}
            className="bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium rounded-xl mt-4 p-2 w-36"
          >
            {mutation.isPending ? "Loading..." : "Send"}
          </button>
          {"progress: " + progress}
          {mutation.isError && (
            <div className="text-red-500">
              An error occurred: {mutation.error.message}
            </div>
          )}
        </form>
      </div>
      <div className="bg-gray-500/10 rounded-xl w-full p-6 ">
        <h1 className="text-xl font-light">Preview Content</h1>
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default WritePage;
