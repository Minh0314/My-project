import React from "react";
import { useSelector } from "react-redux";
import Cart_Item from "./Cart_Item";
import Header from "../Header";
import Pay from "../Pay/Pay";

function CartList() {
  const cartsItems = useSelector((state) => state.cart.cartsItems);

  return (
    <div className="mt-28 mb-32">
      <Header></Header>

      <h1 className="text-center text-4xl font-bold pb-4 mt-2">
        {" "}
        SHOPPING CART
      </h1>

      {cartsItems.length > 0 ? (
        cartsItems.map((item) => <Cart_Item key={item._id} item={item} />)
      ) : (
        <div className="text-2xl font-bold text-center">
          {" "}
          Giỏ hàng trống vui lòng chọn sản phẩm bạn muốn!!!!{" "}
        </div>
      )}
      <div className="fixed bottom-0 left-0 w-full">
        {" "}
        <Pay cartsItems={cartsItems}></Pay>
      </div>
    </div>
  );
}

export default CartList;
