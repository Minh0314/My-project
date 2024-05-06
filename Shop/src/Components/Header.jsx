import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo-shopee.png";
import cart from "../assets/img/shopping-cart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const cartsItems = useSelector((state) => state.cart.cartsItems);
  const [scaleTotal, setSaleTotal] = useState(false);

  let total = 0;
  for (var item of cartsItems) {
    total += item.quantum;
  }
  useEffect(() => {
    setSaleTotal(true);
    setTimeout(() => {
      setSaleTotal(false);
    }, 250);
  }, [total]);
  return (
    <div className=" fixed top-0 left-0 w-full flex flex-row items-center justify-between bg-indigo-300 py-4 px-10 ">
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="Logo Shoppee" className="w-14 h-14  " />
      </Link>
      <Link to={"/gio-hang"}>
        {" "}
        <img src={cart} alt="Giỏ hàng" className="w-12 h-12 " />
        <span
          className={`text-red-500 text-center absolute top-12 right-6 font-bold w-6 h-6 bg-white rounded-2xl ${
            scaleTotal &&
            "transition-transform ease-in-out  scale-150 text-indigo-600"
          }`}
        >
          {" "}
          {total}
        </span>
      </Link>
    </div>
  );
}

export default Header;
