import styled from "styled-components";

// Styled Component
const StyledMovie = styled.div`
	margin-bottom: 1rem;

	img {
		border-radius: 25px;
		max-width: 100%;
		height: auto;
		margin-bottom: 1rem;
	}

	h3 {
		color: #b5179e;
		font-size: 1.95rem;
		margin-bottom: 0.5rem;
	}

	p {
		color: #480ca8;
	}

	@media screen and (min-width: 768px) {
		flex-basis: 50%;
	}

	@media screen and (min-width: 992px) {
		padding: 1rem;
		flex-basis: 25%;
	}
`;

export default StyledMovie;