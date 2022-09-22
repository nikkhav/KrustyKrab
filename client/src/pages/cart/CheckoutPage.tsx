import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [delivery, setDelivery] = useState<boolean>(true);
  const cartValue = useAppSelector((state) => state.cart.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartValue == 0) {
      console.log("cart is empty");
      navigate("/");
    }
  });

  interface IFormData {
    name: string;
    phone: string;
    street: string;
    house: string;
    flatAndFloor: string;
    comment: string;
  }

  const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);
  const [formState, setFormState] = useState<IFormData>({
    name: "",
    phone: "",
    street: "",
    house: "",
    flatAndFloor: "",
    comment: "",
  });

  const formSubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setWasSubmitted(true);
    console.log(formState);
  };

  return (
    <div className={"flex flex-col mx-auto mt-10 items-center"}>
      <h1 className={"text-4xl text tracking-wide mb-2 font-light"}>
        Вы почти у цели
      </h1>
      <p className={"text-lg text-gray-500 text-center"}>
        Пожалуйста, заполните форму ниже, чтобы завершить покупку
      </p>
      <div className={"flex flex-row items-center justify-center my-8"}>
        <button
          onClick={() => setDelivery(true)}
          className={`rounded-xl text-xl font-light px-4 py-2 mx-3 ${
            delivery ? "bg-amber-100" : ""
          }`}
        >
          Доставка
        </button>
        <button
          onClick={() => setDelivery(false)}
          className={`rounded-xl text-xl font-light px-4 py-2 mx-3 ${
            delivery ? "" : "bg-amber-100"
          }`}
        >
          Самовывоз
        </button>
      </div>
      {delivery ? (
        ""
      ) : (
        <h2 className={"text-gray-500 mb-2 text-center"}>
          Самовывоз производится по адресу: г. Москва, ул. Ленина, д. 1
        </h2>
      )}
      <h1 className={"text-3xl mb-8 text-center"}>
        Сумма вашего заказа: {cartValue} рублей ⬇️
      </h1>
      <form
        className={
          "sm:w-10/12 pb-14 rounded-3xl sm:border-2 sm:border-gray-100"
        }
      >
        {delivery ? (
          <div className={"flex sm:flex-row flex-col justify-evenly"}>
            <div className={"flex flex-col"}>
              <div className={"flex flex-col items-center justify-center"}>
                <label className={"text-xl py-2"}>Имя*</label>
                <input
                  className={`py-2 px-8 rounded-3xl border-2 border-gray-100 shadow shadow-gray-200 ${
                    wasSubmitted && formState.name.length < 3
                      ? "border-red-500"
                      : ""
                  }`}
                  type="text"
                  placeholder={"Имя"}
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className={"flex flex-col items-center justify-center"}>
                <label className={"text-xl py-2"}>Улица*</label>
                <input
                  className={`py-2 px-8 rounded-3xl border-2 border-gray-100 shadow shadow-gray-200 ${
                    wasSubmitted && formState.street.length < 3
                      ? "border-red-500"
                      : ""
                  }`}
                  type="text"
                  placeholder={"Улица"}
                  value={formState.street}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      street: e.target.value,
                    })
                  }
                />
              </div>
              <div className={"flex flex-col items-center justify-center"}>
                <label className={"text-xl py-2"}>Этаж и квартира*</label>
                <input
                  className={`py-2 px-8 rounded-3xl border-2 border-gray-100 shadow shadow-gray-200 ${
                    wasSubmitted && formState.flatAndFloor.length < 3
                      ? "border-red-500"
                      : ""
                  }`}
                  type="text"
                  placeholder={"Номер квартиры и этаж"}
                  value={formState.flatAndFloor}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      flatAndFloor: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
              <div className={"flex flex-col items-center justify-center"}>
                <label className={"text-xl py-2"}>Телефон*</label>
                <input
                  className={`py-2 px-8 rounded-3xl border-2 border-gray-100 shadow shadow-gray-200 ${
                    wasSubmitted && formState.phone.length < 3
                      ? "border-red-500"
                      : ""
                  }`}
                  type="tel"
                  placeholder={"Телефон"}
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className={"flex flex-col items-center justify-center"}>
                <label className={"text-xl py-2"}>Дом*</label>
                <input
                  className={`py-2 px-8 rounded-3xl border-2 border-gray-100 shadow shadow-gray-200 ${
                    wasSubmitted && formState.house.length < 3
                      ? "border-red-500"
                      : ""
                  }`}
                  type="text"
                  placeholder={"Дом"}
                  value={formState.house}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      house: e.target.value,
                    })
                  }
                />
              </div>
              <div className={"flex flex-col items-center justify-center"}>
                <label className={"text-xl py-2"}>Комментарий к заказу</label>
                <input
                  className={
                    "py-2 px-8 rounded-3xl border-2 border-gray-100 shadow shadow-gray-200"
                  }
                  placeholder={"Комментарий"}
                  value={formState.comment}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      comment: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={"flex sm:flex-row flex-col justify-evenly"}>
            <div className={"flex flex-col"}>
              <div className={"flex flex-col items-center justify-center"}>
                <label className={"text-xl py-2"}>Имя*</label>
                <input
                  className={`py-2 px-8 rounded-3xl border-2 border-gray-100 shadow shadow-gray-200 ${
                    wasSubmitted && formState.name.length < 3
                      ? "border-red-500"
                      : ""
                  }`}
                  type="text"
                  placeholder={"Имя"}
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className={"flex flex-col"}>
              <div className={"flex flex-col items-center justify-center"}>
                <label className={"text-xl py-2"}>Комментарий к заказу</label>
                <input
                  className={
                    "py-2 px-8 rounded-3xl border-2 border-gray-100 shadow shadow-gray-200"
                  }
                  type="text"
                  placeholder={"Комментарий"}
                  value={formState.comment}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      comment: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        )}
        <div className={"flex flex-row items-center justify-center mt-10"}>
          <button
            onClick={formSubmitHandler}
            className={
              "w-10/12 px-2 py-3 text-white font-semibold rounded-3xl bg-red-500 hover:bg-red-600 shadow-2xl shadow-red-500"
            }
          >
            Оформить заказ
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
