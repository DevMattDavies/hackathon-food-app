import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const ModalLight = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--highlight);
  z-index: 1000;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

const ModalDark = styled(ModalLight)`
  /* background-color: black; */
`;

const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  top: -100px;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: grey; */
`;

const IngredientsTitleLight = styled.h1`
  color: black;
  font-size: 3rem;
`;

const IngredientsTitleDark = styled(IngredientsTitleLight)`
  /* color: white; */
`;

const InfoTextLight = styled.p`
  color: black;
  font-size: 1.5rem;
`;

const InfoTextDark = styled(InfoTextLight)`
  /* color: white; */
`;

const AddToBasketButton = styled.button`
  width: 100%;
  background-color: var(--red);
  color: var(--white);
  border-radius: 5px;
  padding: 1rem;
  font-size: 2rem;
  letter-spacing: 0.1rem;
`;

function ItemModal({
  nutritionInfo,
  setNutritionInfo,
  ingredientsInfo,
  setIngredientsInfo,
  setIsModalOpen,
  theme,
  setBasketTotal,
  basketTotal,
}) {
  function modalCloseHandler() {
    setIngredientsInfo("");
    setNutritionInfo("");
    setIsModalOpen(false);
  }

  function basketModalUpdater() {
    setBasketTotal((prevBasketTotal) => prevBasketTotal + 1);
  }
  return (
    <>
      {ingredientsInfo && nutritionInfo && (
        <ModalLight>
          <CloseIcon
            onClick={modalCloseHandler}
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              color: "black",
            }}
          />
          <IngredientsTitleLight>Ingredients</IngredientsTitleLight>
          <IngredientsContainer>
            {ingredientsInfo.map((ingredient, key) => {
              return <InfoTextLight key={key}>{ingredient.name}</InfoTextLight>;
            })}
          </IngredientsContainer>
          <IngredientsTitleLight>Nutritional Info</IngredientsTitleLight>
          <IngredientsContainer>
            <InfoTextLight>Calories: {nutritionInfo.calories}cal</InfoTextLight>
          </IngredientsContainer>
          <AddToBasketButton onClick={basketModalUpdater}>
            ADD TO BASKET
          </AddToBasketButton>
        </ModalLight>
      )}
    </>
  );
}

export default ItemModal;
