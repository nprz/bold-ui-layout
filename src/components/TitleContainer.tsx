import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  margin-bottom: 20px;
`;

const TitleText = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubtitleText = styled.div`
  font-size: 14px;
  width: 400px;
`;

export function TitleContainer() {
  return (
    <Container>
      <TitleText>Rent Breakdown</TitleText>
      <SubtitleText>
        Based on your proposal, you can see what you'll be able to expect as
        your monthly expense.
      </SubtitleText>
    </Container>
  );
}
