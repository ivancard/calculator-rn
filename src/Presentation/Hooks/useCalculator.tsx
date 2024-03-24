import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '÷'
}

export const useCalculator = () => {
    const [formule, setFormule] = useState('')
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')
    const lastOperation = useRef<Operator>()

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulePart = formule.split(' ').at(0)
            setFormule(`${firstFormulePart} ${lastOperation.current} ${number}`)
        } else {
            setFormule(number)
        }

    }, [number])

    useEffect(() => {
        const subResult = calculateSubResult()
        setPrevNumber(`${subResult}`)
    }, [formule])

    const buildNumber = (numberString: string) => {
        if (number.includes(".") && numberString === ".") return
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === ".") {
                return setNumber(number + numberString)
            }
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString)
            }

            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString)
            }

            if (numberString === '0' && !number.includes('.')) return

            return setNumber(number + numberString)
        }
        setNumber(number + numberString)
    }

    const clean = () => {
        setNumber('0')
        setPrevNumber('0')
        setFormule('')
        lastOperation.current = undefined
    }
    const deleteOperation = () => {
        if (number.length === 1) return clean()
        if (number.length === 2 && number.startsWith('-')) return clean()
        setNumber(number.slice(0, -1))
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }
        setNumber('-' + number)
    }

    const setLastNumber = () => {
        calculateResult()
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        } else {
            setPrevNumber(number)
        }
        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.divide
    }
    const multiplyOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.multiply
    }
    const substractOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.substract
    }
    const addOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.add
    }

    const calculateResult = () => {
        const result = calculateSubResult()
        setFormule(result.toString())
        lastOperation.current = undefined
        setPrevNumber('0')
    }

    const calculateSubResult = (): number => {
        const [firstValue, operation, secondValue] = formule.split(' ')
        const number1 = Number(firstValue)
        const number2 = Number(secondValue)

        if (isNaN(number2)) return number1

        switch (operation) {
            case Operator.add:
                return number1 + number2
            case Operator.substract:
                return number1 - number2
            case Operator.multiply:
                return number1 * number2
            case Operator.divide:
                return number1 / number2
            default:
                throw new Error('Operator not implemented')
        }
    }

    return {
        // properties
        number,
        prevNumber,
        formule,
        // methods
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        divideOperation,
        multiplyOperation,
        substractOperation,
        addOperation,
        calculateResult
    }
}
