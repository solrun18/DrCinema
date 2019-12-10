import React from 'react';
import { View } from 'react-native';
import { CinemaDetail } from '../CinemaDetail';
import styles from './style';

const Cinemas = ({ children }) => (
  <View style={styles.container}>
    <CinemaDetail />
    { children }
  </View>
);

export default Cinemas;
