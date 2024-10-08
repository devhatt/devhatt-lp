"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./assets/Logo";
import MenuLogo from "./assets/MenuLogo";

const navLinks = [
  {
    path: "/octopost",
    name: "Home",
  },
  {
    path: "/features",
    name: "Features",
  },
  {
    path: "/benefits",
    name: "Benefits",
  },
  {
    path: "/join-us",
    name: "Join Us",
  },
  {
    path: "/faq",
    name: "FAQ",
  },
];

function Navbar() {
  const pathname = usePathname() || "/";
  const [hoverLink, setHoverLink] = useState(pathname);

  return (
    <header className="fixed top-0 z-[100] w-screen bg-white backdrop-blur-md">
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ y: 0, opacity: 0 }}
        className="flex items-center justify-evenly p-2 md:justify-between md:px-10"
      >
        <Logo />
        <button className="hover:cursor-pointer lg:hidden">
          <MenuLogo />
        </button>
        <nav className="hidden lg:flex">
          {navLinks.map((item) => {
            const isActive = item.path === pathname;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative border-violet-500 px-4 py-2 text-xl text-[#5C5CA0] no-underline duration-300 ease-in lg:text-xl ${isActive ? "font-semibold" : "font-normal"}`}
                onMouseOver={() => {
                  setHoverLink(item.path);
                }}
                onMouseLeave={() => setHoverLink(pathname)}
              >
                <span>{item.name}</span>
                {item.path === hoverLink && (
                  <motion.div
                    className="absolute bottom-0 left-0 -z-10 h-4 border-b-4 border-violet-500"
                    layoutId="navbar"
                    area-hiden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 50,
                      damping: 5,
                      duration: 0.8,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:-ml-40 lg:mr-10 lg:flex">
          <button className="relative m-2 overflow-hidden rounded-full bg-[#9A78F2] px-10 py-4 text-white drop-shadow-lg duration-1000 before:absolute before:-right-20 before:-top-36 before:h-60 before:w-60 before:rounded-full before:bg-[#996BEA] after:absolute after:-right-44 after:-top-40 after:h-60 after:w-60 after:rounded-full after:bg-[#935AE5] after:transition-all hover:scale-[97%] hover:brightness-105 hover:drop-shadow-2xl hover:after:right-10 hover:after:bg-gradient-to-r hover:after:from-pink-500 hover:after:to-violet-500">
            <span className="relative z-10">Teste agora</span>
          </button>
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;
