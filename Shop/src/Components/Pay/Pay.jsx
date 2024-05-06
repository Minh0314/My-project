import { useDispatch } from "react-redux";
import { cartSlice } from "../../redux/slice/cartSlice";

import { useNavigate } from "react-router-dom";

function Pay({ cartsItems }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const total = cartsItems.reduce((total, item) => {
    return total + item.price * item.quantum;
  }, 0);
  const { deleteAll } = cartSlice.actions;
  const handlePay = () => {
    navigate(`/thank-you`);
    dispatch(deleteAll());
  };
  return (
    <div className=" bg-white p-4 shadow-md border-2">
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            navigate(`/`);
          }}
          className="px-8 py-4 bg-indigo-500 text-white rounded-lg mr-4  hover:bg-red-600"
        >
          Go Home
        </button>
        <div className=" flex flex-row gap-4">
          <div className=" text-2xl font-extrabold">
            Gross product ({cartsItems.length} )
          </div>
          <span className="text-red-600 text-2xl font-extrabold">
            Total{" "}
            <span className="text-red-500 text-2xl font-extrabold">$ </span>{" "}
            {total.toLocaleString("vi-VN")}{" "}
          </span>
        </div>
        <button
          onClick={handlePay}
          className={`px-14 py-4 bg-indigo-500 text-white rounded-lg ml-4 hover:bg-red-600 ${
            cartsItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={cartsItems.length === 0}
        >
          Buy
        </button>
      </div>
    </div>
  );
}
export default Pay;
