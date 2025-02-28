import React from "react";
import { ImageKit } from "./ImageKit";
import { Link } from "react-router-dom";
import { format } from "timeago.js";



const PostListItems = ({ post }) => {
  

  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-8">
      {/* images */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <ImageKit
            src="postImg.jpeg"
            className="rounded-2xl object-cover"
            width="735"
          />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written By</span>
          <Link className="text-blue-800">{}</Link>
          <span>on</span>
          <Link className="text-blue-800">{post.user.username}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
        <Link to={`${post.slug}`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItems;
