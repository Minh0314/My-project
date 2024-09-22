import { Link as ScrollLink } from "react-scroll";
import { useSelector } from "react-redux";
import { useState } from "react";

const Footer = () => {
  const backgroundImageUrl = "@/public/hehe.jpeg";
  const [click, setClick] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(false);
    setClick(!click);
  };
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div>
      <div
        className={`banner text-center py-20 `}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className={`text-4xl font-bold ${darkTheme} ? "text-white" : "text-black"`}
        >
          Bắt Đầu Chuyến Đi Của Bạn
        </h1>
        <p className="text-lg mt-4">
          Mỗi Chuyến Đi Đều Là Một Kỷ Niệm Đẹp. Hãy Cùng STravel Ghi Lại Kỷ Niệm
          Này!
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 mt-6 rounded-lg hover:bg-orange-600">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleClick}
            offset={-200}
          >
            Đặt Ngay
          </ScrollLink>
        </button>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className=" text-2xl font-bold mb-4">
              <span className="text-orange-400">S</span>Travel
            </h2>
            <p>
              Trải Qua 17 Năm Phát Triển Bền Vững, STravel Đã Ghi Dấu Ấn Của
              Mình.
            </p>
            <p className="mt-2">"Nâng Tầm Trải Nghiệm Từng Chuyến Đi"</p>
            <div className="share flex space-x-4 mt-4">
              <a
                href="#"
                className="fab fa-facebook-f border border-orange-400 w-[10%] p-4 text-center rounded-full flex items-center justify-center text-orange-400 hover:text-orange-500"
              ></a>
              <a
                href="#"
                className="fab fa-twitter border border-orange-400 p-4 text-center rounded-full flex items-center justify-center text-orange-400 hover:text-orange-500"
              ></a>
              <a
                href="#"
                className="fab fa-instagram border border-orange-400 p-4 text-center rounded-full flex items-center justify-center text-orange-400 hover:text-orange-500"
              ></a>
              <a
                href="#"
                className="fab fa-linkedin border border-orange-400 p-4 text-center rounded-full flex items-center justify-center text-orange-400 hover:text-orange-500"
              ></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-2xl mb-4 font-semibold">
              Chuyển Hướng Nhanh
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-orange-400">
                <ScrollLink
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={handleClick}
                  offset={-200}
                >
                  Trang chủ
                </ScrollLink>
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                <ScrollLink
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={handleClick}
                  offset={-200}
                >
                  About
                </ScrollLink>
              </li>

              <li className="cursor-pointer  hover:text-orange-400">
                <ScrollLink
                  activeClass="active"
                  to="destination"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={handleClick}
                  offset={-70}
                >
                  Điểm Đến
                </ScrollLink>
              </li>

              <li className="cursor-pointer  hover:text-orange-400">
                <ScrollLink
                  activeClass="service"
                  to="service"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={handleClick}
                  offset={-70}
                >
                  Dịch Vụ
                </ScrollLink>
              </li>

              <li className="cursor-pointer  hover:text-orange-400">
                <ScrollLink
                  activeClass="active"
                  to="photo"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={handleClick}
                  offset={-70}
                >
                  Ảnh
                </ScrollLink>
              </li>
              <li className="cursor-pointer  hover:text-orange-400">
                <ScrollLink
                  activeClass="active"
                  to="blogs"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={handleClick}
                  offset={-70}
                >
                  Blogs
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white mb-4 text-2xl font-semibold">Liên Hệ</h3>
            <p>Hà Nội, Việt Nam</p>
            <p>Phone: +84-986-921-104</p>
            <p>Email: Duongcoilc2004@Gmail.Com</p>
            <p>7:00am - 10:00pm</p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white mb-4">Tin Tức Mới</h3>
            <p>Đăng Ký Để Nhận Tin Tức Về Ưu Đãi Sớm Nhất!</p>
            <form className="mt-4 flex">
              <input
                type="email"
                className="px-4 py-2 rounded-l-lg focus:outline-none"
                placeholder="Email của bạn"
              />
              <button className="bg-orange-500 px-6 py-2 text-white rounded-r-lg hover:bg-orange-600">
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
        <p className="text-center mt-10">
          Created By <span className="text-orange-400">STravel</span> | All
          Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
