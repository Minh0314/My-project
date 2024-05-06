import React from "react";
import thankyou from "../../assets/img/thankyou.webp";

import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  const ContinueShopping = () => {
    navigate(`/`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg mb-8">Your order has been placed successfully.</p>
      <img src={thankyou} alt="Thank You Image" className="w-100% mb-8" />
      <button
        onClick={ContinueShopping}
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default ThankYou;
