import React, { FC, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard, // Keyboard-API for interacting with the phone's keyboard
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen: FC = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const handleOnChangeText = (text: string) => {
    const validatedText = text.replace(/[^0-9]/g, '');
    setEnteredValue(validatedText);
  };

  // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  // <TouchableWithoutFeedback
  //   onPress={() => {
  //     Keyboard.dismiss();
  //   }}
  // >
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.textInput}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={handleOnChangeText}
            value={enteredValue}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title={'Reset'}
                onPress={() => {}}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={'Confirm'}
                onPress={() => {}}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: { width: 300, maxWidth: '80%', alignItems: 'center' },
  textInput: {
    width: 50,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
});

export default StartGameScreen;
