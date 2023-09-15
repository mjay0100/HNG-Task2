/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const URL = "https://api.themoviedb.org/3/movie/top_rated";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
};

const home = () => {
  const [movie, setMovie] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await axios.get(URL, options);
      setMovie(response.data.results);
      console.log("Koca: response.data.results ", response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return <h1 className="text-center text-3xl font-bold">Loading...</h1>;
  }

  const handleFavourite = (id) => {};

  return (
    <>
      <Navbar />
      <h1 className="text-2xl text-center my-8">Featured Movie</h1>
      <div
        data-testid="movie-card"
        className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-center w-[70%] mx-auto"
      >
        {movie.slice(0, 10).map((movie) => {
          const { id } = movie;
          return (
            <div className="" key={id}>
              <div className="relative">
                <img
                  data-testid="movie-poster"
                  className=""
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                />
                <div onClick={() => handleFavourite(movie.id)}>
                  {" "}
                  {isFavourite ? (
                    <MdFavoriteBorder className="absolute top-3 right-3 text-2xl bg-[#D1D5DB] rounded-full p-1" />
                  ) : (
                    <MdFavorite className="absolute top-3 right-3 text-2xl bg-[#D1D5DB] rounded-full p-1" />
                  )}
                </div>
              </div>
              <p data-testid="movie-title">{movie.title}</p>

              <p data-testid="movie-release-date">
                Released - {movie.release_date}
              </p>
              <Link to={`/movies/${id}`}>
                <button className="mt-2 bg-slate-400 hover:bg-slate-500 transition-all delay-75 ease-linear px-2 py-1 text-white rounded-lg">
                  more info
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default home;
