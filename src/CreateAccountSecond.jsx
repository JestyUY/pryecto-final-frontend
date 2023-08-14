import InputStandar from "./components/InputStandar";
import StandarHeader from "./components/StandarHeader";
import BgOrangeTop from "./components/bg-orange-top";
import OrangeButton from "./components/orange-button";
function CreateAccountSecond() {
  return (
    <main className="w-screen h-screen max-w-md max-h-min m-auto relative">
      <BgOrangeTop />
      <StandarHeader text={"Crear Cuenta"} url={"/register"} />
      <form
        action=""
        className=" mx-auto w-[80%] pt-[25%]  flex flex-col gap-3 "
      >
        <p className="text-4xl mx-auto w-full">
          Ingresa un nombre de usuario y contraseña.
        </p>
        <label htmlFor="">Nombre de Usuario:</label>
        <InputStandar />
        <label htmlFor="">Contraseña:</label>
        <InputStandar />
        <span className="mx-auto">Deberas contener al menos 8 caracteres.</span>
      </form>
      <div className="w-[90%] mx-auto pt-[80%] ">
        <OrangeButton text={"Continuar"} bgcolor={"bg-amber-500"} />
      </div>
    </main>
  );
}

export default CreateAccountSecond;
