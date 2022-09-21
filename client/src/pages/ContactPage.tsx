import React from "react";

const ContactPage = () => {
  return (
    <div className={" w-10/12 mx-auto px-10 py-10 sm:mt-10"}>
      <div className={"flex flex-row justify-center "}>
        <h1 className={"text-5xl font-extrabold text-red-700"}>Контакты</h1>
      </div>
      <div className={"flex flex-row justify-around "}>
        <div className={"flex flex-col mt-5 justify-center items-center"}>
          <h2 className={"sm:text-2xl text-xl font-thin text-center"}>
            Вы можете найти нас по адресу: г. Москва, ул. Ленина, д. 1
          </h2>
          {/*<h2 className={"sm:text-2xl text-xl text-center font-thin pt-3"}>*/}
          {/*  Телефон: +7 495 123 45 67*/}
          {/*</h2>*/}
          <a
            href={"tel:+7 495 123 45 67"}
            className={"sm:text-2xl text-xl text-center font-thin pt-3"}
          >
            Телефон: <span className={"underline"}>+7 495 123 45 67</span>
          </a>
          <h2 className={"sm:text-2xl text-xl text-center font-thin pt-3"}>
            Почта: test@gmail.com
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
            window.open(
              "https://yandex.com/maps/213/moscow/geo/zhiloy_kompleks_grin_park/1636558910/?ll=37.621134%2C55.852374&z=15.5",
              "_blank"
            );
          }}
          className={
            "text-2xl text-white bg-red-500 hover:bg-red-600 rounded-3xl py-2 px-4 mb-8 mt-10"
          }
        >
          Найти нас на Яндекс картах
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
