import React, { ReactNode } from 'react'
import './button.scss'

type Props = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  design: 'primary' | 'danger' | 'gray-light' | 'gray-dark' | 'large' | 'with-icon'
  onClick?: () => void
}

export default function Button({ children, design, type, onClick }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn__btn--${design}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  onClick: () => null
}
