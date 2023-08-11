import InputStandar from "./components/InputStandar";
import StandarHeader from "./components/StandarHeader";
import BgOrangeTop from "./components/bg-orange-top";
function CreateAccount() {
  return (
    <main>
      <BgOrangeTop />
      <StandarHeader text={"Crear Cuenta"} />
      <form action="" className=" mx-auto w-[80%]">
        <p className="text-4xl mx-auto w-full">
          Cual es tu correo electronico?
        </p>
        <label htmlFor="">Correo electronico:</label>
        <InputStandar />
        <span>Deberas poder confirmarlo luego.</span>
      </form>
    </main>
  );
}

export default CreateAccount;
