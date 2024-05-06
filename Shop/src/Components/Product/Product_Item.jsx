import React from "react";
import addToCartImg from "../../assets/img/addTocart.png";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../redux/slice/cartSlice";
import { useNavigate, Navigate } from "react-router-dom";
function Product_Item({ item }) {
  const { addToCart } = cartSlice.actions;
  const { category, description, image, name, price, quantity, _id } = item;

  const cartItems = useSelector((state) => state.cart.cartsItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleProductDetail = () => {
    navigate(`/chi-tiet-san-pham/${item._id}`);
  };
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        handleProductDetail();
      }}
      className="flex flex-col gap-2 justify-center items-center border-solid border-2 rounded-lg border-indigo-600 p-4  hover:scale-110 transition-transform"
    >
      <img src={image} alt="" className=" rounded-lg mb-2" />
      <h1 className="text-l font-bold mb-3">{(category, name)}</h1>
      <div className="flex justify-between w-full">
        <h2 className="text-2xl">
          <span className="text-red-500 text-2xl font-extrabold">$ </span>
          {price.toLocaleString("vi-VN")}
        </h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAddCart(item);
          }}
        >
          <img
            src={addToCartImg}
            alt=""
            className="w-7 h-7 hover:border-2 border-red-dot"
          />
        </button>
      </div>
    </div>
  );
}

export default Product_Item;
