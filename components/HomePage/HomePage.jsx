import FoodMenu from "../FoodMenu/FoodMenu";
import Header from "../Header/Header";
import Title from "../Title/Title";
import styled from "styled-components";

const PageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

function HomePage({ theme, toggleTheme }) {
  return (
    <>
      <PageWrapper>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Title theme={theme} />
        <FoodMenu theme={theme} />
      </PageWrapper>
    </>
  );
}

export default HomePage;
