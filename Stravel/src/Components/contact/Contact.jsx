"use client";
import { useSelector } from "react-redux";
import Logo from "./Logo";

function Contact() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  return (
    <div
      className={"pb-20 py-6 px-28 w-full " + (darkTheme ? "bg-[#333]" : "")}
      id="contact"
    >
      <div className="p-4 ">
        <div className="flex gap-4 items-center justify-center pb-8">
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12  p-2 rounded text-center ">
            L
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            I
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            Ê
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            {" "}
            N
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            H
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            Ệ
          </span>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2
      gap-5 "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7450.541753670917!2d105.79562539584472!3d20.981776240101862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc3ae37fc47%3A0x607ded9d4d1d1182!2zVHJp4buBdSBLaMO6YywgVMOibiBUcmnhu4F1LCBUaGFuaCBUcsOsLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1723177566364!5m2!1svi!2s"
          width="100%"
          height="350"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=""
        ></iframe>

        <div className="form p-6  shadow-xl">
          <div className="flex w-full bg-gray-100">
            <input
              type="text"
              className={`border-none text-xl w-1/2 h-16 outline-none ${
                darkTheme ? "bg-[#333] text-white" : "text-dark"
              }`}
              placeholder="Tên của bạn"
            />
            <input
              type="text"
              className={`border-none text-xl w-1/2 h-16 outline-none ${
                darkTheme ? "bg-[#333] text-white" : "text-dark "
              }`}
              placeholder="Email liên hệ"
            />
          </div>

          <div className="flex  w-full">
            <input
              type="Text"
              className={`border-none text-xl w-1/2 h-16 outline-none  ${
                darkTheme ? "bg-[#333] text-white" : "text-dark "
              }`}
              placeholder="Số điện thoại"
            />
            <input
              type="text"
              className={`border-none text-xl w-1/2 h-16 outline-none ${
                darkTheme ? "bg-[#333] text-white" : "text-dark "
              }`}
              placeholder="Chủ đề"
            />
          </div>
          <input
            type="text"
            className={`border-none text-xl w-1/2 h-16 outline-none ${
              darkTheme ? "bg-[#333] text-white" : "text-dark "
            }`}
            placeholder="Viết lời nhắn của bạn "
          />
          <button
            type="submit"
            className="w-full py-3 bg-orange-400 text-white mt-14"
          >
            Gửi tới chúng tôi{" "}
          </button>
        </div>
      </div>

      <Logo></Logo>
    </div>
  );
}

export default Contact;
