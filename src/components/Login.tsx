import { Button, Checkbox, Form, Input } from "antd";
import { login } from "features/counter/userSlice";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { UserState } from "../types/user";
import { success, error } from "./Toast";
const logo = require("../assets/linkedin-logo.png");
const Login = () => {
  const [signIn, setSignIn] = useState(false);

  const dispatch = useDispatch();

  const onSignInFinish = (values: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("login successfully!");
        console.log("🚀 ~ file: Login.tsx ~ line 24 ~ .then ~ user", user);
        dispatch(login(values as UserState));
        success({ message: "Login successfully" });
      })
      .catch((err) => {
        const errorCode = err.code;
        error({ message: errorCode, title: "Wrong Password!" });
      });
  };
  const onSignUpFinish = (values: any) => {
    const auth = getAuth();
    console.log(values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential.user);
        success({ message: "sign up successfully" });
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: values.name,
              photoURL: values.avatar,
            })
              .then(() => {
                console.log("Updaate usr profile successfuly! ");
                dispatch(login(values as UserState));
              })
              .catch((error) => {});
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        error({ message: err.message });
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container flex items-center mt-40">
      <div className="wrapper py-10 w-[600px] pr-20 max-w-[600px] mx-auto">
        <div className="flex justify-center mb-10 items-center">
          <img className="ml-14 mr-2" width={30} src={logo} alt="" />
          <span className="text-xl font-semibold text-blue-500">Linkedin</span>
        </div>
        {!!signIn ? (
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onSignUpFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <Form.Item
              name={"name"}
              label="Name"
              rules={[
                { required: true, message: "Please input your fullname!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"email"}
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={"avatar"} label="Profile Picture" rules={[{}]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className="ml-20 mt-2" type="primary" htmlType="submit">
                Sign up
              </Button>
              <Button
                onClick={() => setSignIn(!signIn)}
                className="ml-20 mt-2"
                type="text"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onSignInFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <Form.Item
              name={"email"}
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className="ml-20 mt-2" type="primary" htmlType="submit">
                Login
              </Button>
              <Button
                onClick={() => setSignIn(!signIn)}
                className="ml-20 mt-2"
                type="text"
              >
                Sign up
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Login;
