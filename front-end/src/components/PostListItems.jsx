import React from "react";
import { ImageKit } from "./ImageKit";
import { Link } from "react-router-dom";

const PostListItems = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* images */}
      <div className="md:hidden xl:block xl:w-1/3">
        <ImageKit
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          width="735"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/test`} className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          nostrum!
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written By</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 Days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          aspernatur vero modi reiciendis quaerat facilis, aperiam debitis nihil
          sint architecto.
        </p>
        <Link to={`/test`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItems;
