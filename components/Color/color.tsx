import React, { ReactElement } from 'react'
import styles from './colors.module.scss'

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
    <div className={styles.mainContainer}>
      <div className={`${styles.colorContainer} bg-${variableName} text-white`}>
        <h2>{hexValue}</h2>
      </div>
      <div className={styles.textContainer}>
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