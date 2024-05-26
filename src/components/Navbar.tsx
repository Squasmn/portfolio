import React from "react";
import Link from "next/link";
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

  return (
    <nav>
      <FloatingNav navItems={navItems} />
    </nav>
  );
};

export default Navbar;
