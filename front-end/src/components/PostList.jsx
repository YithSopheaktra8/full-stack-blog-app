import React from "react";
import PostListItems from "./PostListItems";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  return res.data;
};

const PostList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

  console.log(data);

  return (
    <div className="flex flex-col gap-12 mb-8">
      <PostListItems />
      <PostListItems />
      <PostListItems />
      <PostListItems />
      <PostListItems />
      <PostListItems />
      <PostListItems />
    </div>
  );
};

export default PostList;
