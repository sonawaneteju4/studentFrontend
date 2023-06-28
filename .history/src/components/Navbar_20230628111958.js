import React from "react";
import { Link } from "react-router-dom";
import { RxPencil2 } from "react-icons/rx";
import { SiPagespeedinsights } from "react-icons/si";
import { BiHomeAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="bg-black pl-5 lg:pt-2 sm:pt-1 h-16 text-white flex  items-center">
      <ul className=" flex items-center justify-center">
       
        <li className="pr-5 flex">
        <span className="p-1">
            <BiHomeAlt2 />
          </span>
        <Link ck to="">
            Home
          </Link>
        </li>
        <li className="pr-5 flex">
          <span className="p-1">
            <RxPencil2 />
          </span>

          <Link to="/register">Register</Link>
        </li>
        <li className="pr-5 flex">
          <span className="p-1">
            <SiPagespeedinsights />
          </span>
          <Link to="/responce">Responces</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
