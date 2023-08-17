import { useEffect, useState } from "react";
import InputStandar from "./components/InputStandar";
import BgOrangeTop from "./components/bg-orange-top";
import { useNavigate } from "react-router";
import Footer from "./components/Footer";
function SearchMenu() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  // const [loading, setLoading] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/app/songs", {
          headers: {
            "Content-type": "application/json",
            authorization: `${localStorage.getItem("token")}`, // notice the Bearer before your token
          },
        });
        const data = await response.json();
        const first20Songs = await data.slice(0, 20); // Get the first 20 items
        setSongs(first20Songs);
        console.log(first20Songs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (localStorage.getItem("token") == null) {
      navigate("/login");
    } else {
      fetchData();
    }
  }, []);
  return (
    <main className="w-screen h-screen max-w-md  max-h-min m-auto relative">
      <BgOrangeTop />
      <nav className="absolute top-[8%] w-[90%] left-0 right-0 m-auto">
        <h2 className="pb-4 text-2xl">Buscador</h2>
        <InputStandar />
      </nav>
      <div className="absolute top-[23%] px-6 flex w-full items-center">
        <span className="w-20 font-medium">Top 20s</span>
        <span className="bg-slate-300 w-full h-[2px] block shrink"></span>
      </div>
      <section className="absolute top-[28%] w-[90%] left-0 right-0 m-auto ">
        <ul className="flex flex-wrap place-content-evenly pb-20 ">
          {songs.map((ob) => (
            <li className="w-[45%]  flex flex-col ">
              <img className="h-[158px] " src={ob.image} alt="" />
              <span className="p-4">{ob.title}</span>
              <span>{ob.artist}</span>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}

export default SearchMenu;
