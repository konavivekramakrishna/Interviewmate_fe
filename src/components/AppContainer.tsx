import React from "react";
import { NavBar } from "./NavBar";

export const AppContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      <NavBar />
      <div className="w-full mx-auto bg-white mt-12 justify-center rounded-xl">
        {props.children}
      </div>
    </div>
  );
}
