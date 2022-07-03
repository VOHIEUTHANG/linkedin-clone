import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { getPosts } from "../firebase/db";
import { PostType } from "../types/post";
const userAvatar = require("../assets/avatar.jpg");
const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([] as PostType[]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts as Array<PostType>);
    });
  }, [refresh]);
  return (
    <div>
      <CreatePost
        setRefresh={setRefresh}
        currentUserAvatar={userAvatar}
        userName="Thắng Võ"
      />
      <div className="wrapper mt-4">
        {posts.map((post, index) => {
          return (
            <Post
              key={index}
              authorAvatar={post.userAvatar}
              authorName={post.userName}
              createTime={post.createTime}
              title={post.content}
              authorFollowerCount={Math.floor(Math.random() * 100) + 1}
              imgContent={""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
