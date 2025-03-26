import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import LogoutModal from "../LogoutModal";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    console.error("AuthContext is null. Make sure AuthProvider is wrapping the app.");
    return null;
  }

  const { logout, user } = authContext;
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = async () => {
    await logout();
    navigate("/");
    setShowLogoutModal(false);
  };

  const handleLogoutClose = () => {
    setShowLogoutModal(false);
  };

  const handleNavLinkClick = () => {
    setDropdown(false);
  };

  return (
    <nav>
      <div className="container mx-auto px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="">
            <p style={{ textColor: '##070707' }} className="font-bold text-4xl ">CloudConnect.</p>
          </div>
          <ul className="hidden lg:flex flex-1 justify-center items-center gap-12">
            <NavLink to={"/"} className={({ isActive }) => `font-bold text-lg p-1 px-4 ${isActive ? "text-white border-b rounded" : "text-black"}`}>
              Home
            </NavLink>
            <NavLink to={"/jobs"} className={({ isActive }) => ` font-bold text-lg p-1 px-4 ${isActive ? "text-white border-b rounded" : "text-black"}`}>
              Job Listing
            </NavLink>
            <NavLink to={"/about"} className={({ isActive }) => `font-bold text-lg p-1 px-4 ${isActive ? "text-white border-b rounded" : "text-black"}`}>
              About Us
            </NavLink>
          </ul>
          <div className="hidden lg:flex">
            <Link to={"/signup"} className="font-bold text-lg p-1.5 px-4 rounded text-slate-900">
              Register
            </Link>
            {user ? (
              <Link to={"/"} className="text-black font-bold text-lg p-1.5 ml-5" onClick={handleLogoutClick}>
                Logout
              </Link>
            ) : (
              <Link to={"/signin"} style={{ textColor: '##070707' }} className="font-bold text-lg p-1.5 ml-5">
                Sign In
              </Link>
            )}
          </div>
          <div onClick={() => setDropdown(!dropdown)} className="lg:hidden text-2xl cursor-pointer text-white">
            {dropdown ? <MdClose /> : <RiMenu2Fill />}
          </div>
        </div>
      </div>
      {dropdown && (
        <div className="lg:hidden w-full fixed top-16 bg-gradient-to-r from-sky-400 to-blue-500 text-white flex flex-col items-center gap-6 py-8 z-20">
          <NavLink to={"/"} className={({ isActive }) => `p-1 px-4 ${isActive ? "text-white border-b rounded" : "text-black"}`} onClick={handleNavLinkClick}>
            Home
          </NavLink>
          <NavLink to={"/jobs"} className={({ isActive }) => `p-1 px-4 ${isActive ? "text-white border-b rounded" : "text-black"}`} onClick={handleNavLinkClick}>
            Job Listing
          </NavLink>
          <NavLink to={"/about"} className={({ isActive }) => `p-1 px-4 ${isActive ? "text-white border-b rounded" : "text-black"}`} onClick={handleNavLinkClick}>
            About Us
          </NavLink>
          <div className="flex flex-col items-center gap-4">
            <Link to={"/signup"} className="p-1.5 px-4 rounded text-slate-900" onClick={handleNavLinkClick}>
              Register
            </Link>
            {user ? (
              <Link to={"/"} className="text-white p-1.5" onClick={() => { handleLogoutClick(); handleNavLinkClick(); }}>
                Logout
              </Link>
            ) : (
              <Link to={"/signin"} className="text-white p-1.5" onClick={handleNavLinkClick}>
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
      <LogoutModal show={showLogoutModal} onClose={handleLogoutClose} onConfirm={handleLogoutConfirm} />
    </nav>
  );
};

export default Navbar;