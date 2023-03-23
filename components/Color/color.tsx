import React from 'react'
import './colors.scss'

type Props = {
  color: {
    variableName: string
    hexValue: string
    rgbValue: string
    hslValue: string
  }
}

export default function Color({ color }: Props) {
  const { variableName, hexValue, rgbValue, hslValue } = color;
  return (
    <div className="color__main-container">
      <div className={`color__colorbox-container bg-${variableName} text-white`}>
        <h2>{hexValue}</h2>
      </div>
      <div className="color__text-container">
        <div className="row justify-space-between mt-1 mr-1">
          <p className="text-grey uppercase font-md">RGB</p>
          <p className="font-md mr-1">{rgbValue}</p>
        </div>
        <div className="row justify-space-between mt-1 mr-1">
          <p className="text-grey uppercase font-md">HSL</p>
          <p className="font-md mr-1">{hslValue}</p>
        </div>
      </div>
    </div>
  )
}