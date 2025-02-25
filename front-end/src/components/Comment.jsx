import React from "react";
import { ImageKit } from "./ImageKit";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-4 ">
        <ImageKit
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          width="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 Days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          voluptatem, quas at nemo mollitia fuga. At quaerat aperiam pariatur
          quam!
        </p>
      </div>
    </div>
  );
};

export default Comment;
