"use client";

import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { useState } from "react";
import Link from "next/link";
import { Spacer } from "@nextui-org/spacer";
import TcbelloLogo from "./tcbello_logo";

const navbarItems = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMobileCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="bg-app-color-dark-1 md:p-4"
      maxWidth="full"
      position="static"
      height={"6rem"}
    >
      <NavbarContent>
        {/* MENU BUTTON */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          {/* TCBELLO LOGO */}
          <TcbelloLogo />
        </NavbarBrand>
      </NavbarContent>

      {/* LARGE SCREEN NAVIGATION ITEMS */}
      <NavbarContent
        className="flex flex-row space-x-4 max-md:hidden"
        justify="end"
      >
        {navbarItems.map((item, index) => {
          return (
            <NavbarItem
              key={item.title}
              className="text-white font-bold text-xl"
            >
              <Link
                href={item.href}
                className="hover:text-app-color-blue-1 transition-all ease-out duration-500"
              >
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* SMALL SCREENS NAVIGATION MENU ITEMS */}
      <NavbarMenu className="bg-app-color-dark-2 space-y-4 pt-4">
        {navbarItems.map((item, index) => {
          return (
            <NavbarMenuItem
              key={`${item.title}-menu-item`}
              className="text-white font-bold text-xl"
              onClick={handleMobileCloseMenu}
            >
              <Link href={item.href}>{item.title}</Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
