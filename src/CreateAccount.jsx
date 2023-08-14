import InputStandar from "./components/InputStandar";
import StandarHeader from "./components/StandarHeader";
import BgOrangeTop from "./components/bg-orange-top";
import OrangeButton from "./components/orange-button";
function CreateAccount() {
  return (
    <main className="w-screen h-screen max-w-md max-h-min m-auto relative">
      <BgOrangeTop />
      <StandarHeader text={"Crear Cuenta"} url={"/"} />
      <form
        action=""
        className=" mx-auto w-[80%] pt-[25%]  flex flex-col gap-3 "
      >
        <p className="text-4xl mx-auto w-full">
          Cual es tu correo electronico?
        </p>
        <label htmlFor="">Correo electronico:</label>
        <InputStandar />
        <span className="mx-auto">Deberas poder confirmarlo luego.</span>
      </form>
      <div className="w-[90%] mx-auto pt-[80%] ">
        <OrangeButton text={"Continuar"} bgcolor={"bg-amber-500"} />
      </div>
    </main>
  );
}

export default CreateAccount;
