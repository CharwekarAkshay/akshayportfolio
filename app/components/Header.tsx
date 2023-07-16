"use client";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [linkClick, setLinkClick] = useState(window.location.hash);

  const handleClick = (href: string) => {
    setLinkClick(href);
  };

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="px-10 py-4 fixed">
      <ul className="flex flex-row space-x-20">
        {links.map((link) => {
          const isSelected = linkClick === link.href;
          console.log(linkClick, link.href, isSelected);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={clsx("text-gray-500", isSelected && "text-blue-500")}
              >
                {link.name}
                <div
                  className={clsx(
                    "h-1 w-0 bg-blue-500 rounded transition-width duration-200 ease-in-out",
                    {
                      "w-[70%]": isSelected,
                    }
                  )}
                ></div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
