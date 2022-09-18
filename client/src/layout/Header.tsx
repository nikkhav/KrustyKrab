import React from "react";
import NavBar from "./NavBar";
import NavInfo from "./NavInfo";

const Header = () => {
  return (
    <header className={"flex flex-col fixed w-full sm:h-44 h-24 z-10 bg-white"}>
      <NavInfo />
      <NavBar />
    </header>
  );
};

export default Header;
