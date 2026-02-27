"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import DownArrow from "@/assets/in-Use/downArrow.svg";
import MainLogo from "@/assets/in-Use/mainlogo.svg";
import User from "@/assets/in-Use/user.svg";
import Logout from "@/assets/in-Use/logoutnavbar.svg";
import Useraccount from "@/assets/in-Use/useraccount.svg";
import Bell from "@/assets/in-Use/bell.svg";
import DefaultAvatar from "@/assets/in-Use/defaultUser.svg";

import { navLinks, subjects } from "@/utils/data";
import { slug } from "@/utils/logic";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubjectDropdown = () =>
    setIsSubjectDropdownOpen(!isSubjectDropdownOpen);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setIsSubjectDropdownOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const userName =
    session?.user?.name || session?.user?.email?.split("@")[0] || "User";
  const userImage = session?.user?.image || DefaultAvatar;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#2C3C68] px-4 md:px-10 mb-4">
        {/* Logo */}
        <div className="m-2 md:m-4">
          <Link href={"/"}>
            <MainLogo className="relative h-10 w-20 overflow-hidden text-white md:h-14 md:w-28" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="m-6 inline-flex gap-6 font-['Nunito'] text-lg font-bold text-white">
            {navLinks.map((link) =>
              link.title === "Curriculum" ? (
                <li key={link.index} className="group/sub relative">
                  <span className="button_text cursor-pointer">
                    {link.title}
                  </span>
                  <div className="flex max-h-0 flex-col overflow-hidden whitespace-nowrap rounded-lg bg-[#2C3D68] text-white transition-all group-hover/sub:max-h-fit group-hover/sub:p-2 min-[850px]:absolute">
                    {subjects.map((subject, index) => (
                      <Link
                        key={index}
                        href={`/subjects/${slug(subject.slug || subject.title)}`}
                        className={`px-2 py-2 ${
                          pathname.endsWith(slug(subject.slug || subject.title))
                            ? "text-primary"
                            : "hover:text-white"
                        }`}
                      >
                        {subject.title}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.index}>
                  <Link
                    href={link.link}
                    className={`${
                      pathname === link.link ? "text-primary" : ""
                    } button_text`}
                  >
                    {link.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-2 block rounded-md bg-[#FF8B13] p-2 md:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop User Section */}
        <div className="hidden md:block">
          {status === "authenticated" ? (
            <>
              {pathname.includes("/dashboard") ? (
                /* ---------- DASHBOARD HEADER ---------- */
                <div className="flex items-center gap-6">
                  <div
                    className="flex items-center gap-[6px]"
                    style={{
                      width: "224px",
                      height: "24px",
                      flex: "none",
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Nunito",
                        fontStyle: "italic",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "22px",
                        color: "#FF8B13",
                      }}
                    >
                      For support
                    </p>
                    <svg
                      className="w-[24px] h-[24px] text-[#FF8B13]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 4.11 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.72.36 1.42.7 2.06a1 1 0 0 1-.24 1.09L8.91 8.91a13.05 13.05 0 0 0 6.18 6.18l1.01-1.01a1 1 0 0 1 1.09-.24c.64.34 1.34.58 2.06.7a1 1 0 0 1 .75 1V21z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p
                      style={{
                        fontFamily: "Nunito",
                        fontStyle: "italic",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "22px",
                        color: "#FF8B13",
                      }}
                    >
                      96659 52556
                    </p>
                  </div>

                  {/* User name */}
                  <p
                    className="font-Nunito font-bold text-white"
                    style={{
                      width: "106px",
                      height: "25px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "25px",
                      letterSpacing: "-0.2px",
                      color: "#FFFFFF",
                      flex: "none",
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    {userName}
                  </p>

                  {/* Profile dropdown */}
                  <div className="relative group">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-white">
                        <Image
                          src={userImage}
                          alt="User Avatar"
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <DownArrow className="m-0 h-4 -rotate-90 cursor-pointer text-white transition-transform group-hover:rotate-90" />
                    </div>

                    <div className="absolute right-0 top-10 z-[100] hidden w-max flex-col gap-6 rounded-xl bg-[#FF8B13] p-2 group-hover:flex md:bg-[#2C3D68] md:px-4 md:py-3">
                      <Link
                        href={"/dashboard"}
                        className="flex w-full cursor-pointer items-center gap-5"
                      >
                        <Useraccount />
                        <h1 className="cursor-pointer text-lg text-white">
                          Dashboard
                        </h1>
                      </Link>
                      <div
                        onClick={() => signOut()}
                        className="flex w-full cursor-pointer items-center gap-5"
                      >
                        <Logout />
                        <h1 className="cursor-pointer text-lg text-white">
                          Logout
                        </h1>
                      </div>
                    </div>
                  </div>

                  {/* Bell icon */}
                  <div className="relative cursor-pointer">
                    <Bell className="h-6 w-6 text-[#89DAE5]" />
                    <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-[#FF8B13]" />
                  </div>
                </div>
              ) : (
                /* ---------- NON-DASHBOARD NAVBAR ---------- */
                <div className="flex items-center justify-between gap-2">
                  <div className="relative flex items-center">
                    <User className="mr-7 h-8 min-w-8 rounded-full bg-white p-1 text-[#FF8B13]" />
                    <div className="group absolute left-7 flex align-middle">
                      <DownArrow className="m-4 h-4 -rotate-90 cursor-pointer text-primary transition-all group-hover:rotate-90" />
                      <div className="absolute -right-4 top-10 z-[100] hidden w-max flex-col gap-6 rounded-xl bg-[#FF8B13] p-2 group-hover:flex md:bg-[#2C3D68] md:px-4 md:py-3">
                        <Link
                          href={"/dashboard"}
                          className="flex w-full cursor-pointer items-center gap-5"
                        >
                          <Useraccount />
                          <h1 className="cursor-pointer text-lg text-white">
                            Dashboard
                          </h1>
                        </Link>
                        <div
                          onClick={() => signOut()}
                          className="flex w-full cursor-pointer items-center gap-5"
                        >
                          <Logout />
                          <h1 className="cursor-pointer text-lg text-white">
                            Logout
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Login button */
            <Link
              href="/login"
              className="m-4 inline-flex flex-col items-start justify-center gap-2 overflow-hidden rounded-2xl bg-[#FF8B13] px-5 py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)]"
            >
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                <div className="justify-center text-center font-['Nunito'] text-lg font-black leading-normal text-white">
                  Login
                </div>
                <svg
                  className="relative h-5 w-5 overflow-hidden"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
                    stroke="white"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          )}
        </div>

        {/* ========== MOBILE DROPDOWN MENU ========== */}
        {isMenuOpen && (
          <div className="absolute left-0 top-[72px] z-50 w-full bg-[#2C3C68] md:hidden overflow-y-auto max-h-[calc(100vh-72px)]">
            <ul className="flex flex-col font-['Nunito'] text-lg font-bold text-white">

              {/* Nav Links */}
              {navLinks.map((link) =>
                link.title === "Curriculum" ? (
                  <li key={link.index} className="border-b border-white/20">
                    <button
                      onClick={toggleSubjectDropdown}
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                    >
                      {link.title}
                      <DownArrow
                        className={`h-4 w-4 text-white transition-transform duration-200 ${
                          isSubjectDropdownOpen ? "rotate-90" : "-rotate-90"
                        }`}
                      />
                    </button>

                    {isSubjectDropdownOpen && (
                      <ul className="bg-[#1e2d52] px-4 pb-2">
                        {subjects.map((subject, index) => (
                          <li key={index}>
                            <Link
                              href={`/subjects/${slug(
                                subject.slug || subject.title
                              )}`}
                              onClick={handleMobileLinkClick}
                              className={`block px-4 py-3 text-base ${
                                pathname.endsWith(
                                  slug(subject.slug || subject.title)
                                )
                                  ? "text-primary"
                                  : "text-white/80 hover:text-white"
                              }`}
                            >
                              {subject.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.index} className="border-b border-white/20">
                    <Link
                      href={link.link}
                      onClick={handleMobileLinkClick}
                      className={`block px-6 py-4 ${
                        pathname === link.link
                          ? "text-primary"
                          : "hover:text-white/80"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                )
              )}

              {/* Mobile Auth Section */}
              <li className="p-4">
                {status === "authenticated" ? (
                  <div className="flex flex-col gap-3">
                    {/* User info */}
                    <div className="flex items-center gap-3 px-2 pb-1">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-white">
                        <Image
                          src={userImage}
                          alt="User Avatar"
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="text-base font-bold text-white">
                        {userName}
                      </p>
                    </div>

                    {/* Support number (shown on dashboard mobile) */}
                    {pathname.includes("/dashboard") && (
                      <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3">
                        <svg
                          className="w-5 h-5 text-[#FF8B13]"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 4.11 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.72.36 1.42.7 2.06a1 1 0 0 1-.24 1.09L8.91 8.91a13.05 13.05 0 0 0 6.18 6.18l1.01-1.01a1 1 0 0 1 1.09-.24c.64.34 1.34.58 2.06.7a1 1 0 0 1 .75 1V21z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p
                          style={{
                            fontFamily: "Nunito",
                            fontStyle: "italic",
                            fontWeight: 700,
                            fontSize: "15px",
                            color: "#FF8B13",
                          }}
                        >
                          For support: 96659 52556
                        </p>
                      </div>
                    )}

                    {/* Dashboard link */}
                    <Link
                      href="/dashboard"
                      onClick={handleMobileLinkClick}
                      className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3"
                    >
                      <Useraccount />
                      <span className="text-white">Dashboard</span>
                    </Link>

                    {/* Logout */}
                    <button
                      onClick={() => {
                        signOut();
                        handleMobileLinkClick();
                      }}
                      className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3"
                    >
                      <Logout />
                      <span className="text-white">Logout</span>
                    </button>
                  </div>
                ) : (
                  /* Mobile Login Button */
                  <Link
                    href="/login"
                    onClick={handleMobileLinkClick}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF8B13] px-5 py-3"
                  >
                    <span className="font-['Nunito'] font-black text-white">
                      Login
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
                        stroke="white"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
        {/* ========== END MOBILE DROPDOWN ========== */}
      </nav>
    </>
  );
};

export default Navbar;