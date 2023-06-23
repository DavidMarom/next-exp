"use client";
import React from 'react'
import Icon from './UploadIcon.svg'
import { IMG } from './UploadIcon.style'

const UploadIcon = () => {
  return (
    <IMG src={Icon} alt="cloud" width="80px" />
  )
}

export default UploadIcon