import React from "react";

const Simulate = () => {
  return (
    <div className="flex flex-col mt-8 ms-14">
      <div className="font-bold text-2xl">
        <h1>Invoice Simulation</h1>
      </div>
      <div className="rounded-2xl w-11/12 h-64 border shadow-lg mt-10">
        <div>
          <label className="relative flex items-center cursor-pointer m-10 top-2">
            <input
              type="text"
              placeholder="Input"
              className="h-16 w-4/5 text-4xl text-black border-2 border-gray-200 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
            />
            <span className="text-xl text-black bg-white text-opacity-80  absolute left-5 mt-6 px-1 transition duration-200 input-text">
              Your Consumption (in m3)
            </span>
            <button className="h-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-8">
              Button
            </button>
          </label>
        </div>
        <div className="flex ms-12">
          <label className="w-48 top-5 font-bold">
            <p className="text-xl">Total Amount</p> <br />
            <p className="text-4xl">0 TND</p>
          </label>
          <label className="w-48 top-5 font-bold">
            <p className="text-xl">Total Amount</p> <br />
            <p className="text-4xl">0 TND</p>
          </label>
          <label className="w-48 top-5 font-bold">
            <p className="text-xl">Total Amount</p> <br />
            <p className="text-4xl">0 TND</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Simulate;
