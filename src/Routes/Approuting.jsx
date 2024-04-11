import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainout from "../Layout/Mainout";
import Landing from "../component/Landing";
import Signin from "../component/Signin";
import BlogtemplatesOuter from "../component/BlogtemplatesOuter";
import CreateBlog from "../component/CreateBlog";
import ReadBlogs from "../component/ReadBlogs";
import DisplayBlogs from "../component/DisplayBlogs";
// import Signin from "../component/Signin";

export default function Approuting() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Mainout>
              <Landing />
            </Mainout>
          }
        ></Route>

        <Route
          path="/signin"
          element={
            <Mainout>
              <Signin />
            </Mainout>
          }
        ></Route>

        <Route
          path="/templates"
          element={
            <Mainout>
              <BlogtemplatesOuter />
            </Mainout>
          }
        ></Route>
        <Route
          path="/createBlog"
          element={
            <Mainout>
              <CreateBlog />
            </Mainout>
          }
        ></Route>
        <Route
          path="/readBlogs"
          element={
            <Mainout>
              <ReadBlogs />
            </Mainout>
          }
        ></Route>
        <Route
          path="/reading"
          element={
            <Mainout>
              <DisplayBlogs />
            </Mainout>
          }
        ></Route>
      </Routes>
    </>
  );
}
