"use client";
import PropTypes from "prop-types"
import { ColContainer } from "./Col.style"

function Row({
    children,
    width = "100%",
    height = "300px",
    justifyContent = "space-between",
    background
}) {

    return (
        <ColContainer
            justifyContent={justifyContent}
            height={height}
            background={background}
            width={width}
        >
            {children}
        </ColContainer>
    )
}

Row.propTypes = {
    width: PropTypes.string,
    children: PropTypes.node,
    height: PropTypes.string,
    background: PropTypes.string,
    justifyContent: PropTypes.string
}

export default Row