import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImageKit } from "./ImageKit";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      console.log(token);
    });
  }, []);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <ImageKit src="/logo.png" width={32} height={32} alt="logo" />
        <span>Blog App</span>
      </Link>
      {/* mobile menu */}
      <div className="md:hidden">
        {/*  mobile button */}
        <div className="cursor-pointer">
          {open ? (
            <IoClose onClick={() => setOpen(!open)} className="text-2xl" />
          ) : (
            <RxHamburgerMenu
              onClick={() => setOpen(!open)}
              className="text-2xl"
            />
          )}
          {/* mobile Link */}
          <div
            className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 transition-all ease-in-out  ${
              open ? "right-0" : "-right-full"
            } `}
          >
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <Link to="">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden  md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
