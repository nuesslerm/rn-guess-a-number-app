import React, { FC } from 'react';
import { Button, Text, StyleSheet } from 'react-native';

import Card from './Card';
import NumberContainer from './NumberContainer';

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

type ConfirmedOutputProps = {
  selectedNumber?: number;
  onStartGame: (selectedNumber?: number) => void;
};

const ConfirmedOutput: FC<ConfirmedOutputProps> = ({
  selectedNumber,
  onStartGame,
}) => {
  return (
    <Card style={styles.summaryContainer}>
      <Text>You selected</Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button
        title="START GAME"
        onPress={() => {
          onStartGame(selectedNumber);
        }}
      />
    </Card>
  );
};

export default ConfirmedOutput;
