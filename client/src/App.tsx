import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/menu/MenuPage";
import AboutPage from "./pages/AboutPage";
import DeliveryPage from "./pages/DeliveryPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/cart/CheckoutPage";
import ItemDetailedPage from "./pages/menu/ItemDetailedPage";
import OrderSuccess from "./pages/cart/OrderSuccess";
import AdminLogin from "./admin/AdminLogin";
import AdminOrders from "./admin/AdminOrders";
import AdminOrderDetailed from "./admin/AdminOrderDetailed";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/menu"} element={<MenuPage />} />
        <Route path={"/menu/:itemId"} element={<ItemDetailedPage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/delivery"} element={<DeliveryPage />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/checkout"} element={<CheckoutPage />} />
        <Route path={"/order-success"} element={<OrderSuccess />} />
        <Route path={"/admin/login"} element={<AdminLogin />} />
        <Route path={"/admin/orders"} element={<AdminOrders />} />
        <Route
          path={"/admin/orders/:orderId"}
          element={<AdminOrderDetailed />}
        />
        <Route path={"/admin/*"} element={<Navigate to="/admin/orders" />} />
        <Route path={"*"} element={<Navigate to={"/"} replace={true} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
