import FoodMenu from "../FoodMenu/FoodMenu";
import Header from "../Header/Header";

function HomePage({ theme, toggleTheme }) {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <FoodMenu theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default HomePage;
