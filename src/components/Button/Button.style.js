import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: ${({ width }) => width};
  height: ${({ size }) =>
    size === "small" ? 30 : size === "medium" ? 50 : 70}px;
  border-radius: ${({ rounded }) => (rounded ? "50px" : "0")};
  background-color: ${({ backgroundColor, disable }) =>
    disable ? "#b4ccfe" : backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ disable }) => (disable ? "#ffffff" : "#ffffff")};
  border: none;
  cursor: pointer;
  margin-top: ${({ marginTop }) => marginTop};
  padding-right: 20px;
  padding-left: 20px;
  color: black;
  font-family: var(--font-family-main);
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  :hover {
    opacity: 0.85;
    cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};
  }
`;
