import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="h-10 w-full p-4 flex items-center justify-between text-white bg-blue-500">
      <a href="/">
        <p>QuickFolio</p>
      </a>
      <div className="flex gap-4 items-center justify-center">
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </div>
    </div>
  );
};
