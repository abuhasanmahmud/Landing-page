"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log(navbarOpen);
  return (
    <div className="navbar bg-green-700 py-7 text-white relative">
      <div className="flex justify-between mx-10 ">
        <div className="logo">
          <h1 className="">Logo</h1>
        </div>
        <ul className="hidden sm:flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/all-product">All Product</Link>
        </ul>

        <div className="mobail-bar flex gap-4 items-center ">
          <div className="account">Login</div>
          <div className="sm:hidden cursor-pointer">
            {!navbarOpen && <FaBars onClick={() => setNavbarOpen(true)} />}
            {navbarOpen && <IoCloseSharp onClick={() => setNavbarOpen(false)} />}
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${
          navbarOpen ? "sidebar w-36 py-4  h-auto bg-gray-400 absolute right-0 top-20  " : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2 justify-center items-center  ">
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <li>Contact use</li>
          <li>All products</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
