"use client";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/img1.jpg";

function Logo() {
  const listLogo = useSelector((state) => state.logo.logo);
  

  return (
    <div className="form-user">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {listLogo.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full  py-5 px-9 flex flex-col items-center m-5 ">
                <img className=" h-5/12" src={item.url} alt="logo" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Logo;
