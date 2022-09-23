import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { Order } from "./AdminOrders";
import axios from "axios";

const AdminOrderDetailed = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState<Order>({
    _id: "",
    clientName: "",
    clientComment: "",
    clientPhone: "",
    clientAddress: {
      street: "",
      house: "",
      flatAndFloor: "",
    },
    delivery: true,
    orderDate: "",
    orderTime: "",
    orderStatus: "",
    orderItems: [
      {
        _id: "",
        amount: 0,
        image: "",
        price: 0,
        title: "",
        type: "",
      },
    ],
    orderTotal: 0,
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/api/v1/admin/orders/${orderId}`)
      .then((res) => {
        setOrder(res.data.data.order);
      });
  }, [orderId]);
  return (
    <div>
      <div className={"flex justify-center items-center"}>
        <NavLink
          className={
            "mx-auto text-center rounded-3xl text-2xl text-white bg-red-500 mt-10 px-10 py-2"
          }
          to={"/admin/orders"}
        >
          Назад
        </NavLink>
      </div>
      <div
        className={
          "flex flex-col w-10/12 mx-auto bg-orange-50 mt-20 mb-20 p-10 rounded-xl"
        }
      >
        <div className={"flex flex-row mx-auto mt-20"}>
          <h1 className={"text-3xl"}>Заказ №{order._id}</h1>
          <h1 className={"text-3xl ml-10"}>Статус: {order.orderStatus}</h1>
        </div>
        <div className={"flex flex-row mx-auto mt-8"}>
          <div
            className={
              "flex flex-col items-center justify-center mx-10 p-10 rounded-2xl bg-gray-100"
            }
          >
            {order.orderItems.map((item) => (
              <div
                className={"flex flex-row w-full py-4 border border-b-gray-400"}
              >
                <h1 className={"text-2xl pl-5"}>{item.title}</h1>
                <h1 className={"text-2xl pl-5"}>{item.amount} шт.</h1>
                <h1 className={"text-2xl pl-5"}>{item.price} руб.</h1>
              </div>
            ))}
            <h2 className={"text-2xl pt-5"}>Итого: {order.orderTotal} руб.</h2>
          </div>
          <div
            className={
              "flex flex-col w-full justify-center items-center mx-10 p-5 rounded-2xl bg-amber-100"
            }
          >
            <h2 className={"text-2xl font-light"}>
              Клиент: {order.clientName}
            </h2>
            {order.clientPhone && (
              <h2 className={"text-2xl font-light"}>
                Телефон: {order.clientPhone}
              </h2>
            )}
            {order.clientComment && (
              <h2 className={"text-2xl font-light"}>
                Комментарий: {order.clientComment}
              </h2>
            )}
            {order.clientAddress?.street && (
              <h2 className={"text-xl text-center pt-2 px-4"}>
                Адрес: улица{" "}
                {order.clientAddress?.street +
                  ", дом " +
                  order.clientAddress?.house +
                  ", этаж и квартира: " +
                  order.clientAddress?.flatAndFloor}
              </h2>
            )}
            <h2 className={"text-xl pt-2 px-4"}>
              {order.delivery ? "Доставка" : "С собой"}
            </h2>
            <h2 className={"text-xl pt-2 px-4"}>
              Дата заказа: {order.orderDate}
            </h2>
            <h2 className={"text-xl pt-2 px-4"}>
              Время заказа: {order.orderTime}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
  // TODO: add order status change and delete order
};

export default AdminOrderDetailed;
