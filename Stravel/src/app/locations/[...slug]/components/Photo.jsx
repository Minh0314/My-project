import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function Photo() {
  const listCountries = useSelector((state) => state.preferential.countries);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  console.log(listCountries);
  const bottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="photo"
      className="my-32   w-full flex flex-col items-center justify-center"
    >
      <div className="w-10/12 flex flex-col justify-content-center text-center">
        <div className="py-5">
          <span
            className={`text-4xl nunito font-bold ${
              darkTheme ? "text-white" : "text-black"
            }`}
          >
            Những Bức Ảnh Về Các Địa Danh Khác
          </span>
        </div>
        <div className="grid   sm:gird-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {listCountries?.slice(11, 19)?.map((item, index) => (
            <motion.div
              key={index}
              className={`col-span-1 rounded-xl flex flex-col transition duration-150 ease-linear hover:shadow-2xl ${
                darkTheme ? "bg-gray-600" : "bg-white"
              }}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={bottom}
            >
              <div>
                <img
                  src={item?.img[1].url}
                  alt={item?.name}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <div className="px-4 py-4">
                  <span className="text-xl text-orange-400 font-semibold nunito">
                    {item.name}
                  </span>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photo;
