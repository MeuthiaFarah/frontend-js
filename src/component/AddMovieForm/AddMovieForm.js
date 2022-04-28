import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
  const { movies, setMovies } = props;

  // membuat state title
  const [title, setTitle] = useState("");

  // membuat state data
  const [ date, setDate ] = useState("");

  // membuat state title dan date error
  const [ isTitleError, setIsTitleError ] = useState(false);
  const [ isDateError, setIsDateError ] = useState(false);
  
  // membuat function handle title
  function handleTitle(e) {
    setTitle(e.target.value)
  }

  // membuat function handle year
  function handleDate(e) {
    setDate(e.target.value)
  }

  // membuat function handle Submit
  function handleSubmit(e) {
    // mencegah perilaku default(render ulang)
    e.preventDefault();

    // jika title kosong maka set error title true
    if (title === "") {
      setIsTitleError(true);
    }
    // jika date kosong maka set error date true
    else if (date === "") {
      setIsDateError(true);
      setIsTitleError(false);
    }
    else {
      // siapkan data yang akan diimput
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: "movie",
        poster: "https://picsum.photos/300/400"
      };

      setMovies([ ...movies, movie ]);
      setIsTitleError(false);
      setIsDateError(false);
    };
  };
  
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
          <form onSubmit={handleSubmit} className={styles.input} action="">
            {/* form title */}
            <div className={styles.input__title}>
              <label className={styles.input__label}>Title</label>
              <br />
              <input onChange={handleTitle} type="text" name="title" value={title} />
              {
                isTitleError ? <p>Title wajib diisi</p> : "" 
              }
            </div>
            {/* form year */}
            <div className={styles.input__year}>
              <label className={styles.input__label}>Year</label>
              <br />
              <input onChange={handleDate} type="number" name="tahun" value={date}/>
              {
                isDateError ? <p>Date wajib diisi</p> : ""
              }
            </div>
            {/* button submit */}
            <button className={styles.form__button}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddMovieForm;