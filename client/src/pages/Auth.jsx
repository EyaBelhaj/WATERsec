import React from "react";

const Auth = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-xl border-t-4 border-indigo-500">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form action="">
          <div class="mt-4">
            <div class="relative m-2 my-8">
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
                Email
              </label>
            </div>
            <div class="relative m-2 my-8">
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
                Password
              </label>
            </div>
            <div class="flex items-baseline justify-between">
              <button class="px-6 w-full mx-5 py-2 mt-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-700">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
