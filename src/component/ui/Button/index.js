// import styled
import styled, { css } from "styled-components";

// buat object warna

// buat componen button memakai deklarasi variabel
const Button = styled.button`
	padding: 0.8rem 2rem;
	border: none;
	border-radius: 10px;
	color: #fff;
	cursor: pointer;

	// PROPS Variant
	background-color: ${({ variant, theme }) => {
		// jika variant primary, beri warna ungu tua
		if ({ variant }) {
			// akses colors sesuai dengan variant
			return theme.colors[variant];
		} else {
			return theme.colors.primary;
		}
	}};

	// Jika ada props full tambahkan css baru
	${(props) =>
		props.full &&
		css`
			width: 100%;
			display: block;
		`}
`;

export default Button;
