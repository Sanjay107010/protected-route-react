import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  console.log("perotected ");
  const { Component } = props;
  const Navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log("kkk", login);
    if (!login) {
      Navigate("/");
    }
  }, []);

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
