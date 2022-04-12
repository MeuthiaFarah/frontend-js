import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
  return (
    <div className={styles.container}>
      <section className={styles.form}>

        {/* kolom sebelah kiri */}
        <div className={styles.form__left}>
          <img className={styles.form__image} src="https://picsum.photos/700/400" alt="" />
        </div>

        {/* kolom sebelah kanan */}
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie</h2>
          <form className={styles.input} action="">
            <div className={styles.input__title}>
              <label className={styles.input__label}>Title</label>
              <br />
              <input type="text" name="title" />
            </div>
            <div className={styles.input__year}>
              <label className={styles.input__label}>Year</label>
              <br />
              <input type="text" name="tahun" />
            </div>
            <button className={styles.form__button}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddMovieForm;