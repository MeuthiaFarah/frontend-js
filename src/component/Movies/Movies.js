import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data movies
import data  from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
  // variable state
  // destructing: set nilai awal, set fungsi, dan masukkan param data awal
  const [movies, setMovies] = useState(data)
  
  // fungsi untuk handle click
  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Jujutsu Kaisen",
      year: "2022",
      type: "movie",
      poster: "https://picsum.photos/300/400"
    }

    // menambahkan movie ke state movies
    // spread operator : untuk copy dan merge data
    setMovies([...movies, movie])
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movie</h2>

        {/* ini class movie */}
        <div className={styles.movies__container}>
          {/* 
          * looping array movies menggunakan map
          * render component Movie
          * Movie kirim props (film={movie})
          */}
          {
            movies.map(function (movie) {
              return <Movie key={movie.id} film={movie} />;
            })
          }
        </div>

        <button onClick={handleClick} >Add Movie</button>
        
      </section>
    </div>
  )
}

export default Movies;