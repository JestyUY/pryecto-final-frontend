import { useEffect, useState } from "react";
import InputStandar from "./components/InputStandar";
import BgOrangeTop from "./components/bg-orange-top";

function SearchMenu() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/app/songs");
        const data = await response.json();
        const first20Songs = data.slice(0, 20); // Get the first 20 items
        setSongs(first20Songs);
        console.log(first20Songs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <main className="w-screen h-screen max-w-md max-h-min m-auto relative">
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
        <ul className="flex flex-wrap ">
          {songs.map((ob) => (
            <li className="w-[45%] flex flex-col ">
              <img src={ob.image} alt="" />
              <span className="p-4">{ob.title}</span>
              <span>{ob.artist}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default SearchMenu;
