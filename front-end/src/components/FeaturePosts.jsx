import React from "react";
import { ImageKit } from "./ImageKit";
import { Link } from "react-router-dom";

const FeaturePosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first post */}
      <div className="w-full lg:w-1/2 flex-col gap-4">
        {/* image */}
        <ImageKit
          src="/featured1.jpeg"
          alt="post1"
          className={`rounded-3xl object-cover`}
          width="895"
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 Days ago</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl
         font-semibold lg:font-bold"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          aliquid.
        </Link>
      </div>
      {/* others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="flex justify-between h-1/3 gap-4">
          <div className="w-1/3 aspect-video ">
            <ImageKit
              src="/featured2.jpeg"
              alt="post2"
              className="rounded-3xl object-cover w-full h-full"
              width="298"
            />
          </div>
          {/* detail and title */}
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Development</Link>
              <span className="text-gray-500">3 Days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              quos.
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="flex justify-between h-1/3 gap-4">
          <div className="w-1/3 aspect-video ">
            <ImageKit
              src="/featured3.jpeg"
              alt="post2"
              className="rounded-3xl object-cover w-full h-full"
              width="298"
            />
          </div>
          {/* detail and title */}
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Development</Link>
              <span className="text-gray-500">3 Days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              quos.
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="flex justify-between h-1/3 gap-4">
          <div className="w-1/3 aspect-video ">
            <ImageKit
              src="/featured4.jpeg"
              alt="post2"
              className="rounded-3xl object-cover w-full h-full"
              width="298"
            />
          </div>
          {/* detail and title */}
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Development</Link>
              <span className="text-gray-500">3 Days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              quos.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePosts;
