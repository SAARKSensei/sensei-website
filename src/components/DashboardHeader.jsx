"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import MainLogo from "@/assets/in-Use/mainlogo.svg";
import Bell from "@/assets/in-Use/bell.svg"; // notification icon (you can replace)
import DefaultAvatar from "@/assets/in-Use/defaultUser.svg"; // fallback profile image

const DashboardHeader = () => {
  const { data: session } = useSession();
  const userName =
    session?.user?.name ||
    session?.user?.email?.split("@")[0] ||
    "User";

  const userImage = session?.user?.image || DefaultAvatar;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#2C3D68] px-10 md:px-20 py-4 shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center">
        <MainLogo className="h-10 w-auto" />
      </div>

      {/* Right: User info and icons */}
      <div className="flex items-center gap-8">
        {/* Greeting */}
        <div className="flex flex-col text-right">
          <p className="text-lg font-nunito font-bold text-white leading-tight">
            Hello, <span className="text-[#FF8B13]">{userName}</span> 👋
          </p>
        </div>

        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <Bell className="h-6 w-6 text-[#89DAE5]" />
          <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-[#FF8B13]" />
        </div>

        {/* User Profile */}
        <div className="h-10 w-10 overflow-hidden rounded-full bg-white">
          <Image
            src={userImage}
            alt="User Avatar"
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
