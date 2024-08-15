import React, { ButtonHTMLAttributes } from 'react'

type ButtonType = {
    title: string
}

const Button = ({title}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type='reset'>{title}</button>
  )
}

export default Button