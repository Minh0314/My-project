"use client";
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function Service() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const bottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      className={`pb-48 py-6 px-28 w-full ${darkTheme ? "bg-[#333]" : " "}`}
      id="service"
    >
      <div className="p-4">
        <div className="flex gap-4 items-center justify-center pb-6">
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            D
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            Ị
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            C
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            {" "}
            H
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            V
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            Ụ
          </span>
        </div>
        <motion.div
          className={`col-span-1 rounded-xl flex flex-col transition duration-150 ease-linear hover:shadow-2xl ${
            darkTheme ? "bg-gray-800" : "bg-white"
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={bottom}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            <div className="flex flex-col gap-3 items-center hover:shadow-md p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
              <i className=" fa-solid fa-bed text-5xl text-orange-400 "></i>
              <span
                className={`text-2xl font-medium ${
                  darkTheme ? "text-orange-400" : ""
                }`}
              >
                Nghỉ Dưỡng Cao Cấp
              </span>
              <span className="text-gray-500">Some Text...</span>
            </div>
            <div className="flex flex-col gap-3 items-center hover:shadow-md p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
              <i className="fa-solid fa-utensils text-5xl text-orange-400"></i>
              <span
                className={`text-2xl font-medium ${
                  darkTheme ? "text-orange-400" : ""
                }`}
              >
                Dịch Vụ Ăn Uống
              </span>
              <span className="text-gray-500">Some Text...</span>
            </div>
            <div className="flex flex-col gap-3 items-center hover:shadow-md p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
              <i className="fa-solid fa-bullhorn text-5xl text-orange-400"></i>
              <span
                className={`text-2xl font-medium ${
                  darkTheme ? "text-orange-400" : ""
                }`}
              >
                Chính Sách An Toàn
              </span>
              <span className="text-gray-500">Some Text...</span>
            </div>
            <div className="flex flex-col gap-3 items-center hover:shadow-md p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
              <i className="fa-solid fa-earth-americas text-5xl text-orange-400"></i>
              <span
                className={`text-2xl font-medium ${
                  darkTheme ? "text-orange-400" : ""
                }`}
              >
                Rộng Khắp Thế Giới
              </span>
              <span className="text-gray-500">Some Text...</span>
            </div>
            <div className="flex flex-col gap-3 items-center hover:shadow-md p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 xl:col-span-2">
              <i className="fa-solid fa-plane text-5xl text-orange-400"></i>
              <span
                className={`text-2xl font-medium ${
                  darkTheme ? "text-orange-400" : ""
                }`}
              >
                Tốc Độ Cao
              </span>
              <span className="text-gray-500">Some Text...</span>
            </div>
            <div className="flex flex-col gap-3 items-center hover:shadow-md p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 xl:col-span-2">
              <i className="fas fa-hiking text-5xl text-orange-400"></i>
              <span
                className={`text-2xl font-medium ${
                  darkTheme ? "text-orange-400" : ""
                }`}
              >
                Những Cuộc Phưu Lưu
              </span>
              <span className="text-gray-500">Some Text...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Service;
