import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={"md:px-10 px-4 py-3 sm:mt-2 flex flex-row justify-center "}>
      <NavLink
        to={"/menu"}
        className={
          "block sm:px-8 sm:px-3 sm:text-2xl font-light tracking-wide hover:text-[#C4D7E0]"
        }
      >
        Меню
      </NavLink>
      <p className={"sm:text-2xl sm:px-6 px-2"}>|</p>
      <NavLink
        to={"/about"}
        className={
          "block sm:px-2 md:px-3 sm:text-2xl font-light tracking-wide hover:text-[#C4D7E0]"
        }
      >
        О нас
      </NavLink>
      <p className={"sm:text-2xl sm:px-6 px-2"}>|</p>
      <NavLink
        to={"/contact"}
        className={
          "block sm:px-8 sm:px-3 sm:text-2xl font-light tracking-wide hover:text-[#C4D7E0]"
        }
      >
        Контакты
      </NavLink>
      <p className={"sm:text-2xl sm:px-6 px-2"}>|</p>
      <NavLink
        to={"/delivery"}
        className={
          "block sm:px-8 sm:px-3 sm:text-2xl font-light tracking-wide hover:text-[#C4D7E0]"
        }
      >
        Доставка
      </NavLink>
    </div>
  );
};

export default NavBar;
