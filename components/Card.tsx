import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Card: FC<CardProps> = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;
