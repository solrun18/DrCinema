
import React from 'react';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Image animation="slideInDown" style={styles.logo} source={logo} />
    <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternative" style={styles.logoText}>Toodler</Animatable.Text>
    <View style={{ padding: 20 }}>
      <TouchableHighlight style={styles.button} onPress={() => navigate('Boards')}>
        <Text style={styles.buttonText}>Cinemas</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => navigate('Boards')}>
        <Text style={styles.buttonText}>Upcoming Movies</Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default Main;
