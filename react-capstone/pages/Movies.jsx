import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "160px", height: "120px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
];

const Movies = () => {
  const [selected, setSelected] = useState([]);
  const navigate =  useNavigate();
  const handleClick = () => {
    if (selected.length < 3) {
      return;
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selected));
      navigate("/display");
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <div
          className="text-container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "50px",
            flexDirection: "column",
            width: "40vw",
          }}
        >
          <p
            style={{
              display: "flex",
              fontFamily: "Single Day",
              color: "#72DB73",
              fontSize: "60px",
              fontWeight: "400",
              marginBottom: "50px",
            }}
          >
            Super app
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "68px",
              color: "#FFFFFF",
              width: "550px",
              marginBottom: "25px"
            }}
          >
            Choose your entertainment category
          </p>
          <div className="chip_container" style={{
            display: "grid",
            gridTemplateColumns: "0.5fr 0.5fr 1fr",
            gap: "10px"
          }}>
          {selected.map((item)=> {
            return <MovieChip key={item} data={item} selected={selected} setSelected={setSelected} />;
          })}
          </div>

          {selected.length < 3 ? <p style={{
          color: "#FF0000",
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "25px"
        }}> <span><img src="../assets/error.png"/></span>&nbsp;Minimum 3 categories required</p> : <></>}
        </div>
        <div
          className="genre-container"
          style={{
            marginTop: "50px",
            width: "60vw",
            height: "50vh",
            display: "grid",
            gridTemplateColumns: "0.5fr 0.5fr 1fr",
            gap: "16px",
          }}
        >
          {genres.map((genres) => {
            return (
              <MovieBox
                key={genres.id}
                data={genres}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        <button onClick={handleClick} style={{
          backgroundColor:"green",
          color: "#FFFFFF",
          borderRadius: "38px",
          fontFamily: "DM Sans",
          fontSize: "27px",
          fontWeight: "500",
          border: "none",
          width: "200px",
          height: "50px",
          textAlign: "center",
        }}>Next Page</button>
        </div>
        
      </div>
    </>
  );
};

export default Movies;
