import React from "react";
import alert from "../assests/alrt.png";
const Notifications = () => {
  return (
    <div className="flex flex-col mt-8 ms-14">
      <div className="flex justify-center rounded-2xl w-11/12 h-96 border shadow-lg mt-10">
        <div>
          <img src={alert} alt="img" width={400} />
          <p className="text-2xl font-bold"> There is no notifications</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
