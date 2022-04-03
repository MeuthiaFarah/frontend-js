import styles from "./Movies.module.css";

function Movies() {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movie</h2>

        {/* ini class movie */}
        <div className={styles.movies__container}>

          {/* movie ke 1 */}
          <div className={styles.movie}>
            <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>2020</p>
          </div>

          {/* movie ke 2 */}
          <div className={styles.movie}>
            <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>2020</p>
          </div>

          {/* movie ke 3 */}
          <div className={styles.movie}>
            <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>2022</p>
          </div>

          {/* movie ke 4 */}
          <div className={styles.movie}>
            <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>2023</p>
          </div>

          {/* movie ke 5 */}
          <div className={styles.movie}>
            <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>2022</p>
          </div>

          {/* cmovie ke 6 */}
          <div className={styles.movie}>
            <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>2021</p>
          </div>

          {/* movie ke 7 */}
          <div className={styles.movie}>
            <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>2019</p>
          </div>

          {/* movie ke 8 */}
          <div className={styles.movie}>
            <img className={styles.movie__image} src="https://picsum.photos/300/400" alt="" />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>2019</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Movies;