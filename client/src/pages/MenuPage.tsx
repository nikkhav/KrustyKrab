import React from "react";
import pizzaImage from "../assets/images/60bdf5f9dc54e.jpg";
import saladImage from "../assets/images/62e7c2563bb61.png";
import sushiImage from "../assets/images/614dbed50c0da.jpg";
import burgerImage from "../assets/images/6221fff081b96.jpg";
import MenuCard from "../components/MenuCard";

const MenuPage = () => {
  return (
    <div className={"flex flex-row flex-wrap justify-evenly"}>
      <MenuCard
        title={"Пицца"}
        image={pizzaImage}
        type={"pizza"}
        price={1000}
      />
      <MenuCard title={"Суши"} image={sushiImage} type={"sushi"} price={900} />
      <MenuCard
        title={"Салат цезарь"}
        image={saladImage}
        type={"salad"}
        price={600}
      />
      <MenuCard
        title={"Чизбургер"}
        image={burgerImage}
        type={"burger"}
        price={550}
      />
      <MenuCard title={"Пицца"} image={pizzaImage} type={"pizza"} price={600} />
      <MenuCard title={"Пицца"} image={pizzaImage} type={"pizza"} price={600} />
      <MenuCard title={"Пицца"} image={pizzaImage} type={"pizza"} price={600} />
      <MenuCard title={"Пицца"} image={pizzaImage} type={"pizza"} price={600} />
    </div>
  );
};

export default MenuPage;
