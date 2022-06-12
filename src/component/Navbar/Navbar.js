import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
	return (
		<StyledNavbar>
			<div>
				<nav>
					<div>
						<h1>Movie App</h1>
					</div>
					<div>
						<ul>
							<li>
								<Link ClassName="navbar__link" to="/">
									Home
								</Link>
							</li>
							<li>
								<Link ClassName="navbar__link" to="/movie/create">App Movie</Link>
							</li>
							<li>
								<Link ClassName="navbar__link" to="/movie/popular">Popular</Link>
							</li>
							<li>
								<Link ClassName="navbar__link" to="/movie/now">Now Playing</Link>
							</li>
							<li>
								<Link ClassName="navbar__link" to="/movie/top">Top Rated</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</StyledNavbar>
	);
}

export default Navbar;
