import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {styles} from '../theme/appThem';
import {ButtonCalc} from '../components/ButtonCalc';

export const CalculatorScreen = () => {
  const [numberBefore, setNumberBefore] = useState('0');
  const [number, setNumber] = useState('0');

  const createNumber = (numberText: string) => {
    setNumber(number + numberText);
  };

  const clean = () => {
    setNumber('0');
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{numberBefore}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9b9b9b" action={clean} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={clean} />
        <ButtonCalc text="del" color="#9b9b9b" action={clean} />
        <ButtonCalc text="/" color="#ff9427" action={clean} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" action={createNumber} />
        <ButtonCalc text="8" action={createNumber} />
        <ButtonCalc text="9" action={createNumber} />
        <ButtonCalc text="x" color="#ff9427" action={clean} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" action={createNumber} />
        <ButtonCalc text="5" action={createNumber} />
        <ButtonCalc text="6" action={createNumber} />
        <ButtonCalc text="-" color="#ff9427" action={clean} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" action={createNumber} />
        <ButtonCalc text="2" action={createNumber} />
        <ButtonCalc text="3" action={createNumber} />
        <ButtonCalc text="+" color="#ff9427" action={clean} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" wide action={createNumber} />
        <ButtonCalc text="." action={clean} />
        <ButtonCalc text="=" color="#ff9427" action={clean} />
      </View>
    </View>
  );
};
