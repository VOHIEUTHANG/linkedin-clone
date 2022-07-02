import React from "react";
import "antd/dist/antd.css";
import { Tabs, Avatar, Input, Badge, Divider } from "antd";
import {
  HomeFilled,
  MessageFilled,
  BookFilled,
  NotificationFilled,
  CloudFilled,
  CaretDownOutlined,
  ContactsFilled,
} from "@ant-design/icons";
const logo = require("../assets/linkedin-logo.png");
const { Search } = Input;
const { TabPane } = Tabs;

const onSearch = (value: string) => console.log(value);
const navItemStyle = { fontSize: "22px", marginRight: 0 };

function Header() {
  return (
    <header className="header border-b bg-white border-gray-300 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <Avatar
              shape="square"
              className="inline-block"
              size={34}
              icon={<img src={logo} alt="linkedin-logo"></img>}
            />
            <Search
              placeholder="Search"
              onSearch={onSearch}
              size="middle"
              style={{ width: 200, marginLeft: 10 }}
            />
          </div>
          <div className="flex items-center">
            <Tabs defaultActiveKey="1" className="mb-0">
              <TabPane
                tab={
                  <span className="flex flex-col justify-center items-center">
                    <HomeFilled style={navItemStyle} />
                    <span>Home</span>
                  </span>
                }
                key="1"
              ></TabPane>
              <TabPane
                tab={
                  <span className="flex flex-col justify-center items-center">
                    <CloudFilled style={navItemStyle} />
                    My Network
                  </span>
                }
                key="2"
              ></TabPane>
              <TabPane
                tab={
                  <span className="flex flex-col justify-center items-center">
                    <BookFilled style={navItemStyle} />
                    Jobs
                  </span>
                }
                key="3"
              ></TabPane>
              <TabPane
                tab={
                  <span className="flex flex-col justify-center items-center">
                    <MessageFilled style={navItemStyle} />
                    Message
                  </span>
                }
                key="4"
              ></TabPane>
              <TabPane
                tab={
                  <span className="flex flex-col justify-center items-center">
                    <Badge count={2}>
                      <NotificationFilled style={navItemStyle} />
                    </Badge>
                    Notifications
                  </span>
                }
                key="5"
              ></TabPane>
            </Tabs>
            <div className="inline-block ml-[32px] cursor-pointer">
              <Avatar
                className="inline-block"
                size={30}
                icon={<img src={logo} alt="linkedin-logo"></img>}
              />
              <div className="flex items-center">
                Me
                <CaretDownOutlined />
              </div>
            </div>
            <Divider
              type="vertical"
              style={{ height: "90%", margin: "0 28px" }}
            />
            <div className="cursor-pointer flex flex-col items-center">
              <ContactsFilled className="text-2xl" />
              <div className="flex items-center">
                Work
                <CaretDownOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
