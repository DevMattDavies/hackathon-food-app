import FoodMenu from "../FoodMenu/FoodMenu";
import Header from "../Header/Header";
import Title from "../Title/Title";
import styled from "styled-components";

import { useState } from "react";

const PageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

function HomePage({ theme, toggleTheme }) {
  const [basketTotal, setBasketTotal] = useState(0);

  return (
    <>
      <PageWrapper>
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          basketTotal={basketTotal}
        />
        <Title theme={theme} />
        <FoodMenu
          theme={theme}
          setBasketTotal={setBasketTotal}
          basketTotal={basketTotal}
        />
      </PageWrapper>
    </>
  );
}

export default HomePage;
