import React from "react";

export default function Landing() {
  return (
    <>
      <div
        className={`pt-8 lg:pt-32 pb-20 bg-gradient-to-r from-blue-50 via-blue-200 to-blue-50 shadow-lg shadow-blue  `}
      >
        <div className="flex lg:px-10 lg:py-8 justify-around flex-col lg:flex-row">
          <div className=" flex items-center justify-around flex-col py-20  w-2/2 lg:w-1/2">
            <div className="lg:text-7xl text-5xl text-sky-900 font-extrabold animate-pulse">
              Something{" "}
            </div>
            <div className="lg:text-6xl text-3xl text-blue-500 font-bold animate-pulse">
              to be .......
            </div>
          </div>
          <div className="w-2/2 lg:w-1/3 ease-in-out">
            <img
              src="https://us.123rf.com/450wm/bnenin/bnenin1709/bnenin170900513/86390646-close-up-on-young-girl-writing-in-notebook.jpg?ver=6"
              alt=""
              className="rounded w-full  "
            />
          </div>
        </div>
        <div className=" px-1 pt-6 lg:px-5 lg:py-3 w-full lg:w-2/3 lg:m-auto text-blue-800">
          Welcome to our vibrant corner of the internet! Dive into a world where
          words dance and ideas flourish. Join us on a journey of discovery,
          where every post unveils new perspectives, insights, and inspirations.
          Explore, engage, and embrace the power of storytelling with us.
        </div>
      </div>
      <div className=" w-3/4 border border-1 border-blue-900 bg-blue-900 m-auto"></div>
      <div
        className={`pt-20 pb-8   shadow-lg shadow-blue bg-gradient-to-r from-blue-50 via-blue-300 to-blue-50  `}
      >
        <div className="flex px-1 py-2 lg:px-10 lg:py-8 flex-col lg:flex-row ">
          <div className="w-2/2 lg:w-1/2">
            <img
              src="https://www.pitman-training.ie/media/6311/adobestock_225442477.jpeg"
              alt=""
              className="rounded w-full"
            />
          </div>
          <div className="flex items-center flex-col py-8 lg:py-20  w-2/2 lg:w-1/2 space-y-2">
            <div className="lg:text-6xl text-5xl text-black font-extrabold ">
              Post A Blog{" "}
            </div>
            <div className="  lg:text-2xl text-3xl text-blue-700 font-bold ">
              Think And Elaborate
            </div>
            <div className="lg:my-2">
              <button className="bg-black text-white px-2 py-1  lg:px-5 lg:py-3 rounded">
                Select Templates
              </button>
            </div>
          </div>
        </div>
        <div className="px-1 pt-6 lg:px-5 lg:py-3 w-full lg:w-2/3 lg:m-auto text-blue-800">
          Welcome to your digital home! Here, you're the architect of your
          online presence. Learn to sculpt captivating content, foster
          connections, and carve your niche in the vast web landscape. From
          design to promotion, we'll equip you with the tools to make your
          website shine. Let's embark on this exciting journey together!
        </div>
      </div>
    </>
  );
}
