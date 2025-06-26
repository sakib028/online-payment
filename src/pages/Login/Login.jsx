import React from "react";
import { Form, Button, Divider } from "antd";
import FormItem from "../../ui/FormItem";
import { Link } from "react-router-dom";

export default function Login() {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Handle form submission (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-[#98A1BC] flex flex-col items-center justify-center p-4">
      <div className="w-[40%] bg-[#555879] p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">
          Login
        </h1>

        <Divider className="border border-[#433878]" />

        <Form layout="vertical" onFinish={onFinish}>
          {/* Email Field (Vertical) */}
          <FormItem
            type="email"
            name="Email"
            label="Email"
            message="Please enter your Email"
          />

          {/* Password Field (Vertical) */}
          <FormItem
            type="password"
            name="Password"
            label="Password"
            message="Please enter your Password"
          />

          {/* Buttons (Reset & Login) */}
          <div className="flex items-center justify-center">
            <span className="flex gap-4">
              <Button type="primary" htmlType="submit">
                LOGIN
              </Button>
            </span>
          </div>
          <Link to={"/Registration"}>
            <h1 className="text-sm  underline">
              Don't have an account? Register
            </h1>
          </Link>
        </Form>
      </div>
    </div>
  );
}
