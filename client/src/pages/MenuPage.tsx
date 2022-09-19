import React, { useEffect, useState } from "react";
import axios from "axios";
import { MenuProps } from "../components/MenuCard";
import MenuCard from "../components/MenuCard";

const MenuPage = () => {
  const [menu, setMenu] = useState<[]>([]);

  const getMenu = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/menu");
    setMenu(response.data.data["menuItems"]);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className={"flex flex-row flex-wrap justify-evenly"}>
      {menu.map((item: MenuProps) => (
        <MenuCard
          _id={item._id}
          title={item.title}
          description={item.description}
          image={item.image}
          price={item.price}
          type={item.type}
          key={item._id}
        />
      ))}
    </div>
  );
};

export default MenuPage;
