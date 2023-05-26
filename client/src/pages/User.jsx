import { useState } from "react";

import ImagePreview from "../components/ImagePreview";
import UserInfo from "../components/UserInfo";
import { BsPersonSquare, BsFillKeyFill, BsPaperclip } from "react-icons/bs";

const User = () => {
  const [toggle, settToggle] = useState("General");
  const handleToggle = (comp) => {
    settToggle(comp);
  };
  return (
    <div>
      <div className="flex flex-col mt-8 ms-14">
        <div>
          <h1 className="font-bold text-2xl">Account</h1>
        </div>
        <div className="flex flex-row mt-10">
          <div
            className={`flex items-center cursor-pointer rounded duration-300  ${
              toggle === "General"
                ? "border-b-4 border-indigo-500"
                : "border-b-4 border-white text-gray-500"
            } `}
            onClick={() => handleToggle("General")}
          >
            <BsPersonSquare />
            <h2 className="text-lg ms-2">General</h2>
          </div>
          <div
            className={`flex items-center cursor-pointer rounded ms-10 p-2 duration-300 ${
              toggle === "Change Password"
                ? "border-b-4 border-indigo-500"
                : "border-b-4 border-white text-gray-500"
            } `}
            onClick={() => handleToggle("Change Password")}
          >
            <BsFillKeyFill />
            <h2 className="text-lg ms-2">Change Password</h2>
          </div>
          <div
            className={`flex items-center cursor-pointer rounded ms-10 p-2 duration-300 ${
              toggle === "Reporting Configs"
                ? "border-b-4 border-indigo-500 "
                : "border-b-4 border-white text-gray-500"
            } `}
            onClick={() => handleToggle("Reporting Configs")}
          >
            <BsPaperclip />
            <h2 className="text-lg ms-2">Reporting Configs</h2>
          </div>
        </div>
      </div>

      <div className="mt-10 ms-10">
        {toggle === "General" ? (
          <div className="flex m-5">
            <ImagePreview />
            <UserInfo />
          </div>
        ) : null}
        {toggle === "Change Password" ? (
          <div className="border shadow-lg rounded-2xl w-11/12 h-72 m-5 p-5">
            <div class="relative m-2">
              <input
                type="text"
                id="floating_outlined_1"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined_1"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Old Password
              </label>
            </div>
            <div class="relative m-2">
              <input
                type="text"
                id="floating_outlined_2"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined_2"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                New Password
              </label>
            </div>
            <span className="text-gray-400 text-sm m-5">
              Password must be minimum 6+
            </span>
            <div class="relative m-2">
              <input
                type="text"
                id="floating_outlined_3"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined_3"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Confirm new password
              </label>
            </div>
            <div className="float-right me-5">
              <button className="h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-lg">
                Save Changes
              </button>
            </div>
          </div>
        ) : null}
        {toggle === "Reporting Configs" ? (
          <div className="border shadow-lg rounded-2xl w-11/12 h-64 m-5 p-5">
            <div class="relative mb-8 m-2">
              <input
                type="text"
                id="floating_outlined_2"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined_2"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Periodicity
              </label>
            </div>

            <div class="relative mb-8 m-2">
              <input
                type="text"
                id="floating_outlined_3"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined_3"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Emails
              </label>
            </div>
            <div className="float-right me-5">
              <button className="h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-lg">
                Save Changes
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default User;
