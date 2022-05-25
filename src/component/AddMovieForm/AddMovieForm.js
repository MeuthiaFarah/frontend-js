import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
	const { movies, setMovies } = props;

	// membuat state title
	const [title, setTitle] = useState("");

	// membuat state year
	const [date, setDate] = useState("");

	// membuat state picture
	const [picture, setPicture] = useState("");

	// membuat state genre
	const [genre, setGenre] = useState("");

	// membuat state handling error
	const [isTitleError, setIsTitleError] = useState(false);
	const [isDateError, setIsDateError] = useState(false);
	const [isPictureError, setIsPictureError] = useState(false);
	const [isGenreError, setIsGenreError] = useState(false);

	// membuat function handle title
	function handleTitle(e) {
		setTitle(e.target.value);
	}

	// membuat function handle year
	function handleDate(e) {
		setDate(e.target.value);
	}

	// membuat function handle picture
	function handlePicture(e) {
		setPicture(e.target.value);
	}

	// membuat function handle genre
	function handleGenre(e) {
		setGenre(e.target.value);
	}

	// function validasi
	function validate(e) {
		// jika title kosong maka set error title true
		if (title === "") {
			setIsTitleError(true);
			return false;
		}
		// jika date kosong maka set error date true
		else if (date === "") {
			setIsDateError(true);
			setIsTitleError(false);
			return false;
		} else if (picture === "") {
			setIsPictureError(true);
			setIsDateError(false);
			setIsTitleError(false);
			return false;
		} else if (genre === "") {
			setIsGenreError(true);
			setIsTitleError(false);
			setIsDateError(false);
			setIsPictureError(false);
			return false;
		} else {
			setIsTitleError(false);
			setIsDateError(false);
			setIsGenreError(false);
			setIsPictureError(false);
			return true;
		}
	}

	// membuat function addMovie
	function addMovie() {
		// siapkan data yang akan diimput
		const movie = {
			id: nanoid(),
			title: title,
			year: date,
			type: "movie",
			poster: picture,
		};

		setMovies([...movies, movie]);
	}

	// membuat function handle Submit
	function handleSubmit(e) {
		// mencegah perilaku default(render ulang)
		e.preventDefault();

		// call function validate dan addMovie
		validate() && addMovie();
	}

	return (
		<div className={styles.container}>
			<section className={styles.form}>
				{/* kolom sebelah kiri */}
				<div className={styles.form__left}>
					<img
						className={styles.form__image}
						src="https://picsum.photos/700/400"
						alt=""
					/>
				</div>

				{/* kolom sebelah kanan */}
				<div className={styles.form__right}>
					<h2 className={styles.form__title}>Add Movie</h2>
					<form onSubmit={handleSubmit} className={styles.input} action="">
						{/* form title */}
						<div className={styles.input}>
							<label className={styles.input__label}>Title</label>
							<br />
							<input
								onChange={handleTitle}
								type="text"
								name="title"
								value={title}
							/>
							{isTitleError ? <Alert>Title wajib diisi</Alert> : ""}
						</div>

						{/* form year */}
						<div className={styles.input}>
							<label className={styles.input__label}>Year</label>
							<br />
							<input
								onChange={handleDate}
								type="number"
								name="tahun"
								value={date}
							/>
							{isDateError ? <Alert>Date wajib diisi</Alert> : ""}
						</div>

						{/* form picture */}
						<div className={styles.input}>
							<label className={styles.input__label}>Picture</label>
							<br />
							<input
								onChange={handlePicture}
								type="text"
								name="gambar"
								value={picture}
							/>
							{isPictureError ? <Alert>Picture wajib diisi</Alert> : ""}
						</div>

						{/* form genre */}
						<div className={styles.input__2}>
							<label className={styles.input__label}>Genre</label>
							<br />
							<select
								onChange={handleGenre}
								className={styles.genre}
								name="genre"
								id=""
							>
								<option id="1" className={styles.genre__option} value={genre}>
									Genre
								</option>
								<option className={styles.genre__option} value={genre}>
									Horror
								</option>
								<option className={styles.genre__option} value={genre}>
									Comedy
								</option>
								<option className={styles.genre__option} value={genre}>
									Action
								</option>
								<option className={styles.genre__option} value={genre}>
									Drama
								</option>
								<option className={styles.genre__option} value={genre}>
									Dll
								</option>
							</select>
							{isGenreError ? <Alert>Genre wajib diisi</Alert> : ""}
						</div>

						{/* button submit */}
						<button className={styles.form__button}>Submit</button>
					</form>
				</div>
			</section>
		</div>
	);
}

export default AddMovieForm;
