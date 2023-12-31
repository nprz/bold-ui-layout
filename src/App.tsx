import React from "react";
import styled from "styled-components";
import { LineItem } from "./components/LineItem";
import { TitleContainer } from "./components/TitleContainer";
import { DollarIcon } from "./components/DollarIcon";
import { HelpButton } from "./components/HelpButton";
import { theme } from "./theme";

const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    145deg,
    ${theme.backgroundTop} 65%,
    ${theme.backgroundBottom} 65%
  );
`;

const OuterContainer = styled.div`
  width: 500px;
  background-color: ${theme.grey100};
  border: 1px solid ${theme.grey200};
  border-radius: 30px;
  padding: 20px;
`;

const InnerContainer = styled.div`
  background-color: ${theme.white};
  border: 1px solid ${theme.grey300};
  border-radius: 20px;
  padding: 20px;
  box-shadow: 2px 2px 10px ${theme.shadow};
`;

const Divider = styled.div`
  height: 1px;
  border-bottom: 1px dashed ${theme.grey600};
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HelpButtonContainer = styled.div`
  margin-top: 30px;
  width: 100%;
`;

function App() {
  return (
    <Screen>
      <TitleContainer />
      <Container>
        <DollarIcon />

        <OuterContainer>
          <LineItem
            top={true}
            showInfo={true}
            title="Asked Rent"
            value="39,000"
          />

          <InnerContainer>
            <LineItem
              green={true}
              showInfo={true}
              title="Your Proposed Rent"
              value="--"
            />
            <LineItem showInfo={true} title="Utility Bill" value="9,000" />
            <LineItem title="Taxes" value="3,000" />

            <Divider />

            <LineItem
              bottom={true}
              title="Expected monthly expense"
              value="--"
            />
          </InnerContainer>
        </OuterContainer>

        <HelpButtonContainer>
          <HelpButton />
        </HelpButtonContainer>
      </Container>
    </Screen>
  );
}

export default App;
