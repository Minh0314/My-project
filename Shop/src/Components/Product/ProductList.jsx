import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import Product_Item from "./Product_Item";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

function ProductList() {
  const productList = useSelector((state) => state.product.productList);
  const status = useSelector((state) => state.product.status);

  return (
    <div className="px-20 flex flex-col justify-center mt-28">
      {status === "pending" && <Loading />}
      <h1 className="text-center text-4xl font-bold pb-4"> Product</h1>
      <div className="grid grid-cols-4 gap-6 px-10 mb- justify-content-center">
        {productList &&
          productList.map((item) => (
            <Product_Item key={item._id} item={item} />
          ))}
      </div>

      <div className="mx-auto mt-4 ">
        <Pagination></Pagination>
      </div>
    </div>
  );
}

export default ProductList;
