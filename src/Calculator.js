import React, { useState } from 'react'
import * as math from 'mathjs'
import './Calculator.css'

import Button from './Button.js'
import Inputbar from './Inputbar.js'

export default function Appstart() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [waiting, setWaiting] = useState('')

  const acFunc = () => {
    setInput('')
    setResult('')
    setWaiting('')
  }

  const inputFunc = (e) => {
    const lengthCheck = input.length
    if (lengthCheck < 9) {
      if (e === '%') {
        setInput(() => [...input, `${e}`])
        setWaiting(() => [...waiting, `${e}`])
      } else if (input[0] === '0' && e === '0' && input.length === 1) {
        console.log('0')
      } else {
        setInput(() => [...input, `${e}`])
        setWaiting(() => [...waiting, `${e}`])
      }
    }
  }

  const operationFunc = (e) => {
    setInput('')
    setWaiting(() => [...waiting, `${e}`])
  }

  const equalsFunc = () => {
    const value = waiting.join('').replace(',', '')
    const final = value.replace(',', '')
    const evaluatedResult = math.evaluate(final)
    if (evaluatedResult > 999999999) {
      setResult('ERROR')
      setInput('')
      setWaiting('')
    } else if (evaluatedResult.toString().length > 9) {
      const size = 9
      const trimmed = evaluatedResult.toString().substring(0, size)
      setResult(trimmed)
      setInput('')
      setWaiting('')
    } else {
      setResult(evaluatedResult)
      setInput('')
      setWaiting('')
    }
  }

  const plusMinusFunc = (e) => {
    if (input[0] === '-') {
      console.log(input[0])
    } else {
      setInput(() => [...`${e}`, input])
      setWaiting(() => [e + waiting])
    }
  }

  return (
    <div className="mainContainer">
      <div className="calcContainer">
        <Inputbar input={input} result={result} />
        <div className="row">
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
