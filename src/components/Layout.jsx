import React from "react";
import { Outlet } from "react-router-dom";
import Background from "./Background";
import GlowBox from "./GlowBox";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <section className="text-dark">
      <Background />
      <GlowBox left={"0"} top={"0"} opacity={"10%"} />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="h-[4vh] text-center">
        Developed by bamjam101 ~ github. Copyright &copy; All rights reserved by
        the developer.
      </footer>
    </section>
  );
};

export default Layout;
