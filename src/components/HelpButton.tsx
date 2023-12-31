import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const StyledButton = styled.button`
  background-color: ${theme.white};
  color: ${theme.grey400};
  border: 1px solid ${theme.grey300};
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 2px 2px 2px ${theme.shadow};
  &:hover {
    opacity: 0.8;
  }
`;

export function HelpButton() {
  return (
    <StyledButton onClick={() => console.log("so something")}>
      Need help?
    </StyledButton>
  );
}
