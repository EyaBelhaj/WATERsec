import React from "react";

const Settings = () => {
  return (
    <div className="flex flex-col mt-8 ms-14">
      <div className="font-bold text-2xl">
        <h1>Settings</h1>
      </div>
      <div className="rounded-2xl w-11/12 h-60 border shadow-lg mt-10">
        <div>
          <label className="relative cursor-pointer m-10 top-10">
            <input
              type="text"
              placeholder="Input"
              className="h-16 w-4/5 text-4xl text-black border-2 border-gray-200 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
            />
            <span className="text-xl text-black bg-white text-opacity-80  absolute left-5 mt-6 px-1 transition duration-200 input-text">
              Input
            </span>
          </label>
        </div>
        <div className="flex relative mt-10 ms-5">
          <label className="relative cursor-pointer w-1/3 top-10">
            <input
              type="text"
              placeholder="Input"
              className="h-14 w-10/12  text-4xl text-black border-2 border-gray-200 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
            />
            <span className="text-md text-black bg-white text-opacity-80 absolute left-5 top-5 pb-1 transition duration-200 input-text">
              Input
            </span>
          </label>
          <label className="relative cursor-pointer w-1/3 top-10">
            <input
              type="text"
              placeholder="Input"
              className="h-14 w-10/12   text-4xl text-black border-2 border-gray-200 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
            />
            <span className="text-md text-black bg-white text-opacity-80 absolute left-5 top-5 pb-1 transition duration-200 input-text">
              Input
            </span>
          </label>
          <label className="relative cursor-pointer w-1/3 top-10">
            <input
              type="text"
              placeholder="Input"
              className="h-14 w-10/12   text-4xl text-black border-2 border-gray-200 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
            />
            <span className="text-md text-black bg-white text-opacity-80 absolute left-5 top-5 pb-1 transition duration-200 input-text">
              Input
            </span>
          </label>
          <label className="relative cursor-pointer w-1/3 top-10">
            <input
              type="text"
              placeholder="Input"
              className="h-14 w-10/12  text-4xl text-black border-2 border-gray-200 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
            />
            <span className="text-md text-black bg-white text-opacity-80 absolute left-5 top-5 pb-1 transition duration-200 input-text">
              Input
            </span>
          </label>
          <label className="relative cursor-pointer w-1/3 top-10">
            <input
              type="text"
              placeholder="Input"
              className="h-14 w-10/12   text-4xl text-black border-2 border-gray-200 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
            />
            <span className="text-md text-black bg-white text-opacity-80 absolute left-5 top-5 pb-1 transition duration-200 input-text">
              Input
            </span>
          </label>
          <label className="relative cursor-pointer w-1/3 top-10">
            <input
              type="text"
              placeholder="Input"
              className="h-14 w-10/12   text-4xl text-black border-2 border-gray-200 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
            />
            <span className="text-md text-black bg-white text-opacity-80 absolute left-5 top-5 pb-1 transition duration-200 input-text">
              Input
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
