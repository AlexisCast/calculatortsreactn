import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appThem';

interface Props {
  text: string;
  color: string;
}

export const ButtonCalc = ({text, color}: Props) => {
  return (
    <View style={{...styles.button, backgroundColor: color}}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};
