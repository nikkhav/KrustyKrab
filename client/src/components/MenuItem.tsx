import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addItem,
  addItemPrice,
  increaseAmount,
} from "../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export interface MenuProps {
  title: string;
  price: number;
  image: string;
  type: string;
  description: string;
  _id: string;
}

const MenuItem: React.FC<MenuProps> = ({ title, price, image, _id, type }) => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.cart.order);

  const navigate = useNavigate();

  const handleAddItem = () => {
    dispatch(addItemPrice(price));
    if (order.find((item: any) => item.title === title)) {
      dispatch(increaseAmount(title));
    } else {
      dispatch(addItem({ _id, title, price, image, amount: 1, type }));
    }
  };
  return (
    <div className={"flex flex-col h-80 w-72 mx-5 mb-28 p-2 items-center"}>
      <img
        className={"h-72 w-72 rounded-xl :hover cursor-pointer"}
        src={image}
        alt={"Фото блюда"}
        onClick={() => navigate(`/menu/${_id}`)}
      />
      <h1 className={"mt-2.5 py-2 text-xl text-center"}>{title}</h1>

      <p className={""}>{price} руб</p>
      <button
        onClick={handleAddItem}
        className={
          "border-2 border-amber-100 hover:bg-amber-50 rounded-md px-2 py-2 mt-2.5"
        }
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default MenuItem;
