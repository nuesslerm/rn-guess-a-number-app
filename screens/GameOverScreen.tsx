import React, { FC } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import BodyText from '../components/BodyText';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type GameOverScreenProps = {
  numberOfRounds: number;
  userNumber: number;
  onRestart: () => void;
};

const GameOverScreen: FC<GameOverScreenProps> = ({
  numberOfRounds,
  userNumber,
  onRestart,
}) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <BodyText>Number of rounds: {numberOfRounds}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;
