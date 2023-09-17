/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const singleMovie = () => {
  const [singleMovie, setSingleMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const data = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response.data);
      setSingleMovie(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    data();
  }, [id]);

  if (loading) {
    return <h1 className="text-center text-3xl font-bold">Loading...</h1>;
  }

  return (
    <>
      <div className="w-5/6 mx-auto my-10">
        <img
          className="rounded-lg "
          src={`https://image.tmdb.org/t/p/original/${singleMovie.backdrop_path}`}
          alt=""
        />
        <div className="flex justify-between">
          <h2
            data-testid="movie-title"
            className=" font-semibold text-xl text-center capitalize my-5"
          >
            movie Title: {singleMovie.title}
          </h2>
          <p
            data-testid="movie-release-date"
            className="font-semibold text-xl text-center capitalize my-5"
          >
            {singleMovie.status}- {singleMovie.release_date}
          </p>
        </div>
        <h2 data-testid="movie-overview" className=" text-lg ">
          {" "}
          {singleMovie.overview}
        </h2>
        <h2 data-testid="movie-runtime" className=" text-lg ">
          Duration :{singleMovie.runtime} mins
        </h2>
        <Link to="/">
          <button className="mt-10 bg-slate-400 hover:bg-slate-500 transition-all delay-75 ease-linear px-3 py-2 text-white rounded-lg">
            Go Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default singleMovie;
