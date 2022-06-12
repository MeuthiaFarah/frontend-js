import styled from "styled-components";

// styled component
const StyledHero = styled.div`
	margin: 1rem;

	section {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	div {
		margin-bottom: 1rem;
	}

	h2 {
		color: #480ca8;
		margin-bottom: 1rem;
		font-size: 2.44rem;
	}

	h3 {
		color: #b5179e;
		margin-bottom: 1rem;
		font-size: 1.59rem;
	}

	p {
		color: #64748b;
		margin-bottom: 1rem;
	}

	Button {
		padding: 0.8rem 2rem;
		border: none;
		border-radius: 10px;
		background-color: #480ca8;
		color: #fff;
	}

	img {
		max-width: 100%;
		height: auto;
		border-radius: 25px;
	}

	@media screen and (min-width: 992px) {
		max-width: 1200px;
		margin: 3rem auto;

		section {
			margin: 0 1rem;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			text-align: left;
		}

		div {
			flex-basis: 40%;
			padding: 1.5rem;
		}

		div {
			flex-basis: 60%;
		}
	}
`;

export default StyledHero;