import React from "react";

const CheckoutPage = () => {
  return (
    <div
      className={
        "flex flex-col w-10/12 mx-auto mt-10 items-center justify-center"
      }
    >
      <h1 className={"text-2xl font-semibold"}>Осталось ещё чу-чуть..</h1>
      <form className={"bg-amber-100 px-64 pb-12 rounded-3xl"}>
        <div className={"flex flex-col mx-auto mt-10 justify-center"}>
          <label className={"text-xl"} htmlFor="name">
            Имя
          </label>
          <input
            className={"rounded-2xl px-4 h-10"}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className={"flex flex-col mx-auto mt-5 justify-center"}>
          <label className={"text-xl"} htmlFor="email">
            Email
          </label>
          <input
            className={"rounded-2xl px-4 h-10"}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className={"flex flex-col mx-auto mt-5 justify-center"}>
          <label className={"text-xl"} htmlFor="address">
            Адрес
          </label>
          <input
            className={"rounded-2xl px-4 h-10 w-96"}
            type="text"
            id="address"
            name="address"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
