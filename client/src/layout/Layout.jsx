import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="w-screen">
        <Navbar open={open} setOpen={setOpen} />
        <div>azeaze</div>
      </div>
    </div>
  );
};

export default Layout;
