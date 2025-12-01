"use client";
import Button from "./ui/button.jsx";
import Link from "next/link";
import "../styles/header.css";

const Navbar = () => {
    return (
        <nav className="w-full bg-[#364F6B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-2">
                <div className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <div>
                        <Link href={"/"}>
                            <span className="font-semibold text-2xl text-white">
                                MY WEBSITE
                            </span>
                        </Link>
                    </div>

                    {/* Nav items */}
                    <div className="flex items-center gap-6">
                        {/*  <button  popoverTargetAction="toggle"> button
                            <img  src="burger-simple-svgrepo-com" alt="" />
                        </button> */}
                        <ul
                            id="list"
                            popoverTarget="list"
                            className="min-[320px]:flex gap-5 items-center text-white font-semibold text-lg m-0 p-0 list-none min-w-[320px]: text-[16px] min-[320px]: hidden"
                        >
                            <li>
                                <Link href={"/"}>HOME</Link>
                            </li>
                            <li>
                                <Link href={"/about"}>ABOUT</Link>
                            </li>
                            <li>
                                <Link href={"/tech"}>TECH</Link>
                            </li>
                        </ul>

                        {/*   <Link href={"/admin"}>
              <Button input={"Admin"} color={"blue"} type={"button"} />
            </Link> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
