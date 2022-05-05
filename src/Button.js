/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'
import './Button.css'

export default function Button({
  symbol, symbolValue, design, clicked,
}) {
  return (
    <div className="buttonContainer" style={{ color: design }} onClick={() => clicked(symbolValue)}>
      {symbol}
    </div>
  )
}
