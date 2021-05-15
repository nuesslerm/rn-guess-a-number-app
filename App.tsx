import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

const App: FC = () => {
  const [userNumber, setUserNumber] = useState<number>();
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const handleStartGame = (selectedNumber?: number) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const handleGameOver = (numberOfRounds: number) => {
    setUserNumber(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && !guessRounds) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={handleGameOver} />
    );
  } else if (userNumber && guessRounds) {
    content = <GameOverScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
};

export default App;
