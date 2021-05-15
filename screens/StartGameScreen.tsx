import React, { FC, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../components/Card';
import ConfirmedOutput from '../components/ConfirmedOutput';
import Input from '../components/Input';
import Colors from '../constants/colors';

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

type StartGameScreenProps = {
  onStartGame: (selectedNumber?: number) => void;
};

const StartGameScreen: FC<StartGameScreenProps> = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number>();

  const handleOnChangeText = (text: string) => {
    const validatedText = text.replace(/[^0-9]/g, '');
    setEnteredValue(validatedText);
  };

  const handleOnPressReset = () => {
    setEnteredValue('');
    setIsConfirmed(false);
  };

  const handleOnPressConfirm = () => {
    const parsedNum = parseInt(enteredValue, 10);
    /* Note:
     * NaN is the only JavaScript value that is treated as unequal to itself,
     * so you can always test if a value is NaN by checking it for equality to itself.
     * or simply use function isNaN()
     */
    if (Number.isNaN(parsedNum) || parsedNum <= 0 || parsedNum >= 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: handleOnPressReset }]
      );
      return;
    }

    setEnteredValue('');
    setIsConfirmed(true);
    setSelectedNumber(parsedNum);
    Keyboard.dismiss();
  };

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
                onPress={handleOnPressReset}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={'Confirm'}
                onPress={handleOnPressConfirm}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmed && (
          <ConfirmedOutput
            selectedNumber={selectedNumber}
            onStartGame={onStartGame}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
