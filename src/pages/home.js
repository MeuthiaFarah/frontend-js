import { useState } from "react";
import AddMovieForm from "../component/AddMovieForm/AddMovieForm";
// import Counter from "../component/Counter";
import Hero from "../component/Hero/Hero";
import Movies from "../component/Movies/Movies";
import data from "../utils/constants/data";

function Home() {
  // variable state
  // destructing: set nilai awal, set fungsi, dan masukkan param data awal
  const [movies, setMovies] = useState(data)
  
  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </div>
  )

  // return (
  //   <div>
  //     <Counter />
  //   </div>
  // )
}

export default Home;