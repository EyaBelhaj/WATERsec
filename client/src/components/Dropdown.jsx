import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import jwt_decode from "jwt-decode";

const AvatarDropdown = () => {
  const navigate = useNavigate();
  const userToken = localStorage.getItem("auth_token");
  const decodedUserToken = jwt_decode(userToken);

  const handleLougout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
    window.location.reload();
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

                    <div>
                      <div className="mid">
                        <label className="rocker">
                          <input
                            type="checkbox"
                            onChange={(e) => console.log(e.target.value)}
                          />
                          <span className="switch-left" value="on">
                            On
                          </span>
                          <span className="switch-right" value="off">
                            Off
                          </span>
                        </label>
                      </div>
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
