import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { openAlert } from "../Redux/Slices/errorSlice";
import axios from "axios";
import Comment from "./Comment";

export default function DisplayBlogs() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    name: "",
    comment: "",
  });

  const { state } = useLocation();
  console.log("CONTENT SSIS ", state);

  function handleOnchange(e) {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
    });
  }

  async function handleCommentSubmition(id) {
    if (!inputData.name || !inputData.comment) {
      return dispatch(
        openAlert({
          alertType: "error",
          alertMsg: "please fill the name and comment to post the comment",
        })
      );
    }

    try {
      const data = {
        byUser: inputData.name,
        comment: inputData.comment,
        id,
      };
      const datares = await axios.post("/api/v1/blogs/uploadComment", data, {
        withCredentials: true,
      });
      console.log("res is ", datares);
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }

  useEffect(() => {
    console.log(inputData);
  });

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between px-2 py-3">
        <div className="p-2 mt-5 mb-8 font-bold w-2/2 lg:w-3/4">
          Posted By :{" "}
          <span className="text-2xl font-extrabold text-blue-600 ">
            {" "}
            {state?.createdBy?.userName.toUpperCase()}
          </span>
          <br />
          on <span className="text-gray-500"> {state.dateAdded} </span>
        </div>
        <div className=" w-2/2 lg:w-1/4 p-1">
          <img src={state.coverImage} alt="image" className="rounded w-1/2 " />
        </div>
      </div>

      <div
        className="border border-1 border-black p-2"
        dangerouslySetInnerHTML={{ __html: state?.content }}
      />

      <div className="px-3 py-8 flex flex-col">
        <div className="p-2 text-2xl font-bold mt-10 mb-5">
          Comment's on{" "}
          <span className="text-2xl lg:text-3xl text-blue-600">
            {state?.blogName}
          </span>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 ">
          <Comment />
          <Comment />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-2 text-2xl font-bold pt-5 text-blue-500">
          Comment Now ....
        </div>
        <div className="flex flex-col lg:flex-row space-x-2 justify-around px-5 py-3 border border-1 border-blue-800 ">
          <div className="p-2 w-2/2 lg:w-1/2 my-auto">
            <form className="flex flex-col space-y-3 ">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                className="p-2 border border-1 border-black rounded"
                onChange={handleOnchange}
              />
              <input
                type="text"
                name="comment"
                placeholder="Enter Your thoughts/issue"
                className="p-2 border border-2 border-black rounded "
                onChange={handleOnchange}
              />
              <button
                className="bg-blue-900 text-white rounded-full text-center px-5 py-3"
                onClick={(e) => {
                  e.preventDefault();

                  handleCommentSubmition(state._id);
                }}
              >
                Post a comment{" "}
              </button>
            </form>
          </div>
          <div className="p-2 w-2/2 md:w-2/2 lg:w-1/2 flex justify-center align-items-center">
            <img
              src="https://martech.org/wp-content/uploads/2016/04/commenting_ss_1920.png"
              alt="image"
              className="w-2/2 md:w-1/2 rounded  "
            />
          </div>
        </div>
      </div>
    </>
  );
}
