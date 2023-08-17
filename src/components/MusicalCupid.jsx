import "../components/MusicalCupid.css";
import arrowLeft from "../assets/Images/arrowLeft.svg"
import OrangeButton from "../components/orange-button";
import React, { useEffect, useState } from "react"


function MusicalCupid() {

    const [songs, setSongs] = useState([]);
    const [actualIndex, setActualIndex] = useState(0);
    const [playlist, setPlaylist] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/app/songs");
                const data = await response.json();
                setSongs(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const nextArtist = () => {
        if (actualIndex < songs.length - 1) {
            setActualIndex(actualIndex + 1);
        } else {
            setActualIndex(0);
        }
    };
    
    const actualObject = songs[actualIndex];

    const handlePlaylist = (value) => { // agrega las cancioens segun lo seleccionado al array de canciones
        const playlist = songs.filter((filter) => value === filter.artist)
        playlist.forEach((obj) => { setPlaylist(prevPlaylist => [...prevPlaylist, obj]); })
        if (actualIndex < songs.length - 1) {
            setActualIndex(actualIndex + 1);
        } else {
            setActualIndex(0);
        }
      };

    const uniqueImages = playlist.filter((item, index, self) =>
      index === self.findIndex(obj => obj.artist === item.artist) // filtra las fotos para que solo agregue una vez
    );

    console.log(playlist)
    
    return (
        <>
            <div className="page">
                <header className="header" >
                    <div className="navConteiner">
                        <nav className="navBar">
                            <div className="divArrow">
                                <img src={arrowLeft} className="arrowLeft" alt="arrowLeft" />
                            </div>
                            <div>
                                <h3 className="h3">Musical Cupid</h3>
                            </div>
                            <div></div>
                        </nav>
                    </div>
                </header>
                <main className="main">
                    <section className="sectionCupid">

                        <img src={actualObject?.image} alt="" className="image" />
                        <div className="addButtons">
                            <button value={actualObject} onClick={() => { handlePlaylist(actualObject.artist) }}>add to Playlist</button>
                            <button onClick={nextArtist}>not add</button>
                        </div>
                        <h2></h2>
                        <div>
                            <h3 className="artistName">{actualObject?.artist}</h3>
                            <button>volver</button>
                        </div>
                        <div className="divPlaylistImages">
                        {uniqueImages.map((images, index) => {
                            return (
                                <div
                                    value={images.id}
                                    key={index}
                                    >
                                    <img src={images.image} alt="" className="playlistImages" />
                                </div>
                            );
                        })}
                        </div>
                    </section>
                    <OrangeButton text={"Create Playlist"} bgcolor={"bg-amber-500"} className="button disabled:bg-slate-500"/>
                </main>
            </div>

        </>
    );
}

export default MusicalCupid;