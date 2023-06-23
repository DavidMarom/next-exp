import PropTypes from "prop-types"
import { RowContainer } from "./Row.style"

function Row({ 
    children,
    height = 300,
    center = true,
    background
}) {

    return (
        <RowContainer
            center={center}
            height={height}
            background={background}
        >
            {children.map(child => child)}

        </RowContainer>
    )
}

Row.propTypes = {
    children: PropTypes.node,
    height: PropTypes.number,
    background: PropTypes.string,
    center: PropTypes.bool
}

export default Row