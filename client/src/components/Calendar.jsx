import React from "react";
import { BsCalendarDate } from "react-icons/bs";

const Calendar = () => {
  return (
    <div class="">
      <div className="flex items-center pr-3 cursor-pointer">
        <BsCalendarDate
          htmlFor="startDate"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
        />
      </div>
      <input type="date" id="startDate" className="" />
    </div>
  );
};

export default Calendar;
