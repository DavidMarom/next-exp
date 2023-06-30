"use client";
import PropTypes from "prop-types"
import { RowContainer } from "./Row.style"

function Row({
    children,
    height,
    justifycontent = "space-between",
    background,
    marginbottom
}) {
    return (
        <RowContainer
        justifycontent={justifycontent}
            height={height}
            background={background}
            marginbottom={marginbottom}
        >
            {children}
        </RowContainer>
    )
}

Row.propTypes = {
    marginbottom: PropTypes.string,
    children: PropTypes.node,
    height: PropTypes.number,
    background: PropTypes.string,
    justifycontent: PropTypes.string
}

export default Row