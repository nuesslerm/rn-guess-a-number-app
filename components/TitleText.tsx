import React, { FC } from 'react';
import { Text, StyleSheet, TextStyle, TextInputProps } from 'react-native';

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});

type TitleTextProps = Omit<TextInputProps, 'style'> & {
  children: React.ReactNode;
  style?: TextStyle;
};

const TitleText: FC<TitleTextProps> = ({ children, style }) => {
  return <Text style={{ ...styles.body, ...style }}>{children}</Text>;
};

export default TitleText;
