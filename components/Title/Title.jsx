import styled from "styled-components";

const TitleStyle = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: var(--highlight);
  font-family: var(--header-font);
`;

function Title() {
  return <TitleStyle>STRANGER THINGS PIZZA</TitleStyle>;
}

export default Title;
