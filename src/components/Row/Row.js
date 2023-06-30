"use client";
import PropTypes from "prop-types"
import { RowContainer } from "./Row.style"

function Row({
    children,
    height,
    justifyContent = "space-between",
    background,
    marinBottom
}) {
    return (
        <RowContainer
            justifyContent={justifyContent}
            height={height}
            background={background}
            marginBottom={marinBottom}
        >
            {children}
        </RowContainer>
    )
}

Row.propTypes = {
    marginBottom: PropTypes.string,
    children: PropTypes.node,
    height: PropTypes.number,
    background: PropTypes.string,
    justifyContent: PropTypes.string
}

export default Row