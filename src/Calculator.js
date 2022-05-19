/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import * as math from 'mathjs'
import './Calculator.css'
import { functions } from './functions'

import Button from './Button.js'
import Inputbar from './Inputbar.js'

export default function Appstart() {
  const {
    input, result, waiting, acFunc, inputFunc, operationFunc, equalsFunc, plusMinusFunc,
  } = functions()

  return (
    <div className="mainContainer">
      <div className="calcContainer">
        <Inputbar input={input} result={result} />
        <div className="row" data-testid="row-test">
          <Button symbol="AC" symbolValue="filler" design="red" clicked={acFunc} />
          <Button symbol="%" symbolValue="%" design="darkgreen" clicked={operationFunc} />
          <Button symbol="+/-" symbolValue="-" design="darkgreen" clicked={plusMinusFunc} />
          <Button symbol="÷" symbolValue="/" design="darkgreen" clicked={operationFunc} />
        </div>
        <div className="row">
          <Button symbol="7" symbolValue="7" clicked={inputFunc} />
          <Button symbol="8" symbolValue="8" clicked={inputFunc} />
          <Button symbol="9" symbolValue="9" clicked={inputFunc} />
          <Button symbol="x" symbolValue="*" design="darkgreen" clicked={operationFunc} />
        </div>
        <div className="row">
          <Button symbol="4" symbolValue="4" clicked={inputFunc} />
          <Button symbol="5" symbolValue="5" clicked={inputFunc} />
          <Button symbol="6" symbolValue="6" clicked={inputFunc} />
          <Button symbol="+" symbolValue="+" design="darkgreen" clicked={operationFunc} />
        </div>
        <div className="row">
          <Button symbol="1" symbolValue="1" clicked={inputFunc} />
          <Button symbol="2" symbolValue="2" clicked={inputFunc} />
          <Button symbol="3" symbolValue="3" clicked={inputFunc} />
          <Button symbol="-" symbolValue="-" design="darkgreen" clicked={operationFunc} />
        </div>
        <div className="row">
          <Button symbol="0" symbolValue="0" clicked={inputFunc} />
          <Button symbol="." symbolValue="." clicked={inputFunc} />
          <Button symbol="=" symbolValue="filler" design="darkgreen" clicked={equalsFunc} />
        </div>
      </div>

    </div>

  )
}
