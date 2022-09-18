import React from "react";
import { useAppDispatch } from "../store/hooks";
import { addItemPrice } from "../store/slices/cartSlice";

interface MenuProps {
  title: string;
  price: number;
  image: string;
  type: string;
  description?: string;
}

const MenuCard: React.FC<MenuProps> = ({ title, price, image }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={"flex flex-col h-80 w-72 mx-5 my-8 p-2 items-center"}>
      <img
        className={"h-52 w-full rounded-xl"}
        src={image}
        alt={"Фото блюда"}
      />
      <h1 className={"mt-2.5 py-2 text-xl"}>{title}</h1>

      <p className={""}>{price} руб</p>
      <button
        onClick={() => dispatch(addItemPrice(price))}
        className={
          "border-2 border-amber-100 hover:bg-amber-50 rounded-md px-2 py-2 mt-2.5"
        }
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default MenuCard;
