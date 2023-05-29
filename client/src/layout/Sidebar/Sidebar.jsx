import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { FcElectricalSensor, FcApprove } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";
import logo from "../../assests/watersec.jpg";
import jwt_decode from "jwt-decode";

const Sidebar = ({ open, setOpen }) => {
  const [menu, setMenu] = useState(adminMenus);
  const router = useNavigate();
  const userToken = localStorage.getItem("auth_token");
  const decodedUserToken = jwt_decode(userToken);
  useEffect(() => {
    if (decodedUserToken.isAdmin === true) {
      setMenu(adminMenus);
    } else {
      setMenu(Menus);
    }
  }, []);
  return (
    <div
      className={classNames(
        "border-r-2 border-gray-300 h-screen",
        open ? "w-60" : "w-14",
        "pt-4 duration-300"
      )}
    >
      <div className="flex justify-center">
        <img src={logo} alt="logo" width={120} />
      </div>

      <div className="pl-0">
        <ul>
          {menu.map((menuu, i) => (
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
                  {menuu.title}
                </span>
              </li>
              {menuu.submenu && (
                <ul>
                  {menuu.submenuItems.map((submenu, i) => (
                    <li
                      className="text-gray-500 text-sm flex justify-start gap-x-4 cursor-pointer m-2 p-2 hover:bg-slate-100 rounded-md"
                      onClick={() => router(submenu.title)}
                      key={i}
                    >
                      <span
                        className={classNames(
                          "text-gray-600 text-xl block",
                          !open && ""
                        )}
                      >
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
const adminMenus = [
  {
    title: "General",
    submenu: true,
    submenuItems: [
      { title: "Users", icon: <FcApprove /> },
      { title: "Sensors", icon: <FcElectricalSensor /> },
    ],
  },
];
export default Sidebar;
