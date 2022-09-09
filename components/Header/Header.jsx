import styled from "styled-components";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const HeaderStyle = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;

const BasketContainer = styled.div`
  display: flex;
  /* align-items: center; */
  /* gap: 1rem; */
`;

const BasketNumber = styled.p`
  border-radius: 25%;
  border: 1px solid black;
  padding: 0.5rem;
`;

function Header({ theme, toggleTheme }) {
  return (
    <HeaderStyle>
      <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
      <BasketContainer>
        <ShoppingBasketIcon style={{ fontSize: "2rem" }} />
        <BasketNumber>0</BasketNumber>
      </BasketContainer>
    </HeaderStyle>
  );
}

export default Header;
