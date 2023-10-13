import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import LikedMovies from "../LikedMovies/LikedMovies";
import Footer from "../Footer/Footer";

export default function SavedMovies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm />
        <LikedMovies />
      </main>
      <Footer />
    </>
  );
}
