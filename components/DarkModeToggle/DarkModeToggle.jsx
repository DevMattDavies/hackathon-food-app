import ReactSwitch from "react-switch";
import styled from "styled-components";

const ToggleStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function DarkModeToggle({ theme, toggleTheme }) {
  return (
    <ToggleStyle>
      <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    </ToggleStyle>
  );
}

export default DarkModeToggle;
