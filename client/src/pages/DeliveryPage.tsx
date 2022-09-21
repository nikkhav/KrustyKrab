import React from "react";
import { useNavigate } from "react-router-dom";

const DeliveryPage = () => {
  const navigate = useNavigate();
  return (
    <div className={" w-10/12 mx-auto px-10 py-10 sm:mt-10"}>
      <div className={"flex flex-row justify-center "}>
        <h1 className={"text-5xl font-extrabold text-red-700"}>Доставка</h1>
      </div>
      <div className={"flex flex-row justify-around "}>
        <div className={"flex flex-col mt-5 justify-center items-center"}>
          {/*<h2 className={"sm:text-2xl text-xl text-center font-thin pt-3"}>*/}
          {/*  Телефон: +7 495 123 45 67*/}
          {/*</h2>*/}
          <a
            href={"tel:+7 495 123 45 67"}
            className={"sm:text-3xl text-xl text-center font-thin pt-3"}
          >
            Вы можете сделать заказ по телефону:
            <br />
            <span className={"underline"}>+7 495 123 45 67</span>
          </a>
          <h2 className={"sm:text-3xl text-xl text-center font-thin pt-3"}>
            Или на нашем сайте
          </h2>
          <h2 className={"sm:text-2xl text-xl text-center pt-5"}>
            Мы работаем с 10:00 до 22:00
          </h2>
          <h2 className={"sm:text-2xl text-xl text-center"}>Без выходных</h2>
        </div>
      </div>
      <div className={"flex flex-row justify-around "}>
        <button
          onClick={() => {
            navigate("/menu");
          }}
          className={
            "text-2xl text-white bg-green-400 hover:bg-green-500 rounded-3xl py-2 px-6 mb-8 mt-10"
          }
        >
          Посмотреть меню
        </button>
      </div>
    </div>
  );
};

export default DeliveryPage;
