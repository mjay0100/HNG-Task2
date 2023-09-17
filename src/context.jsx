/* eslint-disable react/prop-types */
import { useState, useContext, useEffect, createContext } from "react";
import { useCallback } from "react";
import axios from "axios";

const url = "https://api.themoviedb.org/3/movie/top_rated";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(url, options);
      setMovie(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <AppContext.Provider value={{ loading, movie }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
