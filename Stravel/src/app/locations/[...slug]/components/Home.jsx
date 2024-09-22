import { useSelector } from "react-redux";
const Home = ({ data }) => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  //  function formatCurrency(price) {
  //     return price.toLocaleString("vi-VN", {
  //       style: "currency",
  //       currency: "VND",
  //     });
  //   }

  return (
    <section
      id="home"
      className={` w-full flex flex-col items-center justify-center pt-28    ${
        darkTheme ? "bg-black" : "bg-white"
      }`}
    >
      <div className="relative  h-auto min-h-[400px]">
        <img
          src={data?.img[1].url}
          alt=""
          className="w-full h-full object-cover h-auto rounded-xl"
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-60 rounded-xl"></div>
        <div className="content absolute inset-0 flex items-center justify-center text-center flex-col gap-16">
          <span
            className="font-bold text-transparent nunito sm:text-2xl md:text-[57px] lg:text-[67px] xl:text-[77px] 7"
            style={{ WebkitTextStroke: ".1rem #ffa500" }}
          >
            {data?.name}
          </span>
          <span className="font-bold text-white nunito sm:text-2xl md:text-[56px] lg:text-[76px] xl:text-[96px] ">
            {data?.title}
          </span>
          <p className="w-1/3 font-normal text-white nunito leading-8">
            {data?.desc}
          </p>
          <button className="w-40 h-10 bg-orange-400 text-white rounded-full">
            Tìm Hiểu Thêm
          </button>
        </div>

        <div
          className={`cta absolute inset-x-0 bottom-[-5rem] w-3/4 flex justify-between items-center bg-[#efefef] my-4 mx-auto rounded-xl sm:py-4  md:py-6 lg:py-8 xl:py-10 2xl:py-12 px-8 shadow-2xl ${
            darkTheme ? "bg-black" : "bg-white"
          }`}
        >
          <div>
            <span className="  sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-bold nunito text-orange-400">
              Ưu đãi {data?.price} cho {data?.tour}
            </span>
          </div>
          <div>
            <button className="w-40 h-10 bg-orange-400 text-white rounded-full ">
              <a href={`/`}>Đặt ngay</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
