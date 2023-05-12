import { SiCodecademy } from "react-icons/si";
import { CiMenuKebab, CiMenuBurger } from "react-icons/ci";
import { BsArrowLeftShort, BsCcCircle } from "react-icons/bs";
import Dropdown from "../../components/Dropdown";
const Navbar = ({ open, setOpen }) => {
  return (
    <div className="bg-red-400">
      <div className="flex bg-lime-400 justify-between items-center p-2">
        <div className="items-center flex ml-2">
          <div className="items-center flex">
            {open ? (
              <CiMenuBurger
                className={`text-black-800 text-3xl rounded-full top-9 duration-300 border-amber-400 cursor-pointer`}
                size="35"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <CiMenuKebab
                className={`text-black-800 text-3xl rounded-full top-9 duration-300 border-amber-400 cursor-pointer`}
                size="35"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
        </div>
        <div className="mr-5">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
