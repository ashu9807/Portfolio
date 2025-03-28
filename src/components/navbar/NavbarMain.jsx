import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import React from "react";
import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
// import NavbarToggler from "./NavbarToggler";
// import { useSelector } from "react-redux";


const NavbarMain=()=>{
  const [menuOpen, setMenuOpen] = useState(false);
  // const menuOpen = useSelector((state) => state.menu.menuOpen);
  const togglemenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-2 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-4 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
        <button className="text-2xl p-3 border border-orange rounded-full text-white" onClick={togglemenu}>
          <GiHamburgerMenu/>
        </button>
        {/* <NavbarToggler /> */}
      </div>
    </nav>
  );
    
}

   

export default NavbarMain
