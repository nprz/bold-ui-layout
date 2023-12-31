import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const Container = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: ${theme.green};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.backgroundTop};
  position: relative;
  bottom: -15px;
`;

export function DollarIcon() {
  return <Container>$</Container>;
}
