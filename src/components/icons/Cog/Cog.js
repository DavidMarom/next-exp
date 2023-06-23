"use client";
import React from 'react'
import PropTypes from "prop-types"
import Icon from './Cog.svg'
import { IMG } from './Cog.style'

export default function Cog({
  size = "50px",
  color = "red",
}) {
  return (
    <IMG
      color={color}
      src={Icon}
      alt="Cog"
      size={size}
    />
  )
}

Cog.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}
