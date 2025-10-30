import React, { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  AddtoCart,
  getStorCart,
  removeForamls,
} from "../../utilities/LocaStorage";
import Carts from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setbottles] = useState([]);
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setbottles(data));
  }, []);

  useEffect(() => {
    console.log(bottles.length);
    const SavaCard = [];

    if (bottles.length > 0) {
      const getStorCarts = getStorCart();

      //   console.log(getStorCarts);
      for (const id of getStorCarts) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          SavaCard.push(bottle);
        }
      }
      setCart(SavaCard);
    }
  }, [bottles]);

  const handleAddCart = (bottle) => {
    const CartValo = Cart.find((cartd) => cartd.id === bottle.id);
    if (CartValo) return;

    const newCart = [...Cart, bottle];
    setCart(newCart);
    AddtoCart(bottle.id);
  };
  const handeRemoce = (id) => {
    // const remaining = Cart.filter((bottle) => bottle.id !== id);
    // setCart(remaining);
    const remaining = Cart.filter(bottle=>bottle.id !== id)
    setCart(remaining)

    removeForamls(id);
  };
  return (
    <div>
      <h3>Bottles Hearr :{bottles.length} </h3>
      <Carts Cart={Cart} handeRemoce={handeRemoce}>
        {" "}
      </Carts>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddCart={handleAddCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
