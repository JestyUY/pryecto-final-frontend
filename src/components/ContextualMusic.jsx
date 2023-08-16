import "../components/ContextualMusic.css";
import arrowLeft from "../assets/Images/arrowLeft.svg";
import { useEffect, useState } from "react";
import InputStandar from "./InputStandar";

const ContextualMusic = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [songs, setSongs] = useState([]);
  const [addFilters, setAddFilters] = useState(songs);

  useEffect(() => {
    fetch("http://localhost:3000/app/songs")
      .then((response) => response.json())
      .then((data) => setSongs(data));
  }, []);

  useEffect(() => {
    setAddFilters(songs);
  }, [songs]);

  const filterUniqueByProperty = (arr, property) => {
    // filtra para que no repita las opciones en el select
    return Array.from(new Set(arr.map((item) => item[property]))).map(
      (value) => {
        return arr.find((item) => item[property] === value);
      }
    );
  };

  const genres = filterUniqueByProperty(songs, "genre");
  const moods = filterUniqueByProperty(songs, "mood");
  const occasions = filterUniqueByProperty(songs, "occasion");
  const weathers = filterUniqueByProperty(songs, "weather");

  const handleGenre = (value) => {
    // agrega las cancioens segun lo seleccionado al array de canciones
    const selectedValue = value;
    const filterObject = addFilters.filter(
      (filter) => selectedValue === filter.genre
    );
    setAddFilters(filterObject);
  };

  const handleMood = (event) => {
    // agrega las cancioens segun lo seleccionado al array de canciones
    const selectedValue = event.target.value;
    const filterObject = addFilters.filter((obj) => selectedValue === obj.mood);

    setAddFilters(filterObject);
  };

  const handleOccasion = (event) => {
    // agrega las cancioens segun lo seleccionado al array de canciones
    const selectedValue = event.target.value;
    const filterObject = addFilters.filter(
      (filter) => selectedValue === filter.occasion
    );
    setAddFilters(filterObject);
  };

  const handleWeather = (event) => {
    // agrega las cancioens segun lo seleccionado al array de canciones
    const selectedValue = event.target.value;
    const filterObject = addFilters.filter(
      (filter) => selectedValue === filter.weather
    );
    setAddFilters(filterObject);
  };

  // const uniqueData = addFilters.filter(
  //   (item, index, self) =>
  //     index === self.findIndex((obj) => obj.title === item.title) // filtra todo lo repetido, uniqueData es el array final
  // );

  console.log(addFilters);

  return (
    <main className="main w-screen h-screen max-w-md max-h-min m-auto relative">
      <div className="navConteiner">
        <nav className="navBar">
          <div className="divArrow">
            <img src={arrowLeft} className="arrowLeft" alt="arrowLeft" />
          </div>
          <div>
            <h3 className="h3">Música Contextual</h3>
          </div>
          <div></div>
        </nav>
      </div>
      <section className="sectionSelects">
        <label className="font-bold text-2xl">Nombre de la playlist</label>
        <InputStandar handleChange={(e) => setPlaylistName(e.target.value)} />
        <label className="selections">
          <b>¿Cuál es la ocasión?</b>
        </label>
        <select className="allSelects" onChange={handleOccasion}>
          <option className="options" name="Actividad" disabled selected>
            Actividad
          </option>
          {occasions.map((occasions, index) => {
            return (
              <option
                className="options"
                value={occasions.occasion}
                key={index}
              >
                {occasions.occasion}
              </option>
            );
          })}
        </select>
        <label className="selections">
          <b>¿Cómo te sientes?</b>
        </label>
        <select className="allSelects" onChange={handleMood}>
          <option className="options" name="Actividad" disabled selected>
            Estado de animo
          </option>
          {moods.map((moods, index) => {
            return (
              <option className="options" value={moods.mood} key={index}>
                {moods.mood}
              </option>
            );
          })}
        </select>
        <label className="selections">
          <b>¿Cómo está el clima?</b>
        </label>
        <select className="allSelects" onChange={handleWeather}>
          <option className="options" name="Actividad" disabled selected>
            Clima
          </option>
          {weathers.map((weathers, index) => {
            return (
              <option className="options" value={weathers.weather} key={index}>
                {weathers.weather}
              </option>
            );
          })}
        </select>
      </section>
      <section className="sectionGenres">
        <h3 className="titleGenero">
          <b>Selecciona un genero:</b>
        </h3>
        <div className="divButtons">
          {genres.map((genres, index) => {
            return (
              <button
                onClick={() => {
                  handleGenre(genres.genre);
                }}
                className="Buttons"
                value={genres.genre}
                key={index}
              >
                {genres.genre}
              </button>
            );
          })}
        </div>
        <button className="buttonCreate">Crear Playlist</button>
      </section>
    </main>
  );
};

export default ContextualMusic;
