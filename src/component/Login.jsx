import React, { useState } from "react";
import "../css/loginpages.css";
import { useNavigate } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  let Navigate = useNavigate();

  const Loginfun = async (e) => {
    // e.preventDefault();
    // console.log({ email, password });
    // let data = { email, password };

    // console.log("data", data);

    alert("login is pressed");

    localStorage.setItem("login", true);
    Navigate("/home");
  };

  return (
    <div class=" container ">
      <form
        className="modal-content border1 border  "
        method="post"
        onSubmit={Loginfun}
      >
        <div class="imgcontainer">
          <FcBusinessman size={60} />
        </div>
        <div>
          <div>Login</div>
          <br />

          <input
            type="text"
            placeholder="enter email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
