import React from 'react';
import {Text, View} from 'react-native';

import {styles} from '../theme/appThem';
import {ButtonCalc} from '../components/ButtonCalc';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500</Text>
      <Text style={styles.result}>1,500</Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9b9b9b" />
        <ButtonCalc text="+/-" color="#9b9b9b" />
        <ButtonCalc text="del" color="#9b9b9b" />
        <ButtonCalc text="/" color="#ff9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" />
        <ButtonCalc text="8" />
        <ButtonCalc text="9" />
        <ButtonCalc text="x" color="#ff9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" />
        <ButtonCalc text="5" />
        <ButtonCalc text="6" />
        <ButtonCalc text="-" color="#ff9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" />
        <ButtonCalc text="2" />
        <ButtonCalc text="3" />
        <ButtonCalc text="+" color="#ff9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" wide />
        <ButtonCalc text="." />
        <ButtonCalc text="=" color="#ff9427" />
      </View>
    </View>
  );
};
