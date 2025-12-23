"use client";
import Link from "next/link";
import React from "react";

const ClientLink = ({ children, href, className }) => {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};

export default ClientLink;
