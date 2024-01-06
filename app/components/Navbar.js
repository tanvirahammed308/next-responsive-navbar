
"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    const handleSmallerSceenNavigation=()=>{
        setMenuIcon(!menuIcon)
    }
  return (
    <header className="bg-slate-400 text-[#ceff00] w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">
        <div>
          <Link href={"/"} onClick={handleSmallerSceenNavigation}>
            <span className="font-extrabold uppercase text-3xl md:text-2xl xl:text-3xl">
              javascript
            </span>
          </Link>
        </div>
        {/* for larger screen  */}
        <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800">
          <li className="mr-4 lg:mr-8 hover:text-[#ceff00] ">
            <Link href={"/"}>home</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#ceff00] ">
            <Link href={"/about"}>about</Link>
          </li>
          <li className=" lg:mr-8 hover:text-[#ceff00] ">
            <Link href={"/contact"}>contact</Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          <div>
            <Link href={"/login"}>
              <button className="mr-5 bg-[#ceff00] text-slate-800 hover:bg-slate-800 hover:text-[#ceff00] rounded-full uppercase font-bold px-8 py-2">
                login
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="border-2 border-[#ceff00] text-white rounded-full uppercase px-8 py-2 font-bold">
                sign up
              </button>
            </Link>
          </div>
        </div>
        {/* for small screen icon */}
        <div onClick={handleSmallerSceenNavigation} className="flex md:hidden">
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-[#ceff00]" />
          ) : (
            <AiOutlineMenu size={25} className="text-[#ceff00]" />
          )}
        </div>
        {/* for smaller screen navbar  */}
        <div
          className={
            menuIcon
              ? "md-hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center text-center w-full h-screen bg-slate-800 text-white ease-in duration-300"
              : "md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
          }
        >
          <div className="w-full ">
            <ul className="uppercase font-bold text-2xl ">
              <li
                onClick={handleSmallerSceenNavigation}
                className="py-5 hover:text-[#ceff00]"
              >
                <Link href={"/"}>home</Link>
              </li>
              <li
                onClick={handleSmallerSceenNavigation}
                className="py-5 hover:text-[#ceff00]"
              >
                <Link href={"/about"}>about</Link>
              </li>
              <li
                onClick={handleSmallerSceenNavigation}
                className="py-5 hover:text-[#ceff00]"
              >
                <Link href={"/contact"}>contact</Link>
              </li>
            </ul>
            <dev className="flex flex-col justify-center items-center  mt-5">
              <Link href={"login"} onClick={handleSmallerSceenNavigation}>
                <button className="bg-[#ceff00] text-slate-800 rounded-full uppercase font-bold py-3 w-[250px] mb-5">
                  login
                </button>
              </Link>
              <Link href={"signup"} onClick={handleSmallerSceenNavigation}>
                <button className="border-2 border-[#ceff00] text-white rounded-full uppercase font-bold py-3 w-[250px] mb-10">
                  sign up
                </button>
              </Link>
            </dev>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar