/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appThem';

interface Props {
  text: string;
  color?: string;
  wide?: boolean;
  action: (numberText: string) => void;
}

export const ButtonCalc = ({
  text,
  color = '#2d2d2d',
  wide = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: wide ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
