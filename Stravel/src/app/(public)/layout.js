import React from "react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

export default function layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer className="fixed bottom-0 w-full"></Footer>
    </div>
  );
}
