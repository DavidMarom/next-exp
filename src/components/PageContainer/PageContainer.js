"use client";
import PropTypes from "prop-types"
import { SBContainer } from "./PageContainer.style"

function PageContainer({
    children,
    width = "100%",
    height = "100vh",
    justifyContent = "start",
    background = "#EFEFEF"
}) {

    return (
        <SBContainer
            justifyContent={justifyContent}
            height={height}
            background={background}
            width={width}
        >
            {children}
        </SBContainer>
    )
}

PageContainer.propTypes = {
    width: PropTypes.string,
    children: PropTypes.node,
    height: PropTypes.string,
    background: PropTypes.string,
    justifyContent: PropTypes.string
}

export default PageContainer