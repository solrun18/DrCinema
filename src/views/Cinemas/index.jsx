import React from 'react';
import { View } from 'react-native';
import styles from './style';

const Cinemas = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

export default Cinemas;
