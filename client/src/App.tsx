import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import DeliveryPage from "./pages/DeliveryPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Fragment>
      <Header />
      <div className={"w-full sm:h-28"} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/menu"} element={<MenuPage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/delivery"} element={<DeliveryPage />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/checkout"} element={<CheckoutPage />} />
        <Route path={"*"} element={<Navigate to={"/"} replace={true} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
