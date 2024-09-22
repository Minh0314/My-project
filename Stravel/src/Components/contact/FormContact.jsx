"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCountries } from "@/redux/slice/preferentialSlice";
function FormContact() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  const listCountries = useSelector((state) => state.preferential.countries);

  return (
    <form
    action=""
    className={"w-full flex flex-col gap-4 justify-center items-center"}
  >
    <div className="mb-4 w-8/12 ">
      <label
        className={`block text-xl font-bold mb-2 ${
          darkTheme ? "text-orange-400" : "text-gray-500"
        }`}
        htmlFor="contact"
      >
        Hãy Liên Hệ Với Tôi Bằng :
      </label>
      <input
        id="email"
        className={`border-solid border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          darkTheme ? "bg-transparent border-orange-400" : "border-stone-400"
        }`}
        type="text"
        placeholder="Email hoặc số điện thoại"
      />
    </div>

    <div className="mb-4 w-8/12">
      <label
        className={`block text-xl font-bold mb-2 ${
          darkTheme ? "text-orange-400" : "text-gray-500"
        }`}
        htmlFor="address"
      >
        Tôi Muốn Đến :
      </label>
      <select
        id="address"
        className={`py-2 px-3 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          darkTheme ? "bg-transparent border-orange-400" : "border-stone-400"
        }`}
      >
        {listCountries.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      <input
        id=""
        className={`border-solid border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          darkTheme ? "bg-transparent border-orange-400" : "border-stone-400"
        }`}
        type="text"
        placeholder="Nhập địa chỉ chính xác"
      />
    </div>

    <div className="mb-4 w-8/12">
      <label
        className={`block text-xl font-bold mb-2 ${
          darkTheme ? "text-orange-400" : "text-gray-500"
        }`}
        htmlFor=""
      >
        Chúng Tôi Có :
      </label>
      <input
        id=""
        className={`border-solid border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          darkTheme ? "bg-transparent border-orange-400" : "border-stone-400"
        }`}
        type="number"
        defaultValue={1}
      />
    </div>

    <div className="mb-4 w-8/12">
      <label
        className={`block text-xl font-bold mb-2 ${
          darkTheme ? "text-orange-400" : "text-gray-500"
        }`}
        htmlFor=""
      >
        Bắt Đầu Từ :
      </label>
      <input
        id=""
        className={`border-solid border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          darkTheme ? "bg-transparent border-orange-400" : "border-stone-400"
        }`}
        type="date"
      />
    </div>

    <div className="mb-4 w-8/12">
      <label
        className={`block text-xl font-bold mb-2 ${
          darkTheme ? "text-orange-400" : "text-gray-500"
        }`}
        htmlFor=""
      >
        Kết Thúc Vào :
      </label>
      <input
        id=""
        className={`border-solid border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          darkTheme ? "bg-transparent border-orange-400" : "border-stone-400"
        }`}
        type="date"
      />
    </div>
    <button className="bg-orange-400 rounded-xl px-5 py-2 text-white items-start">
      Tìm ngay
    </button>
  </form>
  );
}

export default FormContact;
