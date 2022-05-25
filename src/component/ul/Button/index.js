// import styled
import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #480CA8;
  color: #fff;

  // PROPS Variant
  background-color: ${function (props) {
  if (props.variant === "primary") {
    return "blue";
  } else if (props.variant === "secondary") {
    return "pink";
  } else {
    return "#480CA8";
  }
  }};
`;

export default Button;