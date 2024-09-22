"use client";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import React, { use, useState } from "react";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NavBarDetail() {
  const preferentialRef = useRef(null);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div className="w-full px-24 py-5  bg-[rgba(51,51,51,0.75)] fixed z-20">
      <div className="flex justify-between items-center text-white">
        <div className="w-1/12 logo text-2xl font-bold">
          <span className="text-orange-400">S</span>TRAVEL
        </div>
        <div className="nav-link w-6/12">
          <ul className="flex justify-between items-center text-xl">
            <li className="px-4 cursor-pointer">
              <Link
                activeClass="active "
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Trang Chủ
              </Link>
            </li>
            <li className="px-4 cursor-pointer">
              <Link
                activeClass="active "
                to="preferential"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                About
              </Link>
            </li>
            <li className="px-4 cursor-pointer">
              <Link
                activeClass="active"
                to="sale"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Điểm Đến
              </Link>
            </li>{" "}
            <li className="px-4 cursor-pointer">
              <Link
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Dịch Vụ
              </Link>
            </li>
            <li className="px-4 cursor-pointer">
              <Link
                activeClass="active"
                to="feedback"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Ảnh
              </Link>
            </li>
            <li className="px-4 cursor-pointer">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="group-btn flex items-center space-x-4">
          <button>
            <i className="fa-regular fa-sun"></i>
          </button>
          <button className="">Đặt ngay</button>
        </div>
      </div>
    </div>
  );
}

export default NavBarDetail;
