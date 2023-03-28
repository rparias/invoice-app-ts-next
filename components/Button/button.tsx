import Image from 'next/image'
import React, { ReactNode } from 'react'
import './button.scss'

type Props = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  design: 'primary' | 'danger' | 'gray-light' | 'gray-dark' | 'full-width'
  onClick?: () => void
  icon: string | null
}

export default function Button({ children, design, type, onClick, icon }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn__btn-${design} ${icon ? 'btn__btn-icon' : ''}`}>
        {icon === null ? children : 
          <div className={`btn__btn-${design}--icon`}>
            <div className="icon">
              <Image
                src={icon}
                alt="Icon"
                width={10}
                height={10}
                priority
              />
            </div>
            {children}
          </div>
        }
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  onClick: () => null,
  icon: null
}
