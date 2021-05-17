import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import TitleText from './TitleText';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 90,
    paddingTop: 35,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
  },
});

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

export default Header;
