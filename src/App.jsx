import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Nopage from "./pages/Nopage";
import Layout from "./component/Layout";
import Protected from "./component/Protected";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/layout" element={<Layout />} />
          <Route index element={<Login />} />
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/services" element={<Services Component={Services} />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
