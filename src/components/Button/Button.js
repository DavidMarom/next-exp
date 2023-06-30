"use client";
import React from "react";
import PropTypes from "prop-types";
import { ButtonContainer } from "./Button.style";
import { Arrow } from "../index";

const Button = ({
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
  color,
  children,
  arrow = false,
  className,
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
      color={color}
      rounded={rounded}
      onClick={onClick}
      arrow={arrow}
      className={className}
    >
      {label}
      {children}
      {arrow && (
        <Arrow
          marginLeft="10px"
          size="12px"
          color={disable ? "#ffffff" : "115DFC"}
        />
      )}
    </ButtonContainer>
  );
};

Button.propTypes = {
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
  Arrow: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
