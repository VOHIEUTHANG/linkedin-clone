import { Button, Avatar, Divider } from "antd";

export default function Post({
  authorAvatar,
  authorName,
  authorFollowerCount,
  createTime,
  title,
  imgContent,
}: {
  authorAvatar: string;
  authorName: string;
  authorFollowerCount: number;
  createTime: string;
  title: string;
  imgContent: string;
}) {
  return (
    <>
      <div className="post mb-8">
        <div className="post__header">
          <div className="flex items-center justify-start">
            <Avatar
              size={50}
              icon={
                <img className="rounded-full object-cover" src={authorAvatar} />
              }
            />
            <div className="ml-2 ">
              <div className="text-lg text-blue-600 font-semibold">
                {authorName}
              </div>
              <div className="leading-none text-gray-400 ">
                {authorFollowerCount} Follower
              </div>
              <div className="leading-5 text-gray-400 ">{createTime}</div>
            </div>
          </div>
        </div>
        <div className="post_body">
          <p>{title}</p>
          <div>
            <img className="max-w-full" src={imgContent} alt="" />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
