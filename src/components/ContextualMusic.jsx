import "../components/ContextualMusic.css";
import arrowLeft from "../assets/Images/arrowLeft.svg"
import React, { useEffect, useState } from "react"



const ContextualMusic = () => {


  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/app/songs")
      .then((response) => response.json())
      .then((data) => setSongs(data));

    console.log(songs);
  }, []);
  

  return (
    <main className="main">
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
        <label className="selections">
          <b>¿Cuál es la ocasión?</b>
        </label>
          <select className="allSelects">
          <option className="options" name="Actividad" disabled selected>
            Actividad
          </option>
          <option className="options" name="Ejercicio Fisico">
            Ejercicio Físico
          </option>
        </select>
        <label className="selections">
          <b>¿Cómo te sientes?</b>
        </label>
        <select className="allSelects">
          <option className="options" name="Actividad" disabled selected>
            Estado de animo
          </option>
          <option className="options" name="Ejercicio Fisico">
            Full estres
          </option>
        </select>
        <label className="selections">
          <b>¿Cómo está el clima?</b>
        </label>
        <select className="allSelects">
          <option className="options" name="Actividad" disabled selected>
            Clima
          </option>
          <option className="options" name="Ejercicio Fisico">
            Lloviendo
          </option>
        </select>
        </section>
      <section className="sectionGenres">
        <h3 className="titleGenero">
          <b>Selecciona hasta 3 géneros:</b></h3>
        <div className="divButtons">
          <button className="Buttons">
          GENEROS
          </button>
        </div>
        <button className="buttonCreate">
            Crear Playlist
        </button>
      </section>
    </main>
  );
}

export default ContextualMusic;