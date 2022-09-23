import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { MenuProps } from "../../components/MenuItem";
import MenuItem from "../../components/MenuItem";
import Header from "../../layout/Header";

const MenuPage = () => {
  const [menu, setMenu] = useState<[]>([]);

  const getMenu = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/menu");
    setMenu(response.data.data["menuItems"]);
  };

  const getMenuByType = async (type: string) => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/menu/byCategory/${type}`
    );
    setMenu(response.data.data["menuItems"]);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={"flex flex-col"}>
        <div className={"w-full sm:h-16"} />
        <div className={"flex flex-row flex-wrap justify-center mb-10"}>
          <button
            className={
              "rounded-3xl sm:text-xl px-8 py-2 bg-amber-100 hover:bg-amber-200 sm:mx-5 mx-2 mt-2.5 sm:mt-0"
            }
            onClick={() => getMenu()}
          >
            Все
          </button>
          <button
            className={
              "rounded-3xl sm:text-xl px-5 py-2 bg-amber-100 hover:bg-amber-200 sm:mx-5 mx-2 mt-2.5 sm:mt-0"
            }
            onClick={() => getMenuByType("pizza")}
          >
            Пицца
          </button>
          <button
            className={
              "rounded-3xl sm:text-xl px-5 py-2 bg-amber-100 hover:bg-amber-200 sm:mx-5 mx-2 mt-2.5 sm:mt-0"
            }
            onClick={() => getMenuByType("sushi")}
          >
            Суши
          </button>
          <button
            className={
              "rounded-3xl sm:text-xl px-5 py-2 bg-amber-100 hover:bg-amber-200 sm:mx-5 mx-2 mt-2.5 sm:mt-0"
            }
            onClick={() => getMenuByType("salad")}
          >
            Салаты
          </button>
          <button
            className={
              "rounded-3xl sm:text-xl px-5 py-2 bg-amber-100 hover:bg-amber-200 sm:mx-5 mx-2 mt-2.5 sm:mt-0"
            }
            onClick={() => getMenuByType("burger")}
          >
            Бургеры
          </button>
          <button
            className={
              "rounded-3xl sm:text-xl px-5 py-2 bg-amber-100 hover:bg-amber-200 sm:mx-5 mx-2 mt-2.5 sm:mt-0"
            }
            onClick={() => getMenuByType("drink")}
          >
            Напитки
          </button>
        </div>
        <div className={"flex flex-row flex-wrap justify-evenly"}>
          {menu.map((item: MenuProps) => (
            <MenuItem
              _id={item._id}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              type={item.type}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default MenuPage;
