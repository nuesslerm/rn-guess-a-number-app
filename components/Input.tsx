import React, { FC } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

type InputProps = {
  [key in keyof TextInputProps]?: any;
};

const Input: FC<InputProps> = (props) => {
  const { style, ...otherProps } = props;

  return <TextInput {...otherProps} style={{ ...styles.input, ...style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
