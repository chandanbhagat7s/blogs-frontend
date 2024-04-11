import React from "react";

import Tooltip from "@mui/material/Tooltip";
import { FcAcceptDatabase } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDelete } from "react-icons/md";

import axios from "axios";

export default function Comment({ data, options, blogID }) {
  console.log("DATA CAME INOT BOX", blogID);
  async function handleDelete(data) {
    console.log("DATA CAME INOT for del", data);
    try {
      const datares = await axios.post("/api/v1/blogs/deleteComment", data, {
        withCredentials: true,
      });
      console.log("res is ", datares);
      // return datares;
    } catch (error) {
      console.log(error);
      // return error.response.data;
    }
  }
  async function handleAccept(data) {
    try {
      const datares = await axios.post("/api/v1/blogs/verifyComment", data, {
        withCredentials: true,
      });
      console.log("res is ", datares);
      // return datares;
    } catch (error) {
      console.log(error);
      // return error.response.data;
    }
  }

  console.log(data);
  return (
    <>
      <div className="p-2 w-2/2 lg:w-3/4 mx-auto flex-col border-1 border border-blue-100 rounded bg-blue-200">
        <div className="p-1 text-xl text-blue-700 font-bold flex items-center bg-white mb-2 rounded-full ">
          <div>
            <CgProfile className="text-black text-2xl lg:text-3xl" />{" "}
          </div>
          <div className="p-2 text-sm">{data?.byUser.toUpperCase() || ""}</div>
        </div>
        <div className="px-3 py-2 bg-blue-100 rounded ">{data?.comment}</div>

        {options == true && (
          <>
            <div className="p-1 flex justify-around mt-4 text-2xl lg:text-3xl">
              <button
                className="hover:bg-red-200   text-red-500 px-3 py-1 rounded-full hover:scale-125"
                onClick={() =>
                  handleDelete({
                    byUser: data?.byUser,
                    comment: data?.comment,
                    id: blogID,
                  })
                }
              >
                <MdOutlineDelete />
              </button>
              <button
                onClick={() =>
                  handleAccept({
                    byUser: data?.byUser,
                    comment: data?.comment,
                    id: blogID,
                  })
                }
                className="hover:bg-green-200  px-3 py-1 text-green-500 rounded-full hover:scale-125"
              >
                <FcAcceptDatabase />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
