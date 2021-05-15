import React, { FC } from 'react';
import { TextInput, StyleSheet, TextInputProps, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

type InputProps = Omit<TextInputProps, 'style'> & {
  style: TextStyle;
};

const Input: FC<InputProps> = (props) => {
  const { style, ...otherProps } = props;

  return <TextInput {...otherProps} style={{ ...styles.input, ...style }} />;
};

export default Input;
