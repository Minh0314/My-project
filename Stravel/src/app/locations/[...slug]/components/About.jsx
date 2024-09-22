import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function About() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const listVid = useSelector((state) => state.logo.video);

  const right = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const left = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const bottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const top = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const scale = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <div
      id="about"
      className={`my-16 flex flex-row justify-center w-full ${
        darkTheme ? "bg-black" : "bg-white"
      }`}
    >
      <div className="grid grid-cols-2 gap-4 w-10/12 justify-content-center">
        <motion.div
          className="col-span-1 rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={left}
        >
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {listVid.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <video
                    src={`${item.url}`}
                    loop
                    autoPlay
                    muted
                    className="w-full h-full object-cover rounded-xl"
                  ></video>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
        <motion.div
          className="col-span-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={right}
        >
          <div className="grid grid-cols-1 gap-4">
            <span className="text-xl  text-orange-400">
              Tại sao nên chọn Stravel
            </span>

            <span
              className={`text-5xl nunito font-bold ${
                darkTheme ? "text-white" : "text-black"
              }  `}
            >
              Trải Nghiệm Bậc Nhất
            </span>
            <p className="desc nunito text-gray-500 text-xl">
              Chúng tôi hợp tác với những địa điểm nghỉ dưỡng có trải nghiệm bậc
              nhất để đem lại một kỳ nghỉ tuyệt vời cho bạn cùng người thân
            </p>
            <button className=" px-8 py-3 bg-orange-400 text-white rounded  nunito">
              Tìm Hiểu Về Stravel
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
