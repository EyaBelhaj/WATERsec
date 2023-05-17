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
          <div>
            <ImagePreview />
            <UserInfo />
          </div>
        ) : null}
        {toggle === "Change Password" ? <div>changePass</div> : null}
        {toggle === "Reporting Configs" ? <div>Report config</div> : null}
      </div>
    </div>
  );
};

export default User;
