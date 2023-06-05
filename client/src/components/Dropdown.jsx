import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import jwt_decode from "jwt-decode";
import axios from "../api/axios";

const AvatarDropdown = () => {
  const navigate = useNavigate();
  const userToken = localStorage.getItem("auth_token");
  const decodedUserToken = jwt_decode(userToken);
  const [btntoggle, setbtntoggle] = useState(true);
  const handleLougout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  const handleToggleOnOff = async () => {
    setbtntoggle(!btntoggle);
    try {
      await axios.post("/toggleOnOff", { value: btntoggle });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Menu as="div" className="relative">
        {({ open }) => {
          return (
            <Fragment>
              {/* menu button */}
              <Menu.Button className="bg-sky-500 font-bold text-lg text-white p-1 px-3 m-0 rounded-full">
                {decodedUserToken.name[0]}
              </Menu.Button>
              {/* meni items */}
              <Transition show={open}>
                <Menu.Items
                  className="origin-top-right absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                  static
                >
                  <div className="py-1">
                    <Menu.Item>
                      <a
                        href="#"
                        className="group flex flex-col  px-4 py-2 text-sm text-gray-700 hover:bg-indigo-400 hover:text-white"
                      >
                        <p>{decodedUserToken.name}</p>
                        <p className="text-sm text-gray-500">
                          {decodedUserToken.email}
                        </p>
                      </a>
                    </Menu.Item>

                    <div className="flex justify-center">
                      {/* <div className="mid">
                        <label className="rocker">
                          <input
                            type="checkbox"
                            name="checkbox"
                            onChange={(e) => console.log(e.target.value)}
                          />
                          <label className="switch-left" value="on">
                            On
                          </label>
                          <label className="switch-right" value="off">
                            Off
                          </label>
                        </label>
                      </div> */}
                      {/* <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          class="sr-only peer"
                          onChange={handleToggleOnOff}
                          value={btntoggle}
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Toggle me
                        </span>
                      </label> */}
                      <label class="flex justify-center items-center relative w-max cursor-pointer select-none">
                        <input
                          type="checkbox"
                          onChange={handleToggleOnOff}
                          class="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500"
                        />
                        <span class="absolute font-medium text-xs uppercase right-1 text-white">
                          {btntoggle ? <p> Off</p> : <p>ON </p>}
                        </span>
                        <span class="absolute font-medium text-xs uppercase right-8 text-white">
                          {btntoggle ? <p> Off</p> : <p>ON </p>}
                        </span>
                        <span class="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
                      </label>
                    </div>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      <a
                        href="#"
                        className="group flex items-center px-4 py-2 text-sm text-gray-700 font-bold hover:bg-indigo-400 hover:text-white"
                        onClick={handleLougout}
                      >
                        logout
                      </a>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Fragment>
          );
        }}
      </Menu>
    </div>
  );
};

export default AvatarDropdown;
