import React, { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { clearCart } from "../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Header from "../../layout/Header";

const OrderSuccess = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(clearCart());
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, []);
  return (
    <Fragment>
      <Header />
      <div className={"flex flex-col justify-center items-center mt-20"}>
        <AiOutlineCheckCircle className={"text-6xl text-green-500 mx-auto"} />
        <p className={"text-4xl font-light text-center p-3"}>
          Спасибо за покупку!
        </p>
        <p className={"text-2xl font-light text-gray-500 text-center mt-3.5"}>
          Вы будете перенаправлены на главную страницу через 10 секунд
        </p>
      </div>
    </Fragment>
  );
};

export default OrderSuccess;
