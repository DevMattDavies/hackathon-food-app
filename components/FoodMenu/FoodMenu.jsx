import { menuItems } from "../../data/menu-data";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerLight = styled.div`
  border: 2px solid black;
  color: black;
  background-color: white;
`;

const ContainerDark = styled.div`
  border: 2px solid white;
  color: white;
  background-color: black;
`;

function FoodMenu({ theme, toggleTheme }) {
  const [nutritionInfo, setNutritionInfo] = useState();
  const [ingredientsInfo, setIngredientsInfo] = useState();

  function getFoodInfo(e) {
    getNutrition(e.target.id);
    getIngredients(e.target.id);
  }

  function getNutrition(id) {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=e0a2eb49e689414c8ae6872090dcc68b`
      )
      .then(function (response) {
        setNutritionInfo(response.data);
      });
  }

  function getIngredients(id) {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=e0a2eb49e689414c8ae6872090dcc68b`
      )
      .then(function (response) {
        setIngredientsInfo(response.data.ingredients);
      });
  }

  //   console.log(nutritionInfo);
  //   console.log(ingredientsInfo);

  return (
    <>
      {theme === "light" ? (
        <ContainerLight>
          {Object.values(menuItems).map((item, key) => {
            return (
              <p onClick={getFoodInfo} key={key} id={item.id}>
                {item.title}
              </p>
            );
          })}
          <button type="button" onClick={toggleTheme}>
            Change Theme
          </button>
        </ContainerLight>
      ) : (
        <ContainerDark>
          {Object.values(menuItems).map((item, key) => {
            return (
              <p onClick={getFoodInfo} key={key} id={item.id}>
                {item.title}
              </p>
            );
          })}
          <button type="button" onClick={toggleTheme}>
            Change Theme
          </button>
        </ContainerDark>
      )}
    </>
  );
}

export default FoodMenu;
