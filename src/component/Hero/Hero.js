/* eslint-disable react-hooks/exhaustive-deps */
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import StyledHero from "./Hero.styled";

function Hero() {
	//  Membuat state movie
	const [movie, setMovie] = useState("");

	async function fetchMovie() {
		const response = await fetch(
			"https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
		);
		const data = await response.json();
		setMovie(data);
	}

	useEffect(fetchMovie, []);

	console.log(movie);

	return (
		<StyledHero>
			<div>
				<section>
					<div>
						<h2>{movie.Title}</h2>
						<h3>{movie.Genre}</h3>
						<p>{movie.Plot}</p>
						<Button variant="primary" size="sm">
							Watch
						</Button>
					</div>
					<div className="styled__right">
						<img src={movie.Poster} alt={movie.Title} />
					</div>
				</section>
			</div>
		</StyledHero>
	);
}

export default Hero;
