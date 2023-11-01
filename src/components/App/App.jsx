import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import mainApi from "../../utils/MainApi";
import movieApi from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useState, useEffect } from "react";
import { Routes, useNavigate, Navigate, Route } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLogged, setLogged] = useState(null);
  const [serverError, setServerError] = useState("");
  const [initialMovies, setInitialMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);

  useEffect(() => {
    if (isLogged) {
      mainApi
        .getUserInfo()
        .then((userInfo) => setCurrentUser(userInfo))
        .catch((err) => console.warn(err));
    }
  }, [isLogged]);

  useEffect(() => {
    handleSignIn();
  }, []);

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((movies) => setUserMovies(movies))
      .catch((err) => console.warn(err));
  }, [isLogged]);

  function handleUserRegister({ userName, email, password }) {
    setIsLoading(true);

    const newUserInfo = {
      name: userName,
      email: email,
      password: password,
    };

    mainApi
      .signUp(newUserInfo)
      .then(() => {
        handleUserLogin({
          email: email,
          password: password,
        });
      })
      .catch((err) => {
        setLogged(false);
        setServerError(err);
        console.warn(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignIn() {
    mainApi
      .getUserInfo()
      .then(() => setLogged(true))
      .catch((err) => {
        setLogged(false);
        console.warn(err);
      });
  }
  if (isLogged === null) {
    return <Preloader />;
  }

  function handleUserLogin({ email, password }) {
    setIsLoading(true);

    const userInfo = {
      email: email,
      password: password,
    };

    mainApi
      .signIn(userInfo)
      .then(() => {
        setLogged(true);
        navigate("/movies");
      })
      .catch((err) => {
        setServerError(err);
        console.warn(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignOut() {
    mainApi
      .signOut()
      .then(() => {
        setLogged(false);
        setCurrentUser({});
        setUserMovies([]);
        navigate("/");
        window.localStorage.clear();
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  function handleUpdateUserInfo(newUserInfo) {
    setIsLoading(true);

    mainApi
      .updateUserInfo(newUserInfo)
      .then((newUserInfo) => {
        setCurrentUser({ ...newUserInfo });
        setServerError("Аккаунт успешно изменен");
      })
      .catch((err) => {
        setServerError(err);
        console.warn(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleServerError(msg) {
    setServerError(msg);
  }

  function handleSearchMovies() {
    return movieApi.getAllMovies().then((initialMovies) => {
      setInitialMovies(initialMovies);
      return initialMovies;
    });
  }

  function handleCardLiked(movie) {
    const movieToAdd = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    const myCurrentMovie = userMovies.filter(
      (myMovie) => myMovie.movieId === movie.id
    )[0];

    if (myCurrentMovie) {
      mainApi
        .deleteMovie(myCurrentMovie._id)
        .then(() =>
          setUserMovies(
            userMovies.filter((myMovie) => myMovie._id !== myCurrentMovie._id)
          )
        )
        .catch((err) => {
          console.warn(err);
        });
    } else {
      mainApi
        .saveMovie(movieToAdd)
        .then((movie) => {
          setUserMovies([...userMovies, movie]);
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  }

  function handleCardDisliked(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() =>
        setUserMovies(userMovies.filter((myMovie) => myMovie._id !== movie._id))
      )
      .catch((err) => {
        console.warn(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main isLogged={isLogged} />} />
          <Route
            path="movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLogged={isLogged}
                initialMovies={initialMovies}
                userMovies={userMovies}
                onSubmit={handleSearchMovies}
                onClickCardLike={handleCardLiked}
              />
            }
          />
          <Route
            path="saved-movies"
            element={
              <SavedMovies
                element={SavedMovies}
                isLogged={isLogged}
                userMovies={userMovies}
                onClickCardLike={handleCardDisliked}
              />
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute
                element={Profile}
                isLogged={isLogged}
                onSignOut={handleSignOut}
                onUpdateUser={handleUpdateUserInfo}
                serverError={serverError}
                isLoading={isLoading}
              />
            }
          />

          <Route
            path="signin"
            element={
              isLogged ? (
                <Navigate to="/" />
              ) : (
                <Login
                  onLoginUser={handleUserLogin}
                  serverError={serverError}
                  onServerError={handleServerError}
                  isLoading={isLoading}
                />
              )
            }
          />

          <Route
            path="signup"
            element={
              isLogged ? (
                <Navigate to="/" />
              ) : (
                <Register
                  onRegisterUser={handleUserRegister}
                  serverError={serverError}
                  onServerError={handleServerError}
                  isLoading={isLoading}
                />
              )
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}
