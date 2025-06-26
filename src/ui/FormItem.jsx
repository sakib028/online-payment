import React from "react";
import { Form, Input, Select } from "antd";

export default function FormItem({ type, label, message, name }) {
  if (type == "Select") {
    return (
      <Form.Item
        name={name}
        label={<span className="text-white">{name}</span>}
        rules={[{ required: true, message: { message } }]}
      >
        <Select>
          <Select.Option value="Passport">Passport</Select.Option>
          <Select.Option value="National ID">National ID</Select.Option>
          <Select.Option value="Driving License">Driving License</Select.Option>
          <Select.Option value="Voter ID">Social Card</Select.Option>
        </Select>
      </Form.Item>
    );
  }
  if (type == "textarea") {
    return (
      <Form.Item name={name} label={<span className="text-white">{name}</span>}>
        <textarea
          type="text"
          className=" w-full outline-none rounded-2xl bg-amber-50"
        />
      </Form.Item>
    );
  }
  return (
    <Form.Item
      name={name}
      label={<span className="text-white">{name}</span>}
      rules={[{ required: true, message: { message } }]}
    >
      <Input placeholder={label} type={type} className="outline-none py-2" />
    </Form.Item>
  );
}
