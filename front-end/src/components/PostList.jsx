import React from "react";
import PostListItems from "./PostListItems";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios, { all } from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: {
      page: pageParam,
    },
  });
  return res.data;
};

const PostList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  // make all posts into one array
  const allPosts = data?.pages?.flatMap((page) => page.posts || []) || [];

  

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<h4>Loading more post...</h4>}
      endMessage={
        <p>
          <b>All Post loaded</b>
        </p>
      }
    >
      {allPosts?.map((post) => (
        <PostListItems key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
