import React, { ReactElement } from 'react'

type Props = {
  children: string | ReactElement
  type?: 'button' | 'submit' | 'reset' | undefined
  className?: string
  onClick?: () => void
}

export default function Button({ children, className, type, onClick }: Props) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: 'primary',
  type: 'button',
  onClick: () => null
}
