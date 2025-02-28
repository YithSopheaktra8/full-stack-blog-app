import React from "react";
import { ImageKit } from "../components/ImageKit";
import { Link, useParams } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comment from "../components/Comment";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";
import parse from "html-react-parser";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { data, isPending, isError } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  console.log(data);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (!data) {
    return <div>Post not found</div>;
  }

  return (
    <div
      className="flex flex-col gap-8
  "
    >
      {/* details  */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written By</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
        {data.img && (
          <div className="hidden lg:block w-2/5">
            <img
              src={`${
                import.meta.env.VITE_PREVIEW_IMAGEKIT_URL_ENDPOINT + data.img
              }`}
             
              className="rounded-2xl w-full h-64 object-cover" 
            />
          </div>
        )}
      </div>
      {/* content  */}
      <div className="flex flex-col md:flex-row gap-12 ">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data.user.img && (
                <img
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <Link className="text-blue-800">{data.user.username}</Link>
            </div>
            <div className="flex gap-2">
              <Link>
                <ImageKit src="facebook.svg" />
              </Link>
              <Link>
                <ImageKit src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
