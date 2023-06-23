"use client";
import React from 'react'
import PropTypes from "prop-types"
import Icon from './Arrow.svg'
import { IMG } from './Arrow.style'

export default function Arrow({
  size = "50px",
  color = "red",
  marginLeft = "0px",
}) {
  return (
    <IMG
      color={color}
      src={Icon}
      alt="Arrow"
      size={size}
      marginLeft={marginLeft}
    />
  )
}

Arrow.propTypes = {
  marginLeft: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
}
