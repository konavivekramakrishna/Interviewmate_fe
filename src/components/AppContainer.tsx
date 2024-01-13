import React from "react";
import { NavBar } from "./NavBar";

export const AppContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      <NavBar />
      <div className="flex flex-col mt-10 justify-between items-center w-full">
        {props.children}
      </div>
    </div>
  );
}
