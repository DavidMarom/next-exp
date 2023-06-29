import styled from "styled-components";

export const SBContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  background-color: ${({ background }) => background};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 10px;
`;
