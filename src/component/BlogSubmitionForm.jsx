import React from "react";

export default function BlogSubmitionhtmlForm({
  options,
  information,
  setInformation,
  handleSubmit,
}) {
  return (
    <>
      <div className="w-2/2 lg:w-1/2 mx-auto py-5 bg-blue-300 rounded">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              Enter Blog Name
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter name"
              required
              onChange={(e) =>
                setInformation({ ...information, blogName: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              If you want to schedule set date
            </label>

            <input
              type="datetime-local"
              id="password"
              onChange={(e) =>
                setInformation({ ...information, seenFrom: e.target.value })
              }
              //   min={}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Select your Content type
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              onChange={(e) => {
                setInformation({ ...information, type: e?.target?.value });
              }}
            >
              {options.map((el, i) => {
                return (
                  <option key={i} value={el}>
                    <div className="px-2 py-3 ">{el}</div>
                  </option>
                );
              })}
            </select>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
