"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const [linkClick, setLinkClick] = useState("");

  useEffect(() => {
    setLinkClick(window.location.hash);
  }, []);

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
    <>
      <nav className="fixed flex w-screen justify-end p-5 md:px-10 md:py-4">
        <ul className="hidden flex-row space-x-20 md:flex">
          {links.map((link) => {
            const isSelected = linkClick === link.href || (linkClick == "" && link.href == "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-slate-700"
                >
                  {link.name}
                  <div
                    className={clsx(
                      "transition-width h-1 w-0 rounded bg-blue-500 duration-200 ease-in-out",
                      {
                        "w-[70%]": isSelected,
                      },
                    )}
                  ></div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="block md:hidden">
          <MobileNavigation links={links} />
        </div>
      </nav>
    </>
  );
};

export default Header;
