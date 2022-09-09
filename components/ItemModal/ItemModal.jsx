import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const ModalLight = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1000;
`;

const ModalDark = styled(ModalLight)`
  background-color: black;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: grey;
`;

const IngredientsTitleLight = styled.h1`
  color: black;
  font-size: 3rem;
`;

const IngredientsTitleDark = styled(IngredientsTitleLight)`
  color: white;
`;

const InfoTextLight = styled.p`
  color: black;
  font-size: 1.2rem;
`;

const InfoTextDark = styled(InfoTextLight)`
  color: white;
`;

function ItemModal({
  nutritionInfo,
  setNutritionInfo,
  ingredientsInfo,
  setIngredientsInfo,
  setIsModalOpen,
  theme,
}) {
  function modalCloseHandler() {
    setIngredientsInfo("");
    setNutritionInfo("");
    setIsModalOpen(false);
  }
  return (
    <>
      {ingredientsInfo && (
        <Background onClick={modalCloseHandler}>
          {theme === "light" ? (
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
              {ingredientsInfo.map((ingredient, key) => {
                return (
                  <InfoTextLight key={key}>{ingredient.name}</InfoTextLight>
                );
              })}
            </ModalLight>
          ) : (
            <ModalDark>
              <CloseIcon
                onClick={modalCloseHandler}
                style={{
                  position: "absolute",
                  top: "2rem",
                  right: "2rem",
                  color: "white",
                }}
              />
              <IngredientsTitleDark>Ingredients</IngredientsTitleDark>
              {ingredientsInfo.map((ingredient, key) => {
                return <InfoTextDark key={key}>{ingredient.name}</InfoTextDark>;
              })}
            </ModalDark>
          )}
        </Background>
      )}
    </>
  );
}

export default ItemModal;
