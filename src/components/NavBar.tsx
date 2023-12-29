import React from "react";
import { ActiveLink } from "raviger";

export const NavBar = () => {
  return (
    <div className="flex flex-col bg-slate-700 p-2 mr-2 justify-between w-full fixed">
      <div className="flex gap-2 items-center text-white">
        <h2 className="flex items-center p-2 mx-2 rounded-lg font-extrabold">
          Interview Mate
        </h2>
        <div className="flex flex-row">
          <ActiveLink
            href="/"
            className="flex items-center justify-center p-2 mx-1 text-gray-900 rounded-lg dark:text-white dark:hover:bg-slate-900 group"
            exactActiveClass="border border-slate-200"
          >
            <span className="flex-1 whitespace-nowrap font-custom">Home</span>
          </ActiveLink>
          <ActiveLink
            href="/about"
            className="flex items-center p-2 mx-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-slate-900 group"
            exactActiveClass="border border-slate-200"
          >
            <span className="flex-1 whitespace-nowrap font-custom">About</span>
          </ActiveLink>
        </div>
      </div>
    </div>
  );
};