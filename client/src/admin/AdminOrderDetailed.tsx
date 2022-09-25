import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { Order } from "./AdminOrders";
import axios from "axios";

const AdminOrderDetailed = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
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

  const getOrder = async () => {
    axios
      //.get(`http://127.0.0.1:4000/api/v1/admin/orders/${orderId}`)
      .get(`/api/v1/admin/orders/${orderId}`)
      .then((res) => {
        setOrder(res.data.data.order);
      });
  };

  useEffect(() => {
    getOrder();
    const interval = setInterval(() => {
      getOrder();
    }, 5000);
    return () => clearInterval(interval);
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
          "flex flex-col sm:w-10/12 items-center mx-auto bg-orange-50 mt-20 mb-20 p-10 rounded-xl"
        }
      >
        <div className={"flex sm:flex-row flex-col mx-auto mt-20"}>
          <h1 className={"sm:text-3xl text-2xl text-center"}>
            Заказ №{order._id}
          </h1>
          <h1
            className={
              "sm:text-3xl text-2xl sm:ml-10 mt-3.5 sm:mt-0 text-center"
            }
          >
            Статус: {order.orderStatus === "completed" ? "Выполнен ✅" : ""}
            {order.orderStatus === "processed" ? "В работе 🧑‍🍳" : ""}
            {order.orderStatus === "canceled" ? "Отменен ❌" : ""}
            {order.orderStatus === "new" ? "Новый 🆕" : ""}
          </h1>
        </div>
        <div className={"flex sm:flex-row flex-col mx-auto mt-8"}>
          <div
            className={
              "flex flex-col items-center justify-center lg:mx-10 p-10 rounded-2xl bg-gray-100"
            }
          >
            {order.orderItems.map((item) => (
              <div
                className={
                  "flex sm:flex-row flex-col w-full py-4 border border-b-gray-400"
                }
                key={item._id}
              >
                <h1 className={"text-2xl text-center sm:pl-5"}>{item.title}</h1>
                <h1 className={"text-2xl text-center sm:pl-5"}>
                  {item.amount} шт.
                </h1>
                <h1 className={"text-2xl text-center sm:pl-5"}>
                  {item.price} руб.
                </h1>
              </div>
            ))}
            <h2 className={"text-2xl text-center pt-5"}>
              Итого: {order.orderTotal} руб.
            </h2>
          </div>
          <div
            className={
              "flex flex-col justify-center items-center mx-10 p-5 rounded-2xl bg-amber-100"
            }
          >
            <h2 className={"text-2xl font-light text-center"}>
              Клиент: {order.clientName}
            </h2>
            {order.clientPhone && (
              <h2 className={"text-2xl font-light pt-4 text-center"}>
                Телефон: {order.clientPhone}
              </h2>
            )}
            {order.clientComment && (
              <h2 className={"text-2xl font-light pt-4 text-center"}>
                Комментарий: {order.clientComment}
              </h2>
            )}
            {order.clientAddress?.street && (
              <h2 className={"text-xl text-center pt-4 px-4"}>
                Адрес: улица{" "}
                {order.clientAddress?.street +
                  ", дом " +
                  order.clientAddress?.house +
                  ", этаж и квартира: " +
                  order.clientAddress?.flatAndFloor}
              </h2>
            )}
            <h2 className={"text-xl text-center pt-4 px-4"}>
              {order.delivery ? "Доставка" : "С собой"}
            </h2>
            <h2 className={"text-xl text-center pt-4 px-4"}>
              Дата заказа: {order.orderDate}
            </h2>
            <h2 className={"text-xl text-center pt-4 px-4"}>
              Время заказа: {order.orderTime}
            </h2>
          </div>
        </div>
        <div className={"flex sm:flex-row flex-col mx-auto mt-8"}>
          <h2 className={"text-2xl text-center"}>Изменить статус заказа</h2>
        </div>
        <div className={"flex sm:flex-row flex-col mx-auto mt-8"}>
          <button
            onClick={() => {
              axios.patch(
                //`http://127.0.0.1:4000/api/v1/admin/orders/${orderId}`,
                `/api/v1/admin/orders/${orderId}`,
                {
                  orderStatus: "completed",
                }
              );
            }}
            className={
              "text-xl text-white px-4 mx-2 my-2 sm:my-0 py-2 bg-green-500 hover:bg-green-600 rounded-xl"
            }
          >
            Выполнен
          </button>
          <button
            onClick={() => {
              axios.patch(
                //`http://127.0.0.1:4000/api/v1/admin/orders/${orderId}`,
                `/api/v1/admin/orders/${orderId}`,
                {
                  orderStatus: "processed",
                }
              );
            }}
            className={
              "text-xl px-4 mx-2 my-2 sm:my-0 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-xl"
            }
          >
            В работе
          </button>
          <button
            onClick={() => {
              axios.patch(
                //`http://127.0.0.1:4000/api/v1/admin/orders/${orderId}`,
                `/api/v1/admin/orders/${orderId}`,
                {
                  orderStatus: "canceled",
                }
              );
            }}
            className={
              "text-xl text-white px-4 my-2 sm:my-0 mx-2 py-2 bg-black hover:bg-gray-800 rounded-xl"
            }
          >
            Отменён
          </button>

          <button
            onClick={async () => {
              const response = await axios.delete(
                //`http://127.0.0.1:4000/api/v1/admin/orders/${orderId}`
                `/api/v1/admin/orders/${orderId}`
              );
              if (response.status === 204) {
                navigate("/admin/orders");
              }
            }}
            className={
              "text-xl text-white px-4 mx-2 my-2 sm:my-0 py-2 bg-red-600 hover:bg-red-700 rounded-xl"
            }
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetailed;
