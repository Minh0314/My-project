import React from "react";
import Link from "next/link";
function FooterDetail() {
  return (
    <div className="">
      <div className="bg-[#333] pb-20 py-6 px-28 w-full text-white border-b-2 border-gray-200 bottom-0 left-0 w-full">
        <div className="flex">
          <div className="w-3/12 p-3">
            <h1 className="text-3xl font-bold text-orange-400 pb-3">Stravel</h1>
            <div className="desc text-gray-400">
              Trải qua 17 năm phát triển bền vững, STravel đã ghi dấu ấn của
              mình với thông điệp “Nâng tầm trải nghiệm từng chuyến đi”{" "}
            </div>
          </div>
          <div className="w-3/12 p-3">
            <h1 className="text-3xl font-bold text-orange-400 pb-3">
              Chi Nhánh Chính
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-400">Hà Nội</li>
              <li className="text-gray-400">Ấn Độ</li>
              <li className="text-gray-400">Mỹ</li>
              <li className="text-gray-400">Nhật Bản</li>
              <li className="text-gray-400">Pháp</li>
            </ul>
          </div>
          <div className="w-3/12 p-3">
            <h1 className="pb-3 text-3xl font-bold text-orange-400">
              Chuyển hướng
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-400">
                <Link href={"/"}>Trang chủ</Link>
              </li>
              <li className="text-gray-400">
                <Link href={"/"}>Đặt Lịch</Link>
              </li>
              <li className="text-gray-400">
                <Link href={"/"}>Ưu Đãi</Link>
              </li>
              <li className="text-gray-400">
                <Link href={"/"}>Dịch Vụ</Link>
              </li>
              <li className="text-gray-400">
                <Link href={"/"}>Thư viện</Link>
              </li>
              <li className="text-gray-400">
                <Link href={"/"}>Đánh Giá</Link>
              </li>
              <li className="text-gray-400">
                <Link href={"/"}>Liên Hệ</Link>
              </li>
            </ul>
          </div>
          <div className="w-3/12 p-3">
            <h1 className="text-3xl font-bold text-orange-400 pb-3">
              Tương Tác
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-400">Facebook</li>
              <li className="text-gray-400">Instagram</li>
              <li className="text-gray-400">Twitter</li>
              <li className="text-gray-400">Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="text-2xl text-center text-gray-400 bg-[#333]">
          created by STRAVEL | all rights reserved!
        </div>
      </div>
    </div>
  );
}

export default FooterDetail;
