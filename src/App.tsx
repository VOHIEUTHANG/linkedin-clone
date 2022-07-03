import React from "react";
import "./App.scss";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "components/Feed";

function App() {
  return (
    <div className="app bg-gray-100">
      <Header />
      <div className="app__content my-6 min-h-screen">
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
      </div>
    </div>
  );
}

export default App;
