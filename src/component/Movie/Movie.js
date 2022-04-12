import styles from "./Movie.module.css";

// Movie menangkap props
// props biar datanya dinamis
function Movie(props) {
  // destructing array
  const { film } = props;

  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src={film.poster} alt="" />
      <h3 className={styles.movie__title}>{film.title}</h3>
      <p className={styles.movie__date}>{film.year}</p>
    </div>
  )
}

export default Movie;