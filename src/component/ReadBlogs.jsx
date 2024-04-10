import axios from "axios";
import React, { useEffect, useState } from "react";
import EachBlog from "./EachBlog";

export default function ReadBlogs() {
  const [data, setData] = useState([]);
  async function getAllTheBlog() {
    try {
      const datares = await axios.get("/api/v1/blogs/readAllblogs", {
        withCredentials: true,
      });
      if (datares.data.status) {
        console.log(datares);
        setData([...datares?.data?.blogs]);
      }
    } catch (error) {
      return error.response.data;
    }
  }

  useEffect(() => {
    getAllTheBlog();
  }, []);

  return (
    <>
      {data.length > 0 && (
        <>
          {data.map((el) => {
            return <EachBlog data={el} key={el} />;
          })}
        </>
      )}
    </>
  );
}
