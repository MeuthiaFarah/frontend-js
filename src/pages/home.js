import { useState } from "react";
import AddMovieForm from "../component/AddMovieForm/AddMovieForm";
import Footer from "../component/Footer/Footer";
import Hero from "../component/Hero/Hero";
import Movies from "../component/Movies/Movies";
import Navbar from "../component/Navbar/Navbar";
import data from "../utils/constants/data";



function Main() {
  // variable state
  // destructing: set nilai awal, set fungsi, dan masukkan param data awal
  const [movies, setMovies] = useState(data)
  
  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  )
}
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />

    </div>
  )
}

export default Home;