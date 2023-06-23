import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 45px;
`;

export const Line = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  z-index: -2;
  top: 0px;
  border-bottom: 1px solid #e8e8e9;
`;

export const LineBlue = styled.div`
  width: ${({ step }) => (step-1)*33 + '%'};
  height: 50%;
  position: absolute;
  z-index: -1;
  top: 0px;
  border-bottom: 1px solid #115DFC;
`;

export const P = styled.p`
  font-family: 'Assistant-regular', sans-serif;
  font-size: 24px;
  line-height: 0;
  color: ${({ color }) => color};
`;