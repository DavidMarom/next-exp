import styled from 'styled-components';

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifycontent }) => justifycontent};
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  background-color: ${({ background }) => background};
  width: ${({ width }) => width};
  height: ${({ height }) => height};

`;
