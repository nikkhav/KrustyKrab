import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavInfo = () => {
  return (
    <Fragment>
      <div
        className={
          "sm:flex flex-row-reverse sm:visible hidden sm:pt-2 sm:px-6 px-2.5 text-sm"
        }
      >
        <h1>Москва, дом Пушкина 12</h1>
        <h1 className={"pr-5"}>+7 (999) 888-77-66</h1>
        <h1 className={"pr-5 text-red-600 underline"}>
          Бесплатная доставка с 10:00 до 22:00
        </h1>
      </div>
      <div className={"flex justify-center sm:justify-start"}>
        <NavLink
          to={"/"}
          className={
            "text-3xl sm:text-left  sm:ml-10 mt-3 sm: mb-4 mr-6 font-mono text-red-600"
          }
        >
          Krusty Krab 🦀
        </NavLink>
      </div>
    </Fragment>
  );
};

export default NavInfo;
