"use client";
import FormContact from "@/Components/contact/FormContact";
import { useSelector } from "react-redux";

function PreferentialPage() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  return (
    <section
      className={`pb-18 pt-20 py-6 px-28 ${darkTheme ? "bg-[#333]" : " "}`}
      id="preferential"
    >
      <div className="">
        <div className="flex gap-4 items-center justify-center">
          <span
            className={
              "text-orange-400 text-3xl font-bold   w-12  p-2 rounded text-center " +
              (darkTheme ? "bg-[rgba(255,165,0,.2)]" : " bg-orange-200 ")
            }
          >
            T
          </span>
          <span
            className={
              "text-orange-400 text-3xl font-bold   w-12  p-2 rounded text-center " +
              (darkTheme ? "bg-[rgba(255,165,0,.2)]" : " bg-orange-200 ")
            }
          >
            Ì
          </span>
          <span
            className={
              "text-orange-400 text-3xl font-bold   w-12  p-2 rounded text-center " +
              (darkTheme ? "bg-[rgba(255,165,0,.2)]" : " bg-orange-200 ")
            }
          >
            M
          </span>
          <span
            className={
              "text-orange-400 text-3xl font-bold   w-12  p-2 rounded text-center " +
              (darkTheme ? "bg-[rgba(255,165,0,.2)]" : " bg-orange-200 ")
            }
          >
            {" "}
            Ư
          </span>
          <span
            className={
              "text-orange-400 text-3xl font-bold   w-12  p-2 rounded text-center " +
              (darkTheme ? "bg-[rgba(255,165,0,.2)]" : " bg-orange-200 ")
            }
          >
            U
          </span>
          <span
            className={
              "text-orange-400 text-3xl font-bold   w-12  p-2 rounded text-center " +
              (darkTheme ? "bg-[rgba(255,165,0,.2)]" : " bg-orange-200 ")
            }
          >
            Đ
          </span>
          <span
            className={
              "text-orange-400 text-3xl font-bold   w-12  p-2 rounded text-center " +
              (darkTheme ? "bg-[rgba(255,165,0,.2)]" : " bg-orange-200 ")
            }
          >
            Ã
          </span>
          <span
            className={
              "text-orange-400 text-3xl font-bold   w-12  p-2 rounded text-center " +
              (darkTheme ? "bg-[rgba(255,165,0,.2)]" : " bg-orange-200 ")
            }
          >
            I
          </span>
        </div>
        <div className="row flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center">
          <div className="w-6/12 ">
            <img
              className="image"
              src="https://code-fullstack-exercise49.vercel.app/images/book-img.svg"
              alt="test"
            />
          </div>
          <div className=" w-full  mt-20 sm:w-ful ">
            <FormContact darkTheme={darkTheme}></FormContact>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreferentialPage;
