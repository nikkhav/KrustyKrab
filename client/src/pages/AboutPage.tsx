import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  // Можно добавить яндекс карту
  return (
    <div
      className={
        "flex flex-col justify-center items-center sm:w-7/12 w-10/12 mt-5 sm:mt-0 mx-auto"
      }
    >
      <div className={"w-full sm:h-12"} />
      <h1 className={"text-5xl font-bold mb-4 text-red-600"}>Krusty Krab</h1>
      <p className={"text-3xl text-center font-thin"}>
        Здесь мясо от лучших российских производителей. Готовим только в
        хоспере. Имеются блюда из серии «все по делу, ничего лишнего», а есть и
        более сложные авторские позиции и что-то совсем нетривиальное.
      </p>
      <button
        onClick={() => navigate("/menu")}
        className={
          "bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-2xl mt-10"
        }
      >
        Сделать заказ
      </button>
    </div>
  );
};

export default AboutPage;
