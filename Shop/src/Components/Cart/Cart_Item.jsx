import React, { useState } from "react";

import trash_bin from "../../assets/img/trash-bin (1).png";
import { cartSlice } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart_Item({ item }) {
  const [showAlert, setShowAlert] = useState(false);
  const { category, description, image, name, price, quantity, _id, quantum } =
    item;

  const { deleteProductCart, incrementProductCart, decrementProductCart } =
    cartSlice.actions;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleDelete = () => {
    setShowAlert(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteProductCart(item));

    setShowAlert(false);
  };

  const handleCancelDelete = () => {
    setShowAlert(false);
  };
  return (
    <div className=" w-2/3 flex flex-col gap-2   border-solid border-2 rounded-lg border-indigo-600 p-4 mx-auto  my-3">
      {showAlert && (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="mb-4">Bạn có chắc muốn xóa sản phẩm này?</p>
            <div>
              <button
                onClick={handleConfirmDelete}
                className="mr-4 bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Xác nhận
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="top flex flex-row ">
        <img
          onClick={() => {
            navigate(`/chi-tiet-san-pham/${item._id}`);
          }}
          src={image}
          alt=""
          className=" rounded-lg mb-2 w-40 mr-10 "
        />
        <div className="detail flex-col pt-10">
          <div className="flex flex-row gap-3">
            <p className="category-item font-light mb-3 text-red-500">
              {" "}
              {category}
            </p>
            <p className=" name-item text-l font-light mb-3">{name}</p>
          </div>{" "}
          <div className="flex justify-between w-full">
            <h2 className="text-2xl">
              <span className="text-red-500 text-2xl font-extrabold">$ </span>
              {price.toLocaleString("vi-VN")}
            </h2>
          </div>
          <h2 className="text-xl">
            <span className="font-bold"> Còn lại : </span>
            {quantity.toLocaleString()}
          </h2>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="edit inline-flex border-2 items-center justify-between w-24 h-8 font-bold text-red-600">
          <button
            onClick={() => {
              dispatch(decrementProductCart(item));
            }}
            id="minus"
            className="px-2"
          >
            -
          </button>
          <div id="quantity" className="border-x-2 px-3 ">
            {" "}
            {quantum}
          </div>
          <button
            onClick={() => {
              dispatch(incrementProductCart(item));
            }}
            id="plus"
            className="text-red-500 px-2"
          >
            +
          </button>
        </div>
        <div className="total flex flex-row gap-3 ">
          <h1 className="font-extrabold text-2xl py-3">
            <span className=" text-red-600">$</span>
            {(quantum * price).toLocaleString("vi-VN")}
          </h1>
          <button
            onClick={() => {
              handleDelete();
            }}
          >
            {" "}
            <img src={trash_bin} alt="" className="w-10 h-10 " />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart_Item;
