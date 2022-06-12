// import styled movie
import StyledMovie from "./Movie.styled";

// Movie menangkap props
// props biar datanya dinamis
function Movie(props) {
	// destructing array
	const { film } = props;

	return (
		<StyledMovie>
			<div>
				<img src={film.poster} alt="" />
				<h3>{film.title}</h3>
				<p>{film.year}</p>
			</div>
		</StyledMovie>
	);
}

export default Movie;
