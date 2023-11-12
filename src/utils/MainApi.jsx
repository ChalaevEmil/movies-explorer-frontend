class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handlePromise(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка при получении объекта ${res.status}`);
  }

  signUp = (newUserInfo) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(newUserInfo),
    }).then((res) => {
      return this._handlePromise(res);
    });
  };

  signIn = (UserData) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(UserData),
    }).then((res) => {
      return this._handlePromise(res);
    });
  };

  signOut = () => {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      credentials: "include",
    }).then((res) => {
      return this._handlePromise(res);
    });
  };

  getUserInfo = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(),
    }).then((res) => {
      return this._handlePromise(res);
    });
  };

  updateUserInfo = (UserData) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(UserData),
    }).then((res) => {
      return this._handlePromise(res);
    });
  };

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then((res) => {
      return this._handlePromise(res);
    });
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(movie),
    }).then((res) => {
      return this._handlePromise(res);
    });
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
    }).then((res) => {
      return this._handlePromise(res);
    });
  }
}

const mainApi = new Api({
  baseUrl: "https://api.kinosite.nomoredomainsicu.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
