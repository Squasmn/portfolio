"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FloatingNav } from "@/components/ui/floating-navbar";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    { name: "Skills", link: "/about/skills" },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const dropdownMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger className="border border-white">
        Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navItems.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onSelect={() => (window.location.href = item.link)}
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav>
      <div className="lg:hidden">
        <FloatingNav navItems={[]} dropdownMenu={dropdownMenu} />
      </div>

      <div className="hidden lg:block">
        <FloatingNav navItems={navItems} />
      </div>
    </nav>
  );
};

export default Navbar;
