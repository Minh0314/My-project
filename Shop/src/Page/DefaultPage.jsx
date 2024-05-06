import React, { useEffect } from "react";
import Header from "../Components/Header";
import ProductList from "../Components/Product/ProductList";
import { fetchProduct } from "../redux/slice/productSlice";
import { useDispatch } from "react-redux";

function DefaultPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div className="mb-20">
      <Header></Header>
      <ProductList></ProductList>
    </div>
  );
}

export default DefaultPage;
