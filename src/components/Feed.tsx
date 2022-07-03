import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
const userAvatar = require("../assets/avatar.jpg");
const Feed = () => {
  return (
    <div>
      <CreatePost currentUserAvatar={userAvatar} userName="Thắng Võ" />
      <div className="wrapper mt-4">
        <Post
          authorAvatar="https://images.wallpaperscraft.com/image/single/ocean_beach_aerial_view_134429_1280x720.jpg"
          authorName="Devo"
          createTime="7-2-2022"
          title="Hello world!"
          authorFollowerCount={30}
          imgContent="https://images.wallpaperscraft.com/image/single/landscape_mountains_sun_140434_1280x720.jpg"
        />
      </div>
    </div>
  );
};

export default Feed;
