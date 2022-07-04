import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
  const auth = getAuth();
  const currentUser = auth.currentUser;
  console.log(currentUser);
  return (
    <div>
      <div className="app bg-gray-100">
        <div className="app__content my-6 min-h-screen">
          <Header />
          {!user.email ? (
            <Login />
          ) : (
            <div className="container my-6">
              <Row gutter={20}>
                <Col span={5} className="rounded-2xl">
                  <Sidebar
                    name={currentUser?.displayName || ""}
                    photoURL={currentUser?.photoURL || ""}
                  />
                </Col>
                <Col span={12}>
                  <Feed
                    name={currentUser?.displayName || ""}
                    photoURL={currentUser?.photoURL || ""}
                  />
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
