import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

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
    fontSize: 18,
  },
});

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
