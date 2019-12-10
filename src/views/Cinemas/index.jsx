import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import text_logo from '../../resources/Thinkbig.png'

class Cinemas extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'white'}}>Halluu</Text>
      </View>
    )
  }
}

export default Cinemas;
