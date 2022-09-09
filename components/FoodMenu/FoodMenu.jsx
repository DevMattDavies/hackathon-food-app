import { menuItems } from "../../data/menu-data";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ItemModal from "../ItemModal/ItemModal";

const ContainerLight = styled.div`
  border: 2px solid black;
  background-color: white;
`;

const ContainerDark = styled.div`
  border: 2px solid white;
  color: white;
  background-color: black;
`;

const FoodItemLight = styled.p`
  color: black;

  &:hover {
    cursor: pointer;
  }
`;

const FoodItemDark = styled(FoodItemLight)`
  color: white;
`;

function FoodMenu({ theme, toggleTheme }) {
  const [nutritionInfo, setNutritionInfo] = useState();
  const [ingredientsInfo, setIngredientsInfo] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function getFoodInfo(e) {
    getNutrition(e.target.id);
    getIngredients(e.target.id);
    setIsModalOpen(true);
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
              <FoodItemLight onClick={getFoodInfo} key={key} id={item.id}>
                {item.title}
              </FoodItemLight>
            );
          })}
        </ContainerLight>
      ) : (
        <ContainerDark>
          {Object.values(menuItems).map((item, key) => {
            return (
              <FoodItemDark onClick={getFoodInfo} key={key} id={item.id}>
                {item.title}
              </FoodItemDark>
            );
          })}
        </ContainerDark>
      )}
      {isModalOpen && (
        <ItemModal
          nutritionInfo={nutritionInfo}
          ingredientsInfo={ingredientsInfo}
          setIsModalOpen={setIsModalOpen}
          setNutritionInfo={setNutritionInfo}
          setIngredientsInfo={setIngredientsInfo}
          theme={theme}
        />
      )}
    </>
  );
}

export default FoodMenu;
