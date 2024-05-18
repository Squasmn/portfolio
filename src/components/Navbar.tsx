import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const Navbar = () => {
  return (
    <nav>
      <FloatingNav
        navItems={[
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
          { name: "Services", link: "/services" },
          {
            name: "Contact",
            link: "/contact",
          },
          {
            name: "Blog",
            link: "/blog",
          },
        ]}
      />
    </nav>
  );
};

export default Navbar;
