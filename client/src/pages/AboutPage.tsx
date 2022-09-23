import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";

const AboutPage = () => {
  const navigate = useNavigate();
  // Можно добавить яндекс карту
  return (
    <Fragment>
      <Header />
      <div
        className={
          "flex flex-col justify-center items-center sm:w-7/12 w-10/12 mt-5 sm:mt-0 mx-auto"
        }
      >
        <div className={"w-full sm:h-12"} />
        <h1 className={"text-5xl font-bold mb-4 text-red-600"}>Krusty Krab</h1>
        <p className={"sm:text-3xl text-2xl text-center font-thin"}>
          Здесь мясо от лучших российских производителей. Готовим только в
          хоспере. Имеются блюда из серии «все по делу, ничего лишнего», а есть
          и более сложные авторские позиции и что-то совсем нетривиальное.
        </p>
        <button
          onClick={() => navigate("/menu")}
          className={
            "bg-green-400 hover:bg-green-500 text-white text-xl font-bold py-4 px-6 rounded-3xl mt-10"
          }
        >
          Сделать заказ
        </button>
      </div>
    </Fragment>
  );
};

export default AboutPage;
