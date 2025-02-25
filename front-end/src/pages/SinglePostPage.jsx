import React from "react";
import { ImageKit } from "../components/ImageKit";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comment from "../components/Comment";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div
      className="flex flex-col gap-8
  "
    >
      {/* details  */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
            illum!
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written By</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 Days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            facere officiis esse excepturi odit repellat ratione, nam ullam iste
            quidem.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <ImageKit src="postImg.jpeg" width="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content  */}
      <div className="flex flex-col md:flex-row gap-12 ">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            quis unde? Maiores dignissimos, dolore impedit tenetur esse sint
            eius perferendis beatae voluptas iste nesciunt veritatis fugit nihil
            libero quaerat suscipit qui molestias totam, inventore ipsum.
            Eveniet iste ad impedit, laudantium doloremque expedita enim sint,
            suscipit possimus officia voluptatibus, reprehenderit porro.
          </p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            quos cum laborum dignissimos praesentium, quidem blanditiis magni.
            Sapiente vitae recusandae odit ipsum quas, ipsa, dolor dolores quis
            dolorum possimus blanditiis accusamus eveniet delectus. Tempore
            debitis itaque dolore! Sequi, expedita perferendis molestiae, rerum
            aut quidem necessitatibus alias tempora, itaque eligendi magni
            suscipit illum debitis unde! Illo magni quod libero natus sint?
          </p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            quos cum laborum dignissimos praesentium, quidem blanditiis magni.
            Sapiente vitae recusandae odit ipsum quas, ipsa, dolor dolores quis
            dolorum possimus blanditiis accusamus eveniet delectus. Tempore
            debitis itaque dolore! Sequi, expedita perferendis molestiae, rerum
            aut quidem necessitatibus alias tempora, itaque eligendi magni
            suscipit illum debitis unde! Illo magni quod libero natus sint?
          </p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            quos cum laborum dignissimos praesentium, quidem blanditiis magni.
            Sapiente vitae recusandae odit ipsum quas, ipsa, dolor dolores quis
            dolorum possimus blanditiis accusamus eveniet delectus. Tempore
            debitis itaque dolore! Sequi, expedita perferendis molestiae, rerum
            aut quidem necessitatibus alias tempora, itaque eligendi magni
            suscipit illum debitis unde! Illo magni quod libero natus sint?
          </p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            quos cum laborum dignissimos praesentium, quidem blanditiis magni.
            Sapiente vitae recusandae odit ipsum quas, ipsa, dolor dolores quis
            dolorum possimus blanditiis accusamus eveniet delectus. Tempore
            debitis itaque dolore! Sequi, expedita perferendis molestiae, rerum
            aut quidem necessitatibus alias tempora, itaque eligendi magni
            suscipit illum debitis unde! Illo magni quod libero natus sint?
          </p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            quos cum laborum dignissimos praesentium, quidem blanditiis magni.
            Sapiente vitae recusandae odit ipsum quas, ipsa, dolor dolores quis
            dolorum possimus blanditiis accusamus eveniet delectus. Tempore
            debitis itaque dolore! Sequi, expedita perferendis molestiae, rerum
            aut quidem necessitatibus alias tempora, itaque eligendi magni
            suscipit illum debitis unde! Illo magni quod libero natus sint?
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <ImageKit
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                width="48"
                height="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
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
