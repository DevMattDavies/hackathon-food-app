import ReactSwitch from "react-switch";
import styled from "styled-components";

const ToggleStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;
`;

function DarkModeToggle({ theme, toggleTheme }) {
  return (
    <ToggleStyle>
      <label> {theme === "light" ? "Light" : "Dark"} </label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    </ToggleStyle>
  );
}

export default DarkModeToggle;
