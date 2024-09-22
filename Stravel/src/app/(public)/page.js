import Contact from "@/Components/contact/Contact";
import FeedBack from "@/Components/feedback/FeedBack";
import ForYou from "@/Components/ForYou/ForYou";
import MyHome from "@/Components/Home";
import Library from "@/Components/Library/Library";
import PreferentialPage from "@/Components/preferential/Preferential";
import Sale from "@/Components/sale/Sale";
import Service from "@/Components/Service/Service";
import React from "react";

export default function page() {
  return (
    <main className="flex flex-col ">
      <MyHome></MyHome>
      <PreferentialPage></PreferentialPage>
      <ForYou></ForYou>
      <Sale></Sale>
      <Service></Service>
      <Library></Library>
      <FeedBack></FeedBack>
      <Contact></Contact>
    </main>
  );
}
