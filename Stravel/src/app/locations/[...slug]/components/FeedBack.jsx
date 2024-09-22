import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function FeedBack() {
  const user = useSelector((state) => state.users.users);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  console.log(user);
  const scale = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  const left = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="my-32 flex flex-col justify-center items-center w-full">
      <div className="w-10/12 flex flex-col justify-content-center text-center">
        <div className=" grid grid-cols-2 gap-2">
          <motion.div
            className="col-span-1 rounded-xl flex flex-col transition duration-150 ease-linear hover:shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={left}
          >
            <div className="col-span-1 flex flex-col gap-4 ">
              <span className="text-3xl nunito font-bold text-orange-400 text-start">
                Những Lời Đánh Giá Tốt Nhất
              </span>
              <span className="text-gray-400 text-lg">
                Tất cả những lời đánh giá chúng tôi đều ghi nhận và tiếp thu để
                phát triển. đây là những đánh giá tốt nhất về chuyến đi Mumbai
                này.
              </span>
            </div>
          </motion.div>
          <div className="col-span-1">
            <div className="grid  gap-4 sm:grid-col-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
              {user.slice(0, 4)?.map((item, index) => (
                <motion.div
                  key={index}
                  className="col-span-1 rounded-xl flex flex-col transition duration-150 ease-linear hover:shadow-2xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={scale}
                >
                  <div
                    key={index}
                    className={` ${
                      (index === 3 ? "col-span-3" : "col-span-1",
                      darkTheme ? "text-gray-400" : "text-black")
                    } flex flex-col gap-4 border border-2 border-solid border-orange-400  p-5  rounded-xl shadow-xl`}
                  >
                    <span>{item?.comment}</span>
                    <div
                      className={`flex flex-row gap-4 items-center ${
                        darkTheme ? "text-gray-400" : "text-black"
                      }`}
                    >
                      <img
                        src={item?.avatar}
                        className="w-14 h-14 object-cover rounded-full "
                        alt=""
                      />
                      <span className=" text-back text-lg font-medium nunito">
                        {item?.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-10 gap-4 ">
          <div className="col-span-4 col-span-10 sm:col-span-10 md:col-span-10 lg:col-span-10 xl:col-span-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59593.207487312684!2d105.80775570163574!3d21.00964805596766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8109765ba5%3A0xd84740ece05680ee!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaOG7p3kgbOG7o2k!5e0!3m2!1svi!2s!4v1726820654452!5m2!1svi!2s"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-span-6 col-span-10  sm:col-span-10 md:col-span-10 lg:col-span-10 xl:col-span-6">
            <form
              action=""
              className=" w-full h-full grid grid-cols-2 gap-8 shadow-xl p-8"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Tên của bạn"
                className="col-span-1 outline-none"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Email liên hệ"
                className="col-span-1 outline-none"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Số Điện Thoại"
                className="col-span-1 outline-none"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Chủ đề"
                className="col-span-1 outline-none"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Viết đánh giá của bạn về chuyến đi "
                className="col-span-2  outline-none"
              />
              <button
                type="submit"
                className="bg-orange-400 text-white rounded-xl w-48 nunito hover:bg-orange-500 "
              >
                Gửi Tới Stravel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
