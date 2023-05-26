import React from "react";

const Simulate = () => {
  return (
    <div className="flex flex-col mt-8 ms-14">
      <div className="font-bold text-2xl">
        <h1>Invoice Simulation</h1>
      </div>
      <div className="rounded-2xl w-11/12 h-64 border shadow-lg mt-10">
        <div className="flex items-center mt-5 m-5">
          <div class="relative w-full me-5">
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
              Your Consumption (in m3)
            </label>
          </div>

          <label className="w-30 me-5">
            <button className="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded ">
              Validate
            </button>
          </label>
        </div>
        <div className="flex ms-12">
          <label className="w-48">
            <p className="text-md">Total Amount</p> <br />
            <p className="text-4xl font-bold">230 TND</p>
          </label>
          <label className="w-48">
            <p className="text-md">Total Amount</p> <br />
            <p className="text-4xl font-bold">150 TND</p>
          </label>
          <label className="w-48">
            <p className="text-md">Total Amount</p> <br />
            <p className="text-4xl font-bold">80 TND</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Simulate;
