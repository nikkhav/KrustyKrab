import React from "react";
import NavBar from "./NavBar";
import NavInfo from "./NavInfo";

const Header = () => {
  return (
    <header className={"flex flex-col w-full sm:h-40 h-24 z-10 bg-white"}>
      <NavInfo />
      <NavBar />
    </header>
  );
};

export default Header;
