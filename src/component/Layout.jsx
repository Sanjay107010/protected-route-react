import React from "react";
import { Outlet } from "react-router-dom";
import NavbarMenu from "./Navbar";

const Layout = () => {
  return (
    <>
      <NavbarMenu />
      <Outlet />
    </>
  );
};

export default Layout;
