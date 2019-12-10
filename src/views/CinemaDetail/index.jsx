import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';

class CinemaDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'white'}}>Cinemas</Text>
      </View>
    )
  }
}

export default CinemaDetail;
