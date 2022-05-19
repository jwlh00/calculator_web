/* eslint-disable react/prop-types */
import './Inputbar.css'
import React from 'react'

export default function Button({ input, result }) {
  return (
    <div className="inputContainer">
      <div className="inputSpace">
        <h3 data-testid="input_test">{ input }</h3>
      </div>

      <div className="resultSpace">
        <h1>{ result }</h1>
      </div>
    </div>
  );
}
