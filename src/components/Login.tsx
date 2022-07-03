import { Button, Checkbox, Form, Input } from "antd";
import { login } from "features/counter/userSlice";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { UserState } from "../types/user";
const logo = require("../assets/linkedin-logo.png");
const Login = () => {
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    dispatch(login(values as UserState));
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
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name={"name"}
            label="Name"
            rules={[{ required: true, message: "Please input your fullname!" }]}
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
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className="ml-20 mt-2" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
