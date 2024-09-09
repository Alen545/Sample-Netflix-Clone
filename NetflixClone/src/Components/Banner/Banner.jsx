import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../Axios/Axios";
import { API_KEY, baseUrl } from "../../Constants/Constants"; 

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}?i=tt3896198&apikey=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? movie.Poster : ""})`
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.Title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.Plot : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
