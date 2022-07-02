import React from "react";
import { Avatar } from "antd";
const backgroud = require("assets/bg.jpg");
const avatar = require("assets/avatar.jpg");
const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="rounded-xl overflow-hidden bg-white">
        <div className="relative  mb-10">
          <img
            src={backgroud}
            className="w-full object-cover max-h-[60px]"
            alt=""
          />
          <Avatar
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              border: "2px solid white",
            }}
            size={64}
            icon={<img src={avatar} />}
          />
        </div>
        <div className="p-2">
          <div className="text-center text-lg text-gray-800">Võ Hiếu Thắng</div>
          <div className="text-center text-gray-500">
            Student at Học Viện Công Nghệ Bưu Chính Viễn Thông
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
