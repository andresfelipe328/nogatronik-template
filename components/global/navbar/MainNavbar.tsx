import React from "react";
import Image from "next/image";

import { FaUser, FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

import NavbarAnimLayout from "@/components/animtedLayouts/NavbarAnimLayout";

const NAV = [
  {
    icon: FaUser,
    name: "user",
    href: "/profile",
  },
  {
    icon: FaShoppingCart,
    name: "cart",
    href: "/cart",
  },
  {
    icon: MdFavorite,
    name: "favorite",
    href: "/favorite",
  },
];

const MainNavbar = () => {
  return (
    <NavbarAnimLayout>
      <h1>Nogatronik</h1>
      <Image
        src="/logo.svg"
        width={28}
        height={28}
        className=" w-[5rem] logo"
        alt="De Forest Audion vaccum tube"
        priority
      />
      <ul className="flex items-center gap-4">
        {NAV.map((link, index) => (
          <li key={index}>
            <link.icon className="nav-icon hover:text-extra hover:scale-110 transition-all duration-300 ease-in-out" />
          </li>
        ))}
      </ul>
    </NavbarAnimLayout>
  );
};

export default MainNavbar;
