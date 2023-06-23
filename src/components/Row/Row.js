"use client";
import PropTypes from "prop-types"
import { RowContainer } from "./Row.style"

function Row({
    children,
    height = "300px",
    justifyContent = "space-between",
    background
}) {
    return (
        <RowContainer
            justifyContent={justifyContent}
            height={height}
            background={background}
        >
            {children}
        </RowContainer>
    )
}

Row.propTypes = {
    children: PropTypes.node,
    height: PropTypes.number,
    background: PropTypes.string,
    justifyContent: PropTypes.string
}

export default Row