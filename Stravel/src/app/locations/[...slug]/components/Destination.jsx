import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function Destination({ data }) {
  const listCountries = useSelector((state) => state.preferential.countries);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const bottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  function truncateText(text, wordLimit) {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  }
  return (
    <div id="destination" className="my-32 flex flex-row justify-center w-full">
      <div className=" w-10/12 justify-content-center  text-center">
        <div className="flex flex-col gap-4 my-3">
          <span className="text-xl text-orange-400">
            Những Điểm Đến Ở {data?.name}
          </span>
          <span className="text-4xl nunito font-bold  text-black">
            Những Điểm Du Lịch Bậc Nhất
          </span>
        </div>
        <div className="grid xs:gird-cols-1 sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full">
          {listCountries?.slice(5, 15)?.map((item, index) => (
            <div className="shadow-xl py-7" key={index}>
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
                <div key={item.name}>
                  <img
                    src={item?.img[2].url}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <div className="px-4 py-4">
                    <span
                      className={`text-lg font-semibold nunito ${
                        darkTheme ? "text-white" : "text-black"
                      }`}
                    >
                      {item.name}
                    </span>
                    <p className="text-gray-500 text-sm">
                      {truncateText(item.desc, 20)}
                    </p>
                  </div>
                  <div className="flex justify-end px-4 py-2">
                    <button className="text-orange-400">
                      Đọc Thêm{" "}
                      <i className="fa-solid fa-chevron-right font-bold"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destination;
