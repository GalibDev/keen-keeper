import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdTimeline } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition ${
      isActive
        ? "bg-[#1f5b49] text-white"
        : "border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
    }`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="container-width flex items-center justify-between py-4">
        <img src={logo} alt="KeenKeeper" className="h-7 object-contain" />

        <div className="flex items-center gap-2">
          <NavLink to="/" className={navClass}>
            <HiHome className="text-sm" />
            Home
          </NavLink>
          <NavLink to="/timeline" className={navClass}>
            <MdTimeline className="text-sm" />
            Timeline
          </NavLink>
          <NavLink to="/stats" className={navClass}>
            <FaChartBar className="text-sm" />
            Stats
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;