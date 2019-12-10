import React from 'react';
import { View } from 'react-native';
import styles from './style';

const CinemaDetail = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

export default CinemaDetail;
