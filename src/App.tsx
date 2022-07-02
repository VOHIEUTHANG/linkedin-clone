import React from "react";
import "./App.css";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app bg-gray-100">
      <Header />
      <div className="app__content my-6 min-h-screen">
        <div className="container">
          <Row gutter={20}>
            <Col span={6} className="rounded-2xl">
              <Sidebar />
            </Col>
            <Col span={10}>
              <div className="wrapper"></div>
            </Col>
            <Col span={8}>
              <div className="wrapper"></div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
