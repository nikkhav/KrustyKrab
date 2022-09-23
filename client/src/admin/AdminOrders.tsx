import React, { useEffect, useState, Fragment } from "react";
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
    const response = await axios.get(
      "http://127.0.0.1:4000/api/v1/admin/orders"
    );
    setOrders(response.data.data.orders);
  };
  // Orders are fetched in AdminOrdersList component
  // Orders state

  useEffect(() => {
    setInterval(() => {
      getOrders();
    }, 5000);
  }, []);
  return (
    <div>
      <h1 className={"text-xl mt-5 ml-10"}>Здравствуйте, {name}</h1>
      <div className={"mx-auto text-center mt-20"}>
        <h1 className={"sm:text-5xl text-3xl font-mono text-center"}>Заказы</h1>
      </div>
      <div className={"flex flex-col-reverse p-10 mx-auto mt-5"}>
        {orders.map((order) => (
          <div
            onClick={() => navigate(`/admin/orders/${order._id}`)}
            key={order._id}
            className={
              "flex flex-col flex-wrap justify-evenly items-center border-2 rounded-xl mt-5 p-10 hover:bg-gray-100 cursor-pointer"
            }
          >
            <div className={"flex flex-row"}>
              <h2 className={"text-xl pb-4 font-medium tracking-wider"}>
                {order.delivery ? (
                  <h2 className={"text-2xl font-bold"}>Доставка</h2>
                ) : (
                  <h2 className={"text-2xl font-bold"}>С собой</h2>
                )}
              </h2>
              <FiArrowDown className={"text-2xl mt-1 ml-4"} />
            </div>
            <div className={"flex flex-row"}>
              <h2 className={"text-2xl pt-2 px-4"}>
                Имя клиента : {order.clientName}
              </h2>
              <h2 className={"text-2xl pt-2 px-4"}>
                Позиций: {order.orderItems.length}
              </h2>
              <h2 className={"text-2xl pt-2 px-4"}>
                Сумма: {order.orderTotal} руб.
              </h2>
              {order.clientComment && (
                <h2 className={"text-2xl pt-2 px-4"}>
                  Комментарий: {order.clientComment}
                </h2>
              )}
              {order.clientPhone && (
                <h2 className={"text-2xl pt-2 px-4"}>
                  Телефон: {order.clientPhone}
                </h2>
              )}
            </div>
            <div className={"flex flex-row"}>
              <h2 className={"text-2xl pt-2 px-4"}>
                Статус: {order.orderStatus}
              </h2>
              <h2 className={"text-2xl pt-2 px-4"}>Дата: {order.orderDate}</h2>
              <h2 className={"text-2xl pt-2 px-4"}>Время: {order.orderTime}</h2>
              {order.clientAddress && (
                <h2 className={"text-xl pt-2 px-4"}>
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
