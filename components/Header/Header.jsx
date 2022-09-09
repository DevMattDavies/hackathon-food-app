import styled from "styled-components";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const HeaderStyleLight = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--red);
  color: var(--white);
  font-family: var(--header-font);
`;

const HeaderStyleDark = styled(HeaderStyleLight)`
  background-color: var(--black);
`;

const BasketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const BasketNumber = styled.p`
  border-radius: 25%;
  border: 1px solid black;
  padding: 0.5rem;
  font-size: 1.2rem;
`;

function Header({ theme, toggleTheme, basketTotal }) {
  return (
    <>
      {theme === "light" ? (
        <HeaderStyleLight>
          <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
          <BasketContainer>
            <ShoppingBasketIcon style={{ fontSize: "2rem" }} />
            <BasketNumber>{basketTotal}</BasketNumber>
          </BasketContainer>
        </HeaderStyleLight>
      ) : (
        <HeaderStyleDark>
          <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
          <BasketContainer>
            <ShoppingBasketIcon style={{ fontSize: "2rem" }} />
            <BasketNumber>0</BasketNumber>
          </BasketContainer>
        </HeaderStyleDark>
      )}
    </>
  );
}

export default Header;
