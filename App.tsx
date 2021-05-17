/* eslint-disable global-require */
import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const App: FC = () => {
  const [userNumber, setUserNumber] = useState<number>();
  const [guessRounds, setGuessRounds] = useState<number>(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={setDataLoaded.bind(null, true)}
        onError={(err: Error) => console.error(err.message)}
      />
    );
  }

  const handleResetGame = () => {
    setGuessRounds(0);
    setUserNumber(undefined);
  };

  const handleStartGame = (selectedNumber?: number) => {
    setUserNumber(selectedNumber);
  };

  const handleGameOver = (numberOfRounds: number) => {
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && !guessRounds) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={handleGameOver} />
    );
  } else if (userNumber && guessRounds) {
    content = (
      <GameOverScreen
        numberOfRounds={guessRounds}
        userNumber={userNumber}
        onRestart={handleResetGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
};

export default App;
