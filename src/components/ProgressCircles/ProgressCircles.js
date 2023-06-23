"use client";
import React from 'react'
import PropTypes from "prop-types"
import Circle from "../Circle/Circle"
import { Container, Line, LineBlue, P } from "./ProgressCircles.style"

export default function ProgressCircles({
    step = 1,
}) {
    return (
        <Container>
            <Line />
            <LineBlue step={step} />
            <Circle color={step >= 1 ? "#115DFC" : "#ffffff"} borderColor={step >= 1 ? "#115DFC" : "#e8e8e9"}><P color={step >= 1 ? "#ffffff" : "#031332"}>1</P></Circle>
            <Circle color={step >= 2 ? "#115DFC" : "#ffffff"} borderColor={step >= 2 ? "#115DFC" : "#E8E8E9"}><P color={step >= 2 ? "#ffffff" : "#031332"}>2</P></Circle>
            <Circle color={step >= 3 ? "#115DFC" : "#ffffff"} borderColor={step >= 3 ? "#115DFC" : "#E8E8E9"}><P color={step >= 3 ? "#ffffff" : "#031332"}>3</P></Circle>
            <Circle color={step >= 4 ? "#115DFC" : "#ffffff"} borderColor={step >= 4 ? "#115DFC" : "#E8E8E9"}><P color={step >= 4 ? "#ffffff" : "#031332"}>4</P></Circle>
        </Container>
    )
}

ProgressCircles.propTypes = {
    step: PropTypes.number,
}
