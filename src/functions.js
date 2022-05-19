/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react'
import * as math from 'mathjs'

export const functions = () => {
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
    } else {
      setInput(() => [...`${e}`, input])
      setWaiting(() => [e + waiting])
    }
  }

  return {
    input, result, waiting, acFunc, inputFunc, operationFunc, equalsFunc, plusMinusFunc,
  }
};
