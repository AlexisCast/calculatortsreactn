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
    </View>
  );
};
