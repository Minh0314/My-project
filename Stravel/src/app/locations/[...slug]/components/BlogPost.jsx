import { motion } from "framer-motion";
import { useSelector } from "react-redux";
function BlogPost({ data }) {
  const listCountries = useSelector((state) => state.preferential.countries);

  const scale = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  const blog = [
    {
      title: "Mang những gì khi đi ",
      content:
        " Giấy tờ tuỳ thân, giấy xác minh tài chính, visa, Vé máy bay, trang phục, đồ dùng cá nhân, balo, túi đựng đồ...",
      img: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      time: "2 phút trước",
      by: "Mini Minni",
    },
    {
      title: "Xin visa đi Mumbai ",
      content:
        " Visa Ai Cập không khó xin, thủ tục đơn giản gồm đơn tải từ trang web chính thức của Đại sứ quán",
      img: "https://images.pexels.com/photos/346798/pexels-photo-346798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      time: "1 ngày trước",
      by: "Mini Minni",
    },
    {
      title: "Phương tiện di chuyển",
      content:
        " Bạn có thể đi xe bus, tàu lửa, tàu thủy hoặc bất cứ phương tiện nào có thể di chuyển đều được.",
      img: "https://images.pexels.com/photos/69122/ferry-boat-ferry-ship-boat-69122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      time: "3 ngày trước",
      by: "Mini Minni",
    },
  ];
  return (
    <div
      id="blogs"
      className="my-32 flex flex-col justify-center items-center w-full"
    >
      <div className="w-10/12 flex flex-col justify-content-center ">
        <div className="flex flex-col gap-4 my-3 items-center">
          <span className="text-xl text-orange-400">Blogs & Posts</span>
          <span className="text-4xl text-black nunito font-bold">
            Tìm Hiểu Thêm về {data?.name}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full">
          {blog.map((item, index) => (
            <motion.div
              key={index}
              className="col-span-1 rounded-xl px-4 py-8 shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scale}
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 ">
                <img
                  src={item?.img}
                  alt={item?.img}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <div className="px-4 py-4 flex flex-col gap-2">
                  <span className="text-xl text-orange-400 font-semibold nunito">
                    {item.title}
                  </span>
                  <p className="text-gray-500 text-sm">{item.content}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      {" "}
                      <i className="fa-regular fa-calendar-days text-orange-400 mr-2"></i>
                      {item.time}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {" "}
                      <i className="fa-solid fa-user text-orange-400 mr-2"></i>{" "}
                      {item.by}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
