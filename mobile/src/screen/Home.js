import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ButtonNumber, Numbers } from '../components/ButtonNumber';
import { Visor } from '../components/Visor';

export function Home() {
  const [secondNumber, setSecondNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [visor, setVisor] = useState(0);
  const [sign, setSign] = useState('');

  const calculation = (operator) => {
    if (sign == '') {
      setFirstNumber(parseInt(firstNumber.toString() + operator.toString()));
      setVisor(parseInt(firstNumber.toString() + operator.toString()));
    }

    if (
      (operator == '/' || operator == 'x' || operator == '-' || operator == '+') &&
      secondNumber == 0
    ) {
      setVisor(firstNumber.toString() + operator);
      setSign(operator);
    }

    if (sign != '') {
      setSecondNumber(parseInt(secondNumber.toString() + operator.toString()));
      const sNumber = parseInt(secondNumber.toString() + operator.toString());
      setVisor(firstNumber + sign + sNumber);
    }
  };

  return (
    <View style={styles.container}>
      <Visor visor={visor} />
      <ButtonNumber calculation={calculation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
  },
});