import React from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "./backtotop";
import Header from "./header";
import Footer from "./footer";
import Search from "./seach";

function Main() {
  return (
    <>
      <Header />
      <Search />
      <Outlet /> {/* Đây là chỗ sẽ hiển thị Home/About/... */}
      <Footer />
      <BackToTop />
    </>
  );
}

export default Main;

