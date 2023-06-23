import styled from 'styled-components';
import SVG from "react-inlinesvg";

export const IMG = styled(SVG)`
    padding-top: 0px;
    margin-left: ${({ marginLeft }) => marginLeft};
    & path {fill: ${({ color }) => color}; };
    width: ${({ size }) => size};
    height: ${({ size }) => size};
`