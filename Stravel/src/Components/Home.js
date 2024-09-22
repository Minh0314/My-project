"use client";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/style.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { Pagination } from "swiper/modules";

function MyHome() {
  const homeRef = useRef(null);
  const preferentialRef = useRef(null);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  };
  const listVid = useSelector((state) => state.logo.video);
 

  return (
    <div id="/" className="">
      <div className="h-screen overflow-hidden relative ">
        <Swiper
          spaceBetween={60}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {listVid.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <video
                  src={`${item.url}`}
                  loop
                  autoPlay
                  muted
                  className="w-full h-full  object-cover"
                ></video>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <span className=" sm:xl md:2xl lg:3xl xl:text-5xl font-bold pb-5">MỌI CHUYẾN ĐI ĐỀU ĐÁNG GIÁ</span>
        <p className="text-3xl pb-5">
          Khám Phá Các Vùng Đất Mới Cùng Chúng Tôi
        </p>
        <p className="sm:text-lg md:text-xl lg:text-2xl pb-5">Những Chuyến Đi Đang Chờ Bạn</p>
        <button className="w-52 h-12 bg-orange-400 rounded-xl hover:bg-transparent hover:border-2 hover:border-orange-400 hover:font-bold hover:text-orange-300">
          <Link
            activeClass=""
            to="sale"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleClick}
            offset={-70}
          >
            Khám Phá Ngay
          </Link>
        </button>
      </div>
    </div>
  );
}

export default MyHome;
