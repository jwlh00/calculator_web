/* eslint-disable no-undef */
import { act, renderHook } from '@testing-library/react-hooks'
import { functions } from '../functions.js';

describe('Functions', () => {
  it('input bar is initially empty ', () => {
    const { result } = renderHook(functions)

    expect(result.current.input).toBe('');
  })

  it('AC button empties input ', () => {
    const { result } = renderHook(functions)

    act(() => {
      result.current.acFunc()
    })

    expect(result.current.input).toBe('');
    expect(result.current.result).toBe('');
    expect(result.current.waiting).toBe('');
  })

  it('input function works properly', () => {
    const { result } = renderHook(functions)

    act(() => {
      result.current.inputFunc('5')
    })

    expect(result.current.input[0]).toBe('5');
  })

  it('operation function clears input and adds to waiting', () => {
    const { result } = renderHook(functions)

    act(() => {
      result.current.inputFunc('5')
    })

    act(() => {
      result.current.operationFunc('*')
    })

    expect(result.current.input).toBe('');
    expect(result.current.waiting[0]).toBe('5')
    expect(result.current.waiting[1]).toBe('*')
  })

  it('multiplication button works', () => {
    const { result } = renderHook(functions)

    act(() => {
      result.current.inputFunc('5')
    })

    act(() => {
      result.current.operationFunc('*')
    })

    act(() => {
      result.current.inputFunc('3')
    })

    act(() => {
      result.current.equalsFunc()
    })

    expect(result.current.result).toBe(15)
  })

  it('shows ERROR if result is bigger than 999999999', () => {
    const { result } = renderHook(functions)

    act(() => {
      result.current.inputFunc('99999')
    })

    act(() => {
      result.current.operationFunc('*')
    })

    act(() => {
      result.current.inputFunc('99999')
    })

    act(() => {
      result.current.equalsFunc()
    })

    expect(result.current.result).toBe('ERROR')
  })

  it('Doesnt allow more than 9 characters', () => {
    const { result } = renderHook(functions)

    act(() => {
      result.current.inputFunc('24')
    })

    act(() => {
      result.current.operationFunc('/')
    })

    act(() => {
      result.current.inputFunc('7')
    })

    act(() => {
      result.current.equalsFunc()
    })

    expect(result.current.result).toHaveLength(9)
  })

  it('plus/minus button makes it negative if its positive', () => {
    const { result } = renderHook(functions)

    act(() => {
      result.current.inputFunc('5')
    })

    act(() => {
      result.current.plusMinusFunc('-')
    })

    expect(result.current.input[0]).toBe('-')
  })

  it('if theres only a 0 in the input, doesnt let it add more 0s', () => {
    const { result } = renderHook(functions)

    act(() => {
      result.current.inputFunc('0')
    })

    act(() => {
      result.current.inputFunc('0')
    })

    expect(result.current.input).toHaveLength(1)
  })

  it('mod button works', () => {
    const { result } = renderHook(functions)

    act(() => {
      result.current.inputFunc('5')
    })

    act(() => {
      result.current.operationFunc('%')
    })

    act(() => {
      result.current.inputFunc('3')
    })

    act(() => {
      result.current.equalsFunc()
    })

    expect(result.current.result).toBe(2)
  })
})
