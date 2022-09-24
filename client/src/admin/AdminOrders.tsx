import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";
import axios from "axios";

export interface Order {
  _id: string;
  clientName: string;
  clientComment?: string;
  clientPhone?: string;
  clientAddress?: {
    street: string;
    house: string;
    flatAndFloor: string;
  };
  delivery: boolean;
  orderDate: string;
  orderTime: string;
  orderStatus: string;
  orderItems: {
    _id: string;
    amount: number;
    image: string;
    price: number;
    title: string;
    type: string;
  }[];
  orderTotal: number;
}

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [request, setRequest] = useState<string>(
    "http://127.0.0.1:4000/api/v1/admin/orders"
  );
  // If user is not logged in, redirect to login page
  const loggedIn = useAppSelector((state) => state.admin.loggedIn);
  const name = useAppSelector((state) => state.admin.name);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/admin/login");
    }
  }, [loggedIn]);

  const getOrders = async () => {
    const response = await axios.get(request);
    setOrders(response.data.data.orders);
  };
  // Orders state

  useEffect(() => {
    getOrders();
    const interval = setInterval(() => {
      getOrders();
    }, 5000);
    return () => clearInterval(interval);
  }, [request]);
  return (
    <div>
      <h1 className={"text-xl text-center sm:text-left mt-5 sm:ml-10"}>
        Здравствуйте, {name}
      </h1>
      <div className={"mx-auto text-center mt-20"}>
        <h1 className={"sm:text-5xl text-3xl font-mono text-center"}>Заказы</h1>
      </div>
      <div className={"flex flex-row justify-center mt-10"}>
        <button
          onClick={() =>
            setRequest("http://127.0.0.1:4000/api/v1/admin/orders")
          }
          className={
            "text-xl font-semibold mx-5 px-8 py-3 bg-amber-300 hover:bg-amber-400 rounded-3xl"
          }
        >
          Все
        </button>
        <button
          onClick={() =>
            setRequest("http://127.0.0.1:4000/api/v1/admin/orders/byStatus/new")
          }
          className={
            "text-xl font-semibold mx-5 px-5 py-3 bg-amber-300 hover:bg-amber-400 rounded-3xl"
          }
        >
          Новые
        </button>
        <button
          onClick={() =>
            setRequest(
              "http://127.0.0.1:4000/api/v1/admin/orders/byStatus/processed"
            )
          }
          className={
            "text-xl font-semibold mx-5 px-5 py-3 bg-amber-300 hover:bg-amber-400 rounded-3xl"
          }
        >
          В работе
        </button>
        <button
          onClick={() =>
            setRequest(
              "http://127.0.0.1:4000/api/v1/admin/orders/byStatus/completed"
            )
          }
          className={
            "text-xl font-semibold mx-5 px-5 py-3 bg-amber-300 hover:bg-amber-400 rounded-3xl"
          }
        >
          Выполненные
        </button>
        <button
          onClick={() =>
            setRequest(
              "http://127.0.0.1:4000/api/v1/admin/orders/byStatus/canceled"
            )
          }
          className={
            "text-xl font-semibold mx-5 px-5 py-3 bg-amber-300 hover:bg-amber-400 rounded-3xl"
          }
        >
          Отменённые
        </button>
      </div>
      <div className={"flex flex-col-reverse p-10 pt-5 mx-auto mt-5"}>
        {orders.map((order) => (
          <div
            onClick={() => navigate(`/admin/orders/${order._id}`)}
            key={order._id}
            className={
              "flex flex-col flex-wrap justify-evenly items-center border-2 rounded-xl mt-5 p-10 pt-5 hover:bg-gray-100 cursor-pointer"
            }
          >
            <div className={"flex flex-row"}>
              {order.delivery ? (
                <h2 className={"text-2xl font-bold"}>Доставка</h2>
              ) : (
                <h2 className={"text-2xl font-bold"}>С собой</h2>
              )}

              <FiArrowDown className={"text-2xl mt-1 ml-4"} />
            </div>
            <div className={"flex sm:flex-row flex-col items-center"}>
              <h2 className={"text-2xl text-center pt-2 px-4"}>
                Имя клиента : {order.clientName}
              </h2>
              <h2 className={"text-2xl text-center pt-2 px-4"}>
                Позиций: {order.orderItems.length}
              </h2>
              <h2 className={"text-2xl text-center pt-2 px-4"}>
                Сумма: {order.orderTotal} руб.
              </h2>
              {order.clientComment && (
                <h2 className={"text-2xl text-center pt-2 px-4"}>
                  Комментарий: {order.clientComment}
                </h2>
              )}
              {order.clientPhone && (
                <h2 className={"text-2xl text-center pt-2 px-4"}>
                  Телефон: {order.clientPhone}
                </h2>
              )}
            </div>
            <div className={"flex sm:flex-row sm:pt-5 flex-col items-center"}>
              <h2 className={"text-2xl pt-2 px-4"}>
                Статус: {""}
                {order.orderStatus === "completed" ? "Выполнен ✅" : ""}
                {order.orderStatus === "processed" ? "В работе 🧑‍🍳" : ""}
                {order.orderStatus === "canceled" ? "Отменен ❌" : ""}
                {order.orderStatus === "new" ? "Новый 🆕" : ""}
              </h2>
              <h2 className={"text-2xl text-center pt-2 px-4"}>
                Дата: {order.orderDate}
              </h2>
              <h2 className={"text-2xl text-center pt-2 px-4"}>
                Время: {order.orderTime}
              </h2>
              {order.clientAddress && (
                <h2 className={"text-xl text-center pt-2 px-4"}>
                  Адрес:{" "}
                  {order.clientAddress?.street +
                    ", дом " +
                    order.clientAddress?.house +
                    ", этаж и квартира: " +
                    order.clientAddress?.flatAndFloor}
                </h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
