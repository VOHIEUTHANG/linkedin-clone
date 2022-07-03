import React from "react";
import "./App.scss";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "components/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "features/counter/userSlice";
import Login from "components/Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div>
      <div className="app bg-gray-100">
        <div className="app__content my-6 min-h-screen">
          <Header />
          {!!user ? (
            <Login />
          ) : (
            <div className="container">
              <Row gutter={20}>
                <Col span={5} className="rounded-2xl">
                  <Sidebar />
                </Col>
                <Col span={12}>
                  <Feed />
                </Col>
                <Col span={7}>
                  <div className="wrapper"></div>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
