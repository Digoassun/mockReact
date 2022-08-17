import React from 'react'
import S from './Input.module.css'

const Input = ({type,name,style}) => {
  return (
    <input className={style} type={type} name={name}/>
  )
}

export default Input