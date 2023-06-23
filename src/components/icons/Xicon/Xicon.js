"use client";
import React from 'react'
import PropTypes from "prop-types"
import Icon from './Xicon.svg'
import { IMG } from './Xicon.style'

export default function Xicon({
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

Xicon.propTypes = {
  size: PropTypes.string,
}
