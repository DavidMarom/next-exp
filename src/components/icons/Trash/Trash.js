"use client";
import React from 'react'
import PropTypes from "prop-types"
import Icon from './Trash.svg'
import { IMG } from './Trash.style'

export default function Trash({
  size = "50px",
  color = "#ff0000",
}) {
  return (
    <IMG
      color={color}
      src={Icon}
      alt="Trash"
      size={size}
    />
  )
}

Trash.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}
