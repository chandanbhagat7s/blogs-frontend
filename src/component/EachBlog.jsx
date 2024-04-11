import React, { useState } from "react";

import Fade from "@mui/material/Fade";

import Tooltip from "@mui/material/Tooltip";
import { FaRegComment } from "react-icons/fa6";
import { BiSolidHide } from "react-icons/bi";

import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";
import HideBlogDialog from "./HideBlogDialog";
import CommentsBlogDialog from "./CommentsBlogDialog";

export default function EachBlog({ data }) {
  const [tab, setTab] = useState("");
  const nevigate = useNavigate();

  const handleClose = () => {
    setTab("");
  };
  console.log("data", data);

  return (
    <div>
      {tab == "delete" && (
        <DeleteDialog handleClose={handleClose} data={data} />
      )}
      {tab == "hide" && (
        <HideBlogDialog handleClose={handleClose} data={data} />
      )}
      {tab == "comment" && (
        <CommentsBlogDialog handleClose={handleClose} data={data} />
      )}

      <div
        onClick={() =>
          nevigate("/reading", {
            state: data,
          })
        }
        className="flex px-3 py-5  rounded     mt-20  bg-gradient-to-b from-white via-blue-200  to-blue-300 hover:scale-105 drop-shadow-2xl w-[90%] mx-auto cursor-pointer hover:bg-blue-200"
      >
        <div className="w-1/3 ">
          <img src={data?.coverImage} alt="" className="p-2" />
        </div>
        <div className="p-2 flex flex-col">
          <div className="p-1 text-2xl font-bold">{data?.blogName}</div>
          <div className="p-1">{data?.description}</div>
        </div>
      </div>

      <div className=" rounded p-1 flex bg-blue-300 justify-around w-[80%] mx-auto ">
        <div className="font-bold">{data?.createdBy?.userName}</div>
        <div className=" ">{data?.dateAdded}</div>
      </div>
      <div className="mb-8 rounded p-1 flex bg-sky-700 justify-around w-[70%] mx-auto text-white">
        <Tooltip
          title="Delete The Blog"
          className="cursor-pointer hover:scale-125 hover:bg-sky-900 px-3 rounded "
        >
          <div
            className="textt-xl lg:text-3xl py-1 "
            onClick={() => setTab("delete")}
          >
            <MdOutlineDelete />
          </div>
        </Tooltip>
        <Tooltip
          className="cursor-pointer hover:scale-125 hover:bg-sky-900 px-3 rounded "
          title="View Comments on blog"
          onClick={() => setTab("comment")}
        >
          <div className="textt-xl lg:text-3xl  py-1">
            <FaRegComment />
          </div>
        </Tooltip>
        <Tooltip
          className="cursor-pointer hover:scale-125 hover:bg-sky-900 px-3 rounded "
          title="Hide the blog"
          onClick={() => setTab("hide")}
        >
          <div className="textt-xl lg:text-3xl  py-1">
            <BiSolidHide />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
