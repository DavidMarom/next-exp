import React from 'react';
import PropTypes from "prop-types"
import { ButtonContainer } from "./Button2.style"
import { Arrow } from "../Icons"

const Button2 = ({
    type,
    marginTop,
    disable,
    label,
    backgroundColor = "#115DFC",
    width,
    size = "small",
    fontSize = "18px",
    rounded = false,
    onClick,
    arrow = false
}) => {

    return (
        <ButtonContainer
            fontSize={fontSize}
            type={type}
            marginTop={marginTop}
            disable={disable}
            backgroundColor={backgroundColor}
            width={width}
            size={size}
            rounded={rounded}
            onClick={onClick}
            arrow={arrow}
        >
            {label}
            { arrow && <Arrow marginLeft="10px" size="12px" color={disable? "#ffffff": "115DFC"} />}
        </ButtonContainer>
    )
}

Button2.propTypes = {
    type: PropTypes.string,
    marginTop: PropTypes.string,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    fontSize: PropTypes.string,
    rounded: PropTypes.bool,
    Arrow: PropTypes.bool
}

export default Button2