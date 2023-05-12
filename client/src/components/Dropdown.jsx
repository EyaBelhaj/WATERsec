import { Fragment, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
const AvatarDropdown = () => {
  return (
    <div>
      <Menu as="div" className="relative">
        {({ open }) => {
          <Fragment>
            {/* menu button */}
            <Menu.Button className="bg-sky-500 font-bold text-lg text-white p-1 px-3 m-0 rounded-full">
              T
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
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-400 hover:text-white"
                    >
                      user
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-400 hover:text-white"
                    >
                      duplicate
                    </a>
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-400 hover:text-white"
                    >
                      sett
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-400 hover:text-white"
                    >
                      log
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Fragment>;
        }}
      </Menu>
    </div>
  );
};

export default AvatarDropdown;
