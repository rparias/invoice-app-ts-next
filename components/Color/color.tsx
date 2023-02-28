import React, { ReactElement } from 'react'
import styles from './colors.module.scss'

type Props = {
  variableName: string
  hexValue: string
  rgbValue: string
  hslValue: string
}

export default function Color({ variableName, hexValue, rgbValue, hslValue }: Props) {
  return (
    <div className={`${styles.container} ${styles[variableName]}`}>
      <div className={styles.colorbox}>{hexValue}</div>
      <div className={styles.values}>{rgbValue}, {hslValue}</div>
    </div>
  )
}