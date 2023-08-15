import InputStandar from "./components/InputStandar";
import StandarHeader from "./components/StandarHeader";
import BgOrangeTop from "./components/bg-orange-top";
import OrangeButton from "./components/orange-button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccountSecond() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const sendData = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append('autorization')
    const raw = JSON.stringify({
      email: email,
      username: username,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const respuesta = await fetch(
      "http://localhost:3000/app/register",
      requestOptions
    )
      .then((response) => response.json())

      .catch((error) => console.log("error", error));

    if (respuesta.created) {
      navigate("/");
    }
    console.log(respuesta);
    console.log(email, username, password);
  };
  return (
    <main className="w-screen h-screen max-w-md max-h-min m-auto relative">
      <BgOrangeTop />
      <StandarHeader text={"Crear Cuenta"} url={"/"} />
      <form
        action=""
        className=" mx-auto w-[80%] pt-[25%]  flex flex-col gap-3 "
      >
        <p className="text-4xl mx-auto w-full">
          Ingresa un nombre de usuario contraseña e email.
        </p>
        <label htmlFor="">Nombre de Usuario:</label>
        <InputStandar handleChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="">Contraseña:</label>
        <InputStandar handleChange={(e) => setPassword(e.target.value)} />
        <span className="mx-auto">Deberas contener al menos 8 caracteres.</span>

        <label htmlFor="">Correo electronico:</label>
        <InputStandar handleChange={(e) => setEmail(e.target.value)} />
        <span className="mx-auto">Deberas poder confirmarlo luego.</span>
      </form>
      <div className="w-[90%] mx-auto pt-[50%] ">
        <OrangeButton
          text={"Continuar"}
          bgcolor={"bg-amber-500"}
          sendData={sendData}
        />
      </div>
    </main>
  );
}

export default CreateAccountSecond;
