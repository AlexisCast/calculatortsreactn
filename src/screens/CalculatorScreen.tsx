import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';

import {styles} from '../theme/appThem';
import {ButtonCalc} from '../components/ButtonCalc';

enum Operators {
  add,
  rest,
  multiply,
  divide,
}

export const CalculatorScreen = () => {
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

  return (
    <View style={styles.calculatorContainer}>
      {numberBefore !== '0' && (
        <Text style={styles.smallResult}>{numberBefore}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9b9b9b" action={clean} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={negativePosition} />
        <ButtonCalc text="del" color="#9b9b9b" action={deleteButton} />
        <ButtonCalc text="/" color="#ff9427" action={btnDivide} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" action={createNumber} />
        <ButtonCalc text="8" action={createNumber} />
        <ButtonCalc text="9" action={createNumber} />
        <ButtonCalc text="x" color="#ff9427" action={btnMutiply} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" action={createNumber} />
        <ButtonCalc text="5" action={createNumber} />
        <ButtonCalc text="6" action={createNumber} />
        <ButtonCalc text="-" color="#ff9427" action={btnRest} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" action={createNumber} />
        <ButtonCalc text="2" action={createNumber} />
        <ButtonCalc text="3" action={createNumber} />
        <ButtonCalc text="+" color="#ff9427" action={btnAdd} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" wide action={createNumber} />
        <ButtonCalc text="." action={createNumber} />
        <ButtonCalc text="=" color="#ff9427" action={calculate} />
      </View>
    </View>
  );
};
