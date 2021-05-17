import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import BodyText from './BodyText';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.secondary,
    fontSize: 22,
  },
});

interface NumberContainerProps {
  children: React.ReactNode;
}

const NumberContainer: FC<NumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <BodyText style={styles.number}>{children}</BodyText>
    </View>
  );
};

export default NumberContainer;
