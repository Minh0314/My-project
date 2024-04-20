import React, { memo } from "react";
import copyToClipboard from "copy-to-clipboard";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginApi from "../API/LoginAPI";
import { useDispatch } from "react-redux";
import { login } from "../redux/action/loginAction";
import Loading from "../Pages/LoadingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // Xác nhận đầu vào email
    const isValidEmail = newEmail.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
    if (!isValidEmail) {
      setError("Email không hợp lệ");
    } else {
      setError("");
    }
  };
  const handleCopyEmail = () => {
    setLoading(true);
    const email = "phivanduc325@gmail.com";
    copyToClipboard(email);
    toast.success("Email đã được copy vào clipboard", { autoClose: 300 });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await LoginApi.isLogin(email);

    if (response.data) {
      setLoading(false);
      toast("Chào mừng bạn đã quay trở lại ", { autoClose: 300 });
      localStorage.setItem("apiKey", response.data.apiKey);
      dispatch(login());
    }
  };
  return (
    <div className="container flex justify-center items-center h-screen max-w-full ">
      <form className="w-full max-w-xs flex flex-col " onSubmit={handleSubmit}>
        <h1 className=" text-blue-600/100 text-xl mb-8">
          Chào mừng đến với Trello Clone
        </h1>
        <div className="mb-4">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
            onClick={handleCopyEmail}
            title="Nhấp vào đây để lấy email demo"
          >
            <FontAwesomeIcon icon={faClipboard} className="mr-2" />
            Lấy email demo
          </button>
        </div>
        <label
          className="block text-blue-600/100 text-sm font-bold mb-2  "
          htmlFor="email"
        >
          Vui lòng đăng nhập để tiếp tục
        </label>
        <input
          className="shadow appearance-none border-solid border-2 border-indigo-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          id="email"
          type="email"
          placeholder="Email của bạn"
          value={email}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default React.memo(Login);
