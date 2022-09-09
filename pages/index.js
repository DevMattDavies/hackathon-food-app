import { createContext, useState } from "react";
import styled from "styled-components";
import FoodMenu from "../components/FoodMenu/FoodMenu";

export const ThemeContext = createContext(null);

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <FoodMenu theme={theme} toggleTheme={toggleTheme} />
      </ThemeContext.Provider>
    </>
  );
}
