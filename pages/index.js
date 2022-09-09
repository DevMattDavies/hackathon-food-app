import { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import FoodMenu from "../components/FoodMenu/FoodMenu";
import HomePage from "../components/HomePage/HomePage";

export const ThemeContext = createContext(null);

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "var(--red)";
    } else {
      document.body.style.backgroundColor = "var(--black)";
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <HomePage theme={theme} toggleTheme={toggleTheme} />
      </ThemeContext.Provider>
    </>
  );
}
