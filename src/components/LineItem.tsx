import React from "react";
import { ReactComponent as InfoIcon } from "../icons/info-icon.svg";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import { theme } from "../theme";

type LineItemProps = {
  title: string;
  value: string;
  top?: boolean;
  bottom?: boolean;
  green?: boolean;
  showInfo?: boolean;
};

const LineItemContainer = styled.div<{ $top?: boolean; $bottom?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: ${(props) =>
    props.$top
      ? "0px 20px 20px 20px"
      : props.$bottom
      ? "0px"
      : "0px 0px 20px 0px"};
  color: ${theme.grey400};
`;

const ItemText = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const StyledInfoIcon = styled(InfoIcon)`
  margin-top: 2px;
  margin-left: 10px;
  fill: ${theme.grey500};
  height: 12px;
  width: 12px;
`;

const ValueContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DollarSign = styled.div<{ $green?: boolean; $bottom?: boolean }>`
  color: ${(props) =>
    props.$green ? theme.green : props.$bottom ? theme.grey400 : theme.grey600};
  font-weight: ${(props) => (props.$bottom ? "bold" : "normal")};
  font-size: ${(props) => (props.$bottom ? "16px" : "14px")};
`;

const Value = styled.div<{ $bottom?: boolean }>`
  color: ${theme.grey400};
  font-weight: ${(props) => (props.$bottom ? "bold" : "normal")};
  font-size: ${(props) => (props.$bottom ? "16px" : "14px")};
`;

export function LineItem({
  title,
  value,
  top,
  bottom,
  green,
  showInfo,
}: LineItemProps) {
  return (
    <LineItemContainer $top={top} $bottom={bottom}>
      <ItemText>
        {title}
        {showInfo && (
          <>
            <Tooltip id="tooltip" />
            <StyledInfoIcon
              data-tooltip-id="tooltip"
              data-tooltip-content="Lorem Ipsum"
            />
          </>
        )}
      </ItemText>

      <ValueContiner>
        <DollarSign $green={green} $bottom={bottom}>
          $
        </DollarSign>
        &nbsp;
        <Value $bottom={bottom}>{value}</Value>
      </ValueContiner>
    </LineItemContainer>
  );
}
