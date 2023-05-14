import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import {
  MdOutlineAnalytics,
  MdOutlineCompareArrows,
  MdOutlineScreenShare,
  MdOutlineNotificationsNone,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillImageFill,
  BsPerson,
  BsReverseLayoutTextWindowReverse,
  BsSearch,
} from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";

const Sidebar = ({ open, setOpen }) => {
  const router = useNavigate();

  return (
    <div
      className={classNames(
        "border-r-2 border-gray-300 h-screen",
        open ? "w-60" : "w-14",
        "p-2 pt-4 duration-300"
      )}
    >
      <div className="pl-0">
        <ul>
          {Menus.map((menu, i) => (
            <>
              <li
                key={i}
                className="text-gray-800 text-sm flex items-center justify-start gap-x-4 p-2"
              >
                <span
                  className={classNames(
                    "text-base  font-medium flex-1 duration-300",
                    !open && "scale-0"
                  )}
                >
                  {menu.title}
                </span>
              </li>
              {menu.submenu && (
                <ul>
                  {menu.submenuItems.map((submenu, i) => (
                    <li
                      className="text-gray-800 text-sm flex justify-start gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-100 rounded-md"
                      onClick={() => router(submenu.title)}
                      key={i}
                    >
                      <span className="text-xl block">
                        {submenu.icon ? submenu.icon : <RiDashboardFill />}
                      </span>
                      <span
                        className={classNames(
                          "duration-300",
                          !open && "scale-0"
                        )}
                      >
                        {submenu.title}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
const Menus = [
  {
    title: "General",
    submenu: true,
    submenuItems: [
      { title: "Dashboard", icon: <AiOutlineDashboard /> },
      { title: "Analytics", icon: <MdOutlineAnalytics /> },
      { title: "Comparison", icon: <MdOutlineCompareArrows /> },
      { title: "Reporting", icon: <MdOutlineScreenShare /> },
    ],
  },
  {
    title: "MANAGEMENT",

    submenu: true,
    submenuItems: [
      { title: "User", icon: <AiOutlineUser /> },
      { title: "Settings", icon: <FiSettings /> },
      { title: "Simulate", icon: <TbFileInvoice /> },
      { title: "Notifications", icon: <MdOutlineNotificationsNone /> },
    ],
  },
];
export default Sidebar;
