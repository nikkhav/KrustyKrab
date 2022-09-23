import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/slices/adminSlice";

const AdminLogin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:4000/api/v1/admin/login",
        {
          username,
          password,
        }
      );
      if (response.status === 200) {
        dispatch(login(response.data.data.admin.name));
        navigate("/admin/orders");
      }
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div
      className={
        "flex flex-col w-9/12 justify-center items-center mx-auto mt-32 pb-32 p-10 rounded-2xl bg-gray-200"
      }
    >
      <h1 className={"sm:text-4xl text-3xl font-mono text-center"}>
        Вход для администратора
      </h1>
      <form className={"flex flex-col"}>
        <label
          className={"mt-10 text-xl text-center font-light"}
          htmlFor="email"
        >
          Имя пользователя
        </label>
        <input
          className={"py-2 px-5 rounded-xl mt-2"}
          type="username"
          name="username"
          id="username"
          placeholder={"Введите имя пользователя"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
        />
        <label
          className={"pt-4 text-xl text-center font-light"}
          htmlFor="password"
        >
          Пароль
        </label>
        <input
          className={"py-2 px-5 rounded-xl mt-2"}
          type="password"
          name="password"
          id="password"
          placeholder={"Введите пароль"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        <p className={"font-light text-center text-black mt-2"}>{error}</p>
        <button
          onClick={handleSubmit}
          className={
            "mt-10 rounded-xl bg-green-500 px-4 py-2 text-xl text-white font-bold"
          }
          type="submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
