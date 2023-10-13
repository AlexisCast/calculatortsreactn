import React, {useRef, useState} from 'react';

enum Operators {
  add,
  rest,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [numberBefore, setNumberBefore] = useState('0');
  const [number, setNumber] = useState('0');

  const refLastOperation = useRef<Operators>();

  const createNumber = (numberText: string) => {
    //no double dot
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      //decimal dot
      if (numberText === '.') {
        setNumber(number + numberText);
        //evaluate if its a zero, and thre is a dot
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
        //evaluate if it is different from zero and it does not have a dot
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        //avoid 000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const clean = () => {
    setNumber('0');
    setNumberBefore('0');
  };

  const negativePosition = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteButton = () => {
    let negative = '';
    let numberTemp = number;
    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substring(1);
    }
    if (numberTemp.length > 1) {
      setNumber(negative + number.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberBefore = () => {
    if (number.endsWith('.')) {
      setNumberBefore(number.slice(0, -1));
    } else {
      setNumberBefore(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumberBefore();
    refLastOperation.current = Operators.divide;
  };

  const btnMutiply = () => {
    changeNumberBefore();
    refLastOperation.current = Operators.multiply;
  };
  const btnRest = () => {
    changeNumberBefore();
    refLastOperation.current = Operators.rest;
  };
  const btnAdd = () => {
    changeNumberBefore();
    refLastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(numberBefore);

    switch (refLastOperation.current) {
      case Operators.rest:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
    setNumberBefore('0');
  };
  return {
    numberBefore,
    number,
    clean,
    negativePosition,
    deleteButton,
    btnDivide,
    createNumber,
    btnMutiply,
    btnRest,
    btnAdd,
    calculate,
  };
};
