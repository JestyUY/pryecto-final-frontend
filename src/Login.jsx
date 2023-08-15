import { useState } from "react";
import InputStandar from "./components/InputStandar";
import StandarHeader from "./components/StandarHeader";
import BgOrangeTop from "./components/bg-orange-top";
import OrangeButton from "./components/orange-button";

import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");
  const [userPass, setPass] = useState("");
  const [resp, setResp] = useState(undefined);

  const sendData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBlZHJpMTAiLCJpYXQiOjE2OTE5NzMwNTV9.j_xTzdXuMYApVAS5hhVCdbDiowPQW9-JQtvxEEZWcHw"
    );

    const raw = JSON.stringify({
      username: userInfo,
      password: userPass,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    async function fetching() {
      const response = await fetch(
        "http://localhost:3000/app/login",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setResp(data);
      localStorage.setItem("token", data.token);
      const cat = localStorage.getItem("token");
      console.log(cat);
    }
    fetching();

    if (resp !== undefined) {
      navigate("/");
    }
  };
  return (
    <div className="w-screen h-screen max-w-md max-h-min m-auto relative">
      <BgOrangeTop />
      <StandarHeader url={"/"} text={"Log in"} />
      <form
        action=""
        className=" mx-auto w-[80%] pt-[25%]  flex flex-col gap-3 "
      >
        <label htmlFor="">Username or E-mail</label>
        <InputStandar handleChange={(e) => setUserInfo(e.target.value)} />
        <label htmlFor="">Password</label>
        <InputStandar handleChange={(e) => setPass(e.target.value)} />
      </form>
      <div className="w-[90%] mx-auto pt-[50%] ">
        <OrangeButton
          text={"Continuar"}
          bgcolor={"bg-amber-500"}
          sendData={sendData}
        />
      </div>
      <a href="" className="mx-auto">
        Have you forgot your password?
      </a>
    </div>
  );
}

export default LoginPage;
