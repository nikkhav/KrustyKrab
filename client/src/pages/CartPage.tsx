import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  increaseAmount,
  removeItem,
  addItemPrice,
} from "../store/slices/cartSlice";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const cartValue = useAppSelector((state) => state.cart.value);
  const order = useAppSelector((state) => state.cart.order);
  const dispatch = useAppDispatch();

  // const addAmount = (title: string) => {
  //   dispatch(increaseAmount(title));
  // };

  return (
    <div>
      {/*{order.map((item: any) => (*/}
      {/*  <div*/}
      {/*    className={*/}
      {/*      "flex flex-row py-6 my-4 mx-auto border-y-2 border-gray-200 items-center justify-around"*/}
      {/*    }*/}
      {/*    key={item._id}*/}
      {/*  >*/}
      {/*    <div className={"flex sm:flex-row flex-col-reverse items-center"}>*/}
      {/*      <img*/}
      {/*        src={item.image}*/}
      {/*        alt={item.title}*/}
      {/*        className={"w-28 h-28 mx-6 rounded-2xl"}*/}
      {/*      />*/}
      {/*      <div className={"flex sm:flex-col flex-row px-4"}>*/}
      {/*        <h1 className={"text-2xl"}>{item.title} </h1>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className={"flex flex-col px-4"}>*/}
      {/*      <h1 className={"text-xl"}>{item.price} руб</h1>*/}
      {/*      <h1 className={"text-xl"}>Количество: {item.amount}</h1>*/}
      {/*      <div className={"flex flex-row justify-center"}>*/}
      {/*        <button*/}
      {/*          className={"px-4 py-1 mt-2 text-3xl"}*/}
      {/*          onClick={() => {*/}
      {/*            dispatch(increaseAmount(item.title));*/}
      {/*            dispatch(addItemPrice(item.price));*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          +*/}
      {/*        </button>*/}
      {/*        <button*/}
      {/*          className={"px-4 py-1 mt-2 text-5xl"}*/}
      {/*          onClick={() =>*/}
      {/*            dispatch(*/}
      {/*              removeItem({*/}
      {/*                title: item.title,*/}
      {/*                price: item.price,*/}
      {/*              })*/}
      {/*            )*/}
      {/*          }*/}
      {/*        >*/}
      {/*          -*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*))}*/}
      {order.map((item: any) => (
        <div
          className={
            "flex flex-row sm:w-9/12 sm:p-5 py-6 my-4 mx-auto border-y-2 border-gray-200 items-center sm:justify-between justify-around"
          }
          key={item._id}
        >
          <div className={"flex sm:flex-row flex-col-reverse items-center"}>
            <img
              src={item.image}
              alt={item.title}
              className={"sm:w-32 w-28 sm:h-32 h-28 mx-6 rounded-2xl"}
            />
            <div className={"flex sm:flex-col flex-row px-4"}>
              <h1 className={"text-2xl"}>{item.title} </h1>
              <h1 className={"text-xl hidden sm:visible"}>{item.price} руб</h1>
            </div>
          </div>
          <div className={"flex flex-col px-4"}>
            <h1 className={"text-xl sm:hidden visible"}>{item.price} руб</h1>
            <h1 className={"text-xl"}>Количество: {item.amount}</h1>
            <div className={"flex flex-row justify-center"}>
              <button
                className={"px-4 py-1 mt-2 text-3xl"}
                onClick={() => {
                  dispatch(increaseAmount(item.title));
                  dispatch(addItemPrice(item.price));
                }}
              >
                +
              </button>
              <button
                className={"px-4 py-1 mt-2 text-5xl"}
                onClick={() =>
                  dispatch(
                    removeItem({
                      title: item.title,
                      price: item.price,
                    })
                  )
                }
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
      {cartValue > 0 ? (
        <div className={"flex flex-col items-center"}>
          <h1 className={"text-3xl text-center my-10"}>
            Сумма заказа: {cartValue} рублей
          </h1>
          <NavLink to={"/checkout"}>
            <button
              className={
                "w-full mx-auto sm:mb-20 mb-10 p-4 bg-amber-100 rounded-xl"
              }
            >
              Оформить заказ
            </button>
          </NavLink>
        </div>
      ) : (
        <div className={"text-center"}>
          <h1 className={"text-5xl text-center"}>Корзина пуста</h1>
          <NavLink to={"/menu"}>
            <button
              className={
                "text-xl border-2 border-amber-100 hover:bg-amber-50 rounded-md px-2 py-2 mt-20"
              }
            >
              Вернуться в меню
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default CartPage;
