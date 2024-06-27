"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

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
    <div className="backdrop-blue-md sticky top-2 z-[100] mx-auto  mb-12 flex h-[77px] w-full items-center  justify-evenly bg-white">
      <div>Logo</div>
      <nav className=" item-center flex justify-center">
        {navLinks.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative border-violet-500 px-4 py-2 text-xl text-[#5C5CA0] no-underline duration-300 ease-in 
lg:text-base ${isActive ? "font-semibold" : "font-normal"}`}
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
      <div className="-ml-40 mr-10">
        <button className="hover:after:bg-gradient-to-r hover:after:from-pink-500 hover:after:to-violet-500 hover:after:right-10  relative m-2 overflow-hidden rounded-full bg-[#9A78F2] px-10 py-4  text-white before:absolute before:-right-20 before:-top-36 before:h-60 before:w-60 before:rounded-full before:bg-[#996BEA] after:absolute after:-right-44 after:-top-40 after:h-60 after:w-60 after:rounded-full after:bg-[#935AE5] hover:brightness-105">
          <span className="relative z-10"> Teste agora </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
