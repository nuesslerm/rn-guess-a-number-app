import React, { FC, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

import BodyText from '../components/BodyText';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const trueMin = Math.ceil(min);
  const trueMax = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (trueMax - trueMin)) + trueMin;

  if (rndNum === exclude) {
    return generateRandomBetween(trueMin, trueMax, exclude);
  }

  return rndNum;
};

type GameScreenProps = {
  userChoice: number;
  onGameOver: (numberOfRounds: number) => void;
};

const GameScreen: FC<GameScreenProps> = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState<number>(0);

  // we use useRef instead of useState because we don't want the component to re-render
  // when low or high change, because those values aren't rendering UI elements,
  // they only impact the handleNextGuess logic
  const currentLow = useRef<number>(0);
  const currentHigh = useRef<number>(100);

  // useEffect runs AFTER every render cycle of the component
  useEffect(() => {
    if (currentGuess !== userChoice) return;

    onGameOver(rounds);
  }, [currentGuess, onGameOver, rounds, userChoice]);

  const handleNextGuess = (direction: -1 | 1) => {
    if (direction !== Math.sign(userChoice - currentGuess)) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === -1) {
      currentHigh.current = currentGuess;
    }

    if (direction === 1) {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    // state of currentGuess is updated, so here the component will re-render
    setCurrentGuess(nextNumber);
    setRounds((currentRounds) => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <BodyText>Opponent's Guess</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={handleNextGuess.bind(null, -1)} />
        <Button title="GREATER" onPress={handleNextGuess.bind(null, 1)} />
      </Card>
    </View>
  );
};

export default GameScreen;
