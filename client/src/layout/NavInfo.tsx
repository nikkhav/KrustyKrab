import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { MdShoppingBag } from "react-icons/md";

const NavInfo = () => {
  const cartValue = useAppSelector((state) => state.cart.value);
  return (
    <Fragment>
      <div
        className={
          "sm:flex flex-row-reverse sm:visible hidden sm:pt-2 sm:px-6 px-2.5 text-sm"
        }
      >
        <h1>Москва, дом Пушкина 12</h1>
        <h1 className={"pr-5"}>+7 (999) 888-77-66</h1>
        <h1 className={"pr-5 text-red-600 underline animate-pulse"}>
          Бесплатная доставка с 10:00 до 22:00
        </h1>
      </div>
      <div className={"flex justify-center sm:justify-between"}>
        <NavLink
          to={"/"}
          className={
            "sm:text-4xl text-2xl sm:text-left sm:ml-10 mt-3 sm:mb-4 mr-6 font-mono font-bold text-red-600"
          }
        >
          Krusty Krab 🦀
        </NavLink>
        <NavLink to={"/cart"} className={"sm:mr-20 mt-3 text-2xl"}>
          <div className={"flex flex-row"}>
            <MdShoppingBag className={"mt-1 mr-2"} /> {cartValue} руб
          </div>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default NavInfo;
