import { FormOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { collection, addDoc } from "firebase/firestore";
import { Modal, Button, Avatar, Input } from "antd";
import { success, error } from "./Toast";
import { db } from "../firebase/db";
import React, { useState } from "react";

const { TextArea } = Input;

export default function CreatePost({
  currentUserAvatar,
  userName,
  setRefresh,
}: {
  currentUserAvatar: string;
  userName: string;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [postContent, setPostContent] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handleOk = () => {
    const currentTime = new Date();
    setLoading(true);
    (async () => {
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          userAvatar: currentUserAvatar,
          userName: userName,
          createTime: `${currentTime.getDate()}-${
            currentTime.getMonth() + 1
          }-${currentTime.getFullYear()}`,
          content: postContent,
        });
        console.log("Document written with ID: ", docRef.id);
        setLoading(false);
        success({ message: "Create post successfully" });
        setPostContent("");
        setModalVisible(false);
        setRefresh((r) => !r);
      } catch (e) {
        console.error("Error adding document: ", e);
        setLoading(false);
        setModalVisible(false);
        error({ message: "Error adding document !" });
      }
    })();
  };

  return (
    <div className="wrapper">
      <div
        onClick={() => setModalVisible(true)}
        className="border-[1px] rounded-3xl p-3 flex items-center hover:cursor-pointer hover:bg-gray-100 transition"
      >
        <FormOutlined style={{ fontSize: "1.2rem", marginLeft: 10 }} />
      </div>
      <Modal
        className="rounded-xl overflow-hidden pb-0"
        title="Create a Post"
        style={{ top: 100 }}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button
            className="rounded-lg overflow-hidden"
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Post
          </Button>,
        ]}
      >
        <div>
          <Avatar
            size={50}
            icon={
              <img style={{ objectFit: "cover" }} src={currentUserAvatar} />
            }
          />
          <span className="ml-2 font-semibold text-base text-gray-700">
            {userName}
          </span>
        </div>
        <div className="mt-4">
          <TextArea
            showCount
            placeholder="What do you want to talk about?"
            maxLength={100}
            style={{ height: 120 }}
            onChange={onChange}
            value={postContent}
          />
        </div>
      </Modal>
      <div className="flex mt-4 justify-between">
        <div className="rounded-md flex py-3 px-2 hover:cursor-pointer hover:bg-gray-100 transition items-center justify-center">
          <i className="fa-solid fa-image text-blue-500 text-xl"></i>
          <span className="ml-2 text-base font-medium text-gray-500">Post</span>
        </div>
        <div className="rounded-md flex py-3 px-2 hover:cursor-pointer hover:bg-gray-100 transition items-center justify-center">
          <i className="fa-brands fa-youtube text-green-500 text-xl"></i>
          <span className="ml-2 text-base font-medium text-gray-500">
            Video
          </span>
        </div>
        <div className="rounded-md flex py-3 px-2 hover:cursor-pointer hover:bg-gray-100 transition items-center justify-center">
          <i className="fa-solid fa-calendar-week text-orange-500 text-xl"></i>
          <span className="ml-2 text-base font-medium text-gray-500">
            Event
          </span>
        </div>
        <div className="rounded-md flex py-3 px-2 hover:cursor-pointer hover:bg-gray-100 transition items-center justify-center">
          <i className="fa-solid fa-file-pen text-red-400 text-xl"></i>
          <span className="ml-2 text-base font-medium text-gray-500">
            Write article
          </span>
        </div>
      </div>
    </div>
  );
}
