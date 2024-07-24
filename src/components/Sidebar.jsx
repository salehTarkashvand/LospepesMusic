import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
  <div className="mt-2">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row 
      justify-start items-center
      my-6 text-lg font-medium text-zinc-950
       hover:text-orange-600"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 m-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div
        className="md:flex hidden 
      flex-col w-[220px] py-1 px-1
       bg-zinc-200"
      >
        <img src={logo} alt="logo" className="h-80 object-contain " />
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3 ">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2"
          onClick={()=>setMobileMenuOpen(false)} />
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2"
          onClick={()=>setMobileMenuOpen(true)} />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-zinc-200 backdrop-blur-md z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0 ':'-left-full'}`}
      >
        <img src={logo} alt="logo" className="h-80 object-contain " />
        <NavLinks handleClick={()=>setMobileMenuOpen(false)}/>
      </div>
    </>
  );
};

export default Sidebar;
