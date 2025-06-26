import React from "react";
import "antd/dist/reset.css";
import { Button } from "antd";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
