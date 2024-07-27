import React from "react";
import "./MovieComponrnt.css"


const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
   
    <div className="MovieContainer"
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img className="CoverImage" height="280px" width="300px" src={Poster} alt={Title} />
      <div className="MovieInfo">{Title}</div>
      <div className="InfoColumn">
        <div className="MovieInfo">Year : {Year}</div>
        <div className="MovieInfo">Type : {Type}</div>
      </div>
    </div>
  );
};
export default MovieComponent;