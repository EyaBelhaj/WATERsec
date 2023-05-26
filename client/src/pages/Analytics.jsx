import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { MyResponsiveLine } from "../components/LineChart";

const Analytics = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div className="m-10">
      <div className="flex items-center mt-5 m-5">
        {/* <div className="relative w-1/3 me-5">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"></div>

            <input
              type="text"
              id="floating_outlined_1"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue={lastMonthDate}
            />
            <label
              for="floating_outlined_1"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Start Date
            </label>
          </div>
          <div class="relative w-1/3 me-5">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              <BsCalendarDate className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="floating_outlined_2"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue={todayDate}
            />
            <label
              for="floating_outlined_2"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              End Date
            </label>
          </div> */}

        <div class="w-2/3 me-5">
          <Datepicker
            primaryColor={"sky"}
            value={value}
            onChange={handleValueChange}
            showShortcuts={true}
          />
        </div>

        <div class="relative w-1/3 me-5">
          <input
            type="text"
            id="floating_outlined_3"
            className="block px-2.5 pb-2.5 pt-4 w-full h-10 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_outlined_3"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Filter Per Tag
          </label>
        </div>
        <label className="w-30 me-5">
          <button className="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded ">
            Validate
          </button>
        </label>
        <label className="w-30">
          <button className="h-10 bg-green-500 hover:bg-green-700 text-white font-bold p-2 px-4 rounded ">
            Excel
          </button>
        </label>
      </div>
      <div className="flex flex-row	justify-center mt-10 mr-16">
        <div className="w-1/3 h-40 rounded-2xl border shadow-lg ms-5 p-2 ps-5">
          <p>Total Consumption</p>

          <div>
            <p className="font-bold text-4xl">365 L</p>
            <p>Cold 152 Liters</p>
            <p>Hot 197 Liters</p>
          </div>
        </div>
        <div className="w-1/3 h-40 rounded-2xl border shadow-lg ms-5 p-2 ps-5">
          <p>Average Consumption Per Day</p>

          <div>
            <p className="font-bold text-4xl">516 L</p>
            <p>Cold 268 Liters</p>
            <p>Hot 237 Liters</p>
          </div>
        </div>
        <div className="w-1/3 h-40 rounded-2xl border shadow-lg ms-5 p-2 ps-5">
          <p>Average Consumption Per Use</p>

          <div>
            <p className="font-bold text-4xl">456 L</p>
            <p>Cold 198 Liters</p>
            <p>Hot 213 Liters</p>
          </div>
        </div>
      </div>
      <div className="h-56 felx rounded-2xl w-11/12 border shadow-lg ms-5 mt-5">
        <MyResponsiveLine />
      </div>
    </div>
  );
};

export default Analytics;
