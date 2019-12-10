import React from 'react';
<<<<<<< HEAD
import { View } from 'react-native';
import { CinemaDetail } from '../CinemaDetail';
=======
import { View, Text, Image} from 'react-native';
>>>>>>> 2dc323e3f28eb8278b00823d48a3178a4d2f0213
import styles from './style';
import * as Animatable from 'react-native-animatable';
import text_logo from '../../resources/Thinkbig.png'

<<<<<<< HEAD
const Cinemas = ({ children }) => (
  <View style={styles.container}>
    <CinemaDetail />
    { children }
  </View>
);
=======
class Cinemas extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'white'}}>Halluu</Text>
      </View>
    )
  }
}
>>>>>>> 2dc323e3f28eb8278b00823d48a3178a4d2f0213

export default Cinemas;
