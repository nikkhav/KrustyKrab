import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MenuProps } from "../../components/MenuItem";
import {
  addItem,
  addItemPrice,
  increaseAmount,
} from "../../store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const ItemDetailedPage = () => {
  const { itemId } = useParams();
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.cart.order);
  const [item, setItem] = useState<MenuProps>({
    _id: "",
    title: "",
    description: "",
    image: "",
    price: 0,
    type: "",
  });

  const getItem = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/menu/${itemId}`
    );
    setItem(response.data.data["menuItem"]);
  };

  const handleAddItem = () => {
    dispatch(addItemPrice(item.price));
    if (order.find((dish: any) => dish.title === item.title)) {
      dispatch(increaseAmount(item.title));
    } else {
      dispatch(
        addItem({
          _id: item._id,
          title: item.title,
          price: item.price,
          image: item.image,
          amount: 1,
          type: item.type,
        })
      );
    }
  };

  useEffect(() => {
    getItem();
  });

  return (
    <div className={"flex sm:flex-row flex-col justify-around mt-20"}>
      <div className={"flex flex-col mx-10 sm:mb-28 mb-10"}>
        <img
          className={"h-96 w-96 rounded-xl"}
          src={item.image}
          alt={item.title}
        />
      </div>
      <div
        className={
          "flex flex-col h-80 w-84 mx-5 mb-28 p-2 items-center text-center"
        }
      >
        <h1 className={"text-5xl sm:mb-10 mb-5"}>{item.title}</h1>
        <p className={"text-2xl mb-10"}>{item.description}</p>
        <p className={"text-2xl sm:mb-10 mb-5"}>{item.price} рублей</p>
        <button
          onClick={handleAddItem}
          className={
            "rounded-2xl text-xl px-8 py-4 bg-amber-100 hover:bg-amber-200 mx-5 mt-10"
          }
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ItemDetailedPage;
