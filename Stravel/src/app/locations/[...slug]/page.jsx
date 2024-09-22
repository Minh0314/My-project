"use client";

import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "@/redux/slice/isLoading";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Destination from "./components/Destination";
import Service from "./components/Service";
import Photo from "./components/Photo";
import FeedBack from "./components/FeedBack";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";

function Page({ params }) {
  const { slug } = params;
  //redux
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const listLocation = useSelector((state) => state.preferential.countries);
  const isLoading = useSelector((state) => state.loading.isLoading);

  const [locationData, setLocationData] = useState(null);
  useEffect(() => {
    dispatch(showLoading());
    const foundLocation = listLocation.find((item) => item.keyword === slug[0]);
    if (foundLocation) {
      setLocationData(foundLocation);
      dispatch(hideLoading());
    }
  }, [listLocation, slug]);

  if (isLoading) {
    return <ReactLoading type={"spin"} color={"#000"} height={70} width={70} />;
  }

  return (
    <div className={`${darkTheme ? "bg-black" : "bg-white"} `}>
      <Home data={locationData} />
      <About />
      <Destination data={locationData} />
      <Service />
      <Photo />
      <FeedBack />
      <BlogPost data={locationData} />
      <Footer />
    </div>
  );
}

export default Page;
