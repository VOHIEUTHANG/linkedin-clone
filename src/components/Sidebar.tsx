import React from "react";
import { Avatar, Divider, Menu } from "antd";
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
        <Divider style={{ margin: "10px 0" }} />
        <div className="px-4 pb-4 ">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Who visited you</span>
            <span className="text-blue-600 font-bold">3,232</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 ">View on post</span>
            <span className="text-blue-600 font-bold">1,232</span>
          </div>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden bg-white py-3 mt-4">
        <h4 className="px-3 pt-3"> Recent</h4>
        <ul>
          <li className="p-3 cursor-pointer hover:bg-gray-100 hover:text-blue-500 transition">
            # ReactJS
          </li>
          <li className="p-3 cursor-pointer hover:bg-gray-100 hover:text-blue-500 transition">
            # Javascript
          </li>
          <li className="p-3 cursor-pointer hover:bg-gray-100 hover:text-blue-500 transition">
            # Boostrap
          </li>
          <li className="p-3 cursor-pointer hover:bg-gray-100 hover:text-blue-500 transition">
            # Typescript
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
