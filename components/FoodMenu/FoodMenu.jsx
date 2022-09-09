import { menuItems } from "../../data/menu-data";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ItemModal from "../ItemModal/ItemModal";

const pizzaImages = [
  "/assets/pizza1.png",
  "/assets/pizza2.png",
  "/assets/pizza3.png",
  "/assets/pizza4.png",
  "/assets/pizza5.png",
  "/assets/pizza6.png",
  "/assets/pizza7.png",
  "/assets/pizza8.png",
];

const ImageStyle = styled.img`
  width: 150px;
  height: 150px;
`;

const ContainerLight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerDark = styled(ContainerLight)`
  color: white;
`;

const FoodItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FoodItemLight = styled.p`
  color: white;
  font-size: 2rem;

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
              <FoodItemContainer onClick={getFoodInfo} key={key} id={item.id}>
                <ImageStyle
                  src={pizzaImages[key]}
                  alt="pizza image"
                ></ImageStyle>
                <FoodItemLight>{item.title}</FoodItemLight>
              </FoodItemContainer>
            );
          })}
        </ContainerLight>
      ) : (
        <ContainerDark>
          {Object.values(menuItems).map((item, key) => {
            return (
              <FoodItemContainer onClick={getFoodInfo} key={key} id={item.id}>
                <ImageStyle
                  src={pizzaImages[key]}
                  alt="pizza image"
                ></ImageStyle>
                <FoodItemLight>{item.title}</FoodItemLight>
              </FoodItemContainer>
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
