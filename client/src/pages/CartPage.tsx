import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeItem } from "../store/slices/cartSlice";

const CartPage = () => {
  const cartValue = useAppSelector((state) => state.cart.value);
  const order = useAppSelector((state) => state.cart.order);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Cart {cartValue} руб</h1>
      {order.map((item: any) => (
        <div key={item.id}>
          <h1>TEST ID: {item.id}</h1>
          <h1>TEST TITLE: {item.title}</h1>
          <h1>TEST PRICE: {item.price}</h1>
          <h1>
            TEST IMAGE:
            {<img src={item.image} alt={item.title} className={"w-20 h-20"} />}
          </h1>
          <h1>TEST AMOUNT: {item.amount}</h1>
          <button
            className={"bg-red-500"}
            onClick={() =>
              dispatch(
                removeItem({
                  title: item.title,
                  price: item.price,
                })
              )
            }
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
