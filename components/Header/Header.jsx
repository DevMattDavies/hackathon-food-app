import styled from "styled-components";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const HeaderStyle = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 3rem;
`;

function Header({ theme, toggleTheme }) {
  return (
    <HeaderStyle>
      <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
    </HeaderStyle>
  );
}

export default Header;
