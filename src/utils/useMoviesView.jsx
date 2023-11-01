import { useState, useEffect } from "react";
const LARGE_WIDTH = 1278;
const MEDIUM_WIDTH = 1006;
const SMALL_WIDTH = 760;
const VIEW_MAX = 16;
const VIEW_LARGEST = 12;
const VIEW_MEDIUM = 8;
const VIEW_SMALL = 5;
const MOVIES_ADD_MAX = 4;
const MOVIES_ADD_LAGEST = 3;
const MOVIES_ADD_MEDIUM = 2;

function useMoviesView() {
  const [moviesCounter, setMoviesCounter] = useState({});
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  useEffect(() => {
    function handleWindowResize() {
      setTimeout(() => {
        setWindowSize({
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      }, 500);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth > LARGE_WIDTH) {
      const moviesOnDisplay = VIEW_MAX;
      const addMovies = MOVIES_ADD_MAX;
      setMoviesCounter({ moviesOnDisplay, addMovies });
    } else {
      if (windowSize.innerWidth > MEDIUM_WIDTH) {
        const moviesOnDisplay = VIEW_LARGEST;
        const addMovies = MOVIES_ADD_LAGEST;
        setMoviesCounter({ moviesOnDisplay, addMovies });
      } else {
        if (windowSize.innerWidth > SMALL_WIDTH) {
          const moviesOnDisplay = VIEW_MEDIUM;
          const addMovies = MOVIES_ADD_MEDIUM;
          setMoviesCounter({ moviesOnDisplay, addMovies });
        } else {
          const moviesOnDisplay = VIEW_SMALL;
          const addMovies = MOVIES_ADD_MEDIUM;
          setMoviesCounter({ moviesOnDisplay, addMovies });
        }
      }
    }
  }, [windowSize]);

  return [moviesCounter, setMoviesCounter];
}

export { useMoviesView };
