import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { cartSlice } from "../../redux/slice/cartSlice";

function ProductDetail() {
  const navigate = useNavigate();
  const { addToCart } = cartSlice.actions;
  const productList = useSelector((state) => state.product.productList);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = productList.find((item) => item._id === productId);

  const { category, description, image, name, price, quantity, _id, brand } =
    product;
  return (
    <div>
      <Header />
      <div className="flex flex-row p-12 mt-20">
        <div className=" rounded-lg  mr-8">
          <img
            src={image}
            alt=""
            className=" w-96 border-4 border-red-800 object-contain rounded-lg p-4"
          />
        </div>
        <div className=" flex flex-col">
          <h1 className="text-l font-extrabold text-xl text-red-800 mb-3 text-left">
            {brand}
          </h1>
          <h1 className="text-xl font-bold mb-3 text-left">{name}</h1>
          <p className="text-left">{description}</p>
          <button
            onClick={() => {
              navigate(`/`);
            }}
            className="text-white rounded-lg bg-red-800 w-72 h-10 "
          >
            Go Home
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl text-left font-extrabold mb-4">
              <span className="text-red-500 text-2xl font-extrabold">$ </span>
              {price.toLocaleString("vi-VN")}
            </h2>
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}
              className="text-white rounded-lg hover:bg-red-600 bg-red-800 w-40 h-10 "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
