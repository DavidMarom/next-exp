"use client";
import React from 'react'
import PropTypes from "prop-types"
import Icon from './Vicon.svg'
import { IMG } from './Vicon.style'

export default function Vicon({
  size = "50px",
}) {
  return (
    <IMG
      src={Icon}
      alt="v"
      size={size}
    />
  )
}

Vicon.propTypes = {
  size: PropTypes.string,
}
