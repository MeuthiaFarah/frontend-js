import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
	const { movies, setMovies } = props;

	// membuat state object
	const [formData, setFormData] = useState({
		title: "",
		date: "",
		picture: "",
		genre: "",
	});

	// membuat function handleChange untuk handle seluruh input
	// gunakan spread dan compute value(yang bisa berubah sesuai property nya)
	function handleChange(e) {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	}

	// membuat state object untuk handling error
	const [isError, setHandleError] = useState({
		isTitleError: false,
		isDateError: false,
		isPictureError: false,
		isGenreError: false,
	});

	const { title, date, picture, genre } = formData;

	const { isTitleError, isDateError, isPictureError, isGenreError } = isError;

	// function validasi
	function validate(e) {
		// jika title kosong maka set error title true
		if (title === "") {
			setHandleError({ ...isError, isTitleError: true });
			return false;
		}
		// jika date kosong maka set error date true
		else if (date === "") {
			setHandleError({ ...isError, isDateError: true, isTitleError: false });
			return false;
		} else if (picture === "") {
			setHandleError({
				...isError,
				isPictureError: true,
				isDateError: false,
				isTitleError: false,
			});
			return false;
		} else if ([genre] === "") {
			setHandleError({
				...isError,
				isGenreError: true,
				isPictureError: false,
				isDateError: false,
				isTitleError: false,
			});
			return false;
		} else {
			setHandleError({
				...isError,
			});
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
								onChange={handleChange}
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
								onChange={handleChange}
								type="number"
								name="date"
								value={date}
							/>
							{isDateError ? <Alert>Date wajib diisi</Alert> : ""}
						</div>

						{/* form picture */}
						<div className={styles.input}>
							<label className={styles.input__label}>Picture</label>
							<br />
							<input
								onChange={handleChange}
								type="text"
								name="picture"
								value={picture}
							/>
							{isPictureError ? <Alert>Picture wajib diisi</Alert> : ""}
						</div>

						{/* form genre */}
						<div className={styles.input__2}>
							<label className={styles.input__label}>Genre</label>
							<br />
							<select
								onChange={handleChange}
								className={styles.genre}
								name="genre"
								id=""
							>
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
						<Button variant="secondary" full>Submit</Button>
					</form>
				</div>
			</section>
		</div>
	);
}

export default AddMovieForm;
