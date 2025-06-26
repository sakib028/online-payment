import React from "react";
import { Form, Input, Row, Col, Button, Divider } from "antd";
import FormItem from "../../ui/FormItem";
import { Link } from "react-router-dom";

export default function Registration() {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Here you can handle the form submission, e.g., send data to an API
  };
  return (
    <div className="min-h-screen bg-[#98A1BC] flex flex-col items-center justify-center p-4">
      <div className="w-[70%] bg-[#555879] p-8 rounded-lg shadow-lg">
        <div className="flex  items-center justify-between">
          <h1 className="text-2xl font-bold text-center mb-6 text-white">
            Registration
          </h1>
          <Link to="/Login">
            <h1 className="text-sm underline">Already a Member? Login</h1>
          </Link>
        </div>
        <Divider className="border border-[#433878]" />

        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            {" "}
            {/* Added gutter for spacing between columns */}
            <Col span={12}>
              {" "}
              {/* Each column takes half of the row */}
              <FormItem
                type="text"
                name="FirstName"
                label="First Name"
                message="Please enter your First Name"
              />
            </Col>
            <Col span={12}>
              <FormItem
                type="text"
                name="LastName"
                label="Last Name"
                message="Please enter your Last Name"
              />
            </Col>
            {/* Added gutter for spacing between columns */}
            <Col span={12}>
              {" "}
              {/* Each column takes half of the row */}
              <FormItem
                type="text"
                label="Email"
                name="email"
                message="Please enter your Email"
              />
            </Col>
            <Col span={12}>
              <FormItem
                type="Number"
                name="PhoneNumber"
                label="Phone Number"
                message="Please enter your phone number"
              />
            </Col>
            <Col span={12}>
              <FormItem
                type="Select"
                name="IdentificationType"
                label="Identification Type"
                message="Please enter your Identification"
              />
            </Col>
            <Col span={12}>
              <FormItem
                type="Number"
                name="IdentificationNumber"
                label="Identification Number"
                message="Please enter your Identification Number"
              />
            </Col>
            <Col span={16}>
              <FormItem
                type="textarea"
                name="Address"
                label="Address"
                message="Please enter your Address"
              />
            </Col>
            <Col span={12}>
              <FormItem
                type="password"
                name="Password"
                label="Password"
                message="Please enter your Password"
              />
            </Col>
            <Col span={12}>
              <FormItem
                type="password"
                name="ConfirmPassword"
                label="Confirm Password"
                message="Please enter your Confirm Password"
              />
            </Col>
          </Row>
          <div className="flex justify-end">
            <span className="flex  gap-4">
              <Button htmlType="reset">reset</Button>
              <Button type="primary" htmlType="submit">
                REGISTER
              </Button>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
}
