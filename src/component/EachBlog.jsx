import React from "react";

export default function EachBlog({ data }) {
  return (
    <>
      <div className="flex px-3 py-5  rounded     mt-20  bg-gradient-to-b from-white via-blue-200  to-blue-300 hover:scale-105 drop-shadow-2xl w-[90%] mx-auto cursor-pointer hover:bg-blue-200">
        <div className="w-1/3 ">
          <img src={data?.coverImage} alt="" className="p-2" />
        </div>
        <div className="p-2 flex flex-col">
          <div className="p-1 text-2xl font-bold">{data?.blogName}</div>
          <div className="p-1">{data?.description}</div>
        </div>
      </div>
      <div className=" rounded p-1 flex bg-blue-300 justify-around w-[80%] mx-auto mb-8">
        <div className=" ">{data?.createdBy?.userName}</div>
        <div className=" ">{data?.dateAdded}</div>
      </div>
    </>
  );
}
