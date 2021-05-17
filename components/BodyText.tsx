import React, { FC } from 'react';
import { Text, StyleSheet, TextStyle, TextInputProps } from 'react-native';

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans',
  },
});

type BodyTextProps = Omit<TextInputProps, 'style'> & {
  children: React.ReactNode;
  style?: TextStyle;
};

const BodyText: FC<BodyTextProps> = ({ children, style }) => {
  return <Text style={{ ...styles.body, ...style }}>{children}</Text>;
};

export default BodyText;
