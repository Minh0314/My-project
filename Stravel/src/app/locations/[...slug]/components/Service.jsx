import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function Service() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const scale = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  const services = [
    {
      title: "Rộng Khắp Thế Giới",
      description: "Some Text...",
      icon: "fa-solid fa-earth-americas",
    },
    {
      title: "Những Cuộc Phưu Lưu",
      description: "Some Text...",
      icon: "fas fa-hiking",
    },
    {
      title: "Dịch Vụ Ăn Uống",
      description: "Some Text...",
      icon: "fa-solid fa-utensils",
    },
    {
      title: "Nghỉ Dưỡng Cao Cấp",
      description: "Some Text...",
      icon: "fa-solid fa-bed",
    },
    {
      title: "Giá Tốt Nhất",
      description: "Some Text...",
      icon: "fa-solid fa-bed",
    },
    {
      title: " Hỗ Trợ 24/7",
      description: "Some Text...",
      icon: "fa-solid fa-bed",
    },
  ];
  return (
    <div
      id="service"
      className=" my-32 flex flex-col justify-center items-center w-full"
    >
      <div className="w-10/12 flex flex-col justify-content-center text-center">
        <div className="flex flex-col gap-4 my-3 items-center">
          <span className="text-xl text-orange-400">Dịch Vụ</span>
          <span
            className={`text-4xl nunito font-bold ${
              darkTheme ? "text-white" : "text-black"
            }`}
          >
            Nâng cao Trải Nghiệm
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {services.map((item, index) => (
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
                className="flex flex-col gap-3 items-center hover:shadow-md p-5 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200
                border border-solid border-2 border-orange-400 rounded-xl"
              >
                <i
                  className={` ${item.icon} fa-bed text-5xl text-orange-400 `}
                ></i>
                <span
                  className={`text-2xl font-medium ${
                    darkTheme ? "text-white" : "Text-black"
                  }`}
                >
                  {item.title}
                </span>
                <span className="text-gray-500">Some Text...</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
