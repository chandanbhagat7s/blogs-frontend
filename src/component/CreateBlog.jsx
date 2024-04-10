import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { openAlert } from "../Redux/Slices/errorSlice";

import axios from "axios";
import BlogSubmitionhtmlForm from "./BlogSubmitionForm";

export default function CreateBlog() {
  const dispatch = useDispatch();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [information, setInformation] = useState({
    blogName: "",
    seenFrom: "",
    type: "",
    description: "",
    image: "",
  });
  console.log("INFORMATION", information);
  const options = [
    "",
    "Beauty",
    "Travel",
    "Lifestyle",
    "Personal",
    "Tech",
    "Health",
    "Fitness",
    "Wellness",
    "SaaS",
    "Business",
    "Education",
    "Food and Recipe ",
    "Love and Relationships",
    "Alternative topics",
    "Green living",
    "Music",
    "Automotive",
    "Marketing",
    "Internet services",
    "Finance",
    "Sports",
    "Entertainment",
    "Productivity",
    "Hobbies",
    "Parenting",
    "Pets",
    "Photography",
    "Agriculture",
    "others",
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    if (content.length <= 100) {
      return dispatch(
        openAlert({
          alertType: "error",
          alertMsg:
            "Increase the content of your blog so it would be valuable for others",
        })
      );
    }

    if (!information.blogName || !information.type) {
      if (!information.blogName) {
        return dispatch(
          openAlert({
            alertType: "error",
            alertMsg:
              "Increase the content of your blog so it would be valuable for others",
          })
        );
      } else {
        return dispatch(
          openAlert({
            alertType: "error",
            alertMsg:
              "Increase the content of your blog so it would be valuable for others",
          })
        );
      }
    }

    try {
      // validation
      let fd = new FormData();
      let obj = { ...information };
      Object.entries(obj).map((el) => {
        console.log("noe", el);
        fd.append(el[0], el[1]);
      });
      fd.append("content", content);

      const res = await axios.post("/api/v1/blogs/createBlog", fd, {
        withCredentials: true,
      });

      console.log(res);
    } catch (error) {
      dispatch(
        openAlert({
          alertType: "error",
          alertMsg: "wrong",
        })
      );
    }
  }

  return (
    <div className="mt-20 flex flex-col space-y-20  justify-center mb-20">
      <div className="text-blue-600 px-auto px-2 py-1 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-200 text-center py-5 flex justify-between">
        {" "}
        <div className="text-xl lg:text-3xl font-bold justify-self-center w-1/2">
          BLOG ........
        </div>
        <div className="w-1/2 text-blue-700 font-bold">
          Share knowledge elegantly with brief yet insightful blog entries.
        </div>
      </div>
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>

      <div className="text-blue-600 px-auto px-2 py-1 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-200 text-center py-5 ">
        <BlogSubmitionhtmlForm
          options={options}
          information={information}
          setInformation={setInformation}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="text-blue-600 px-auto px-2 py-1 text-2xl font-bold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-200 text-center py-5 ">
        {" "}
        HOW IT WILL SEEN TO VIEWERS
      </div>

      <div
        className="border border-1 border-black p-2"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
