import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import logo from '../../resources/LOGO.png';
import slogan from '../../resources/Thinkbigreal.png';

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image animation="slideInDown" style={styles.logo} source={logo} />
        <Image animation="slideInDown" style={styles.slogan} source={slogan} />
        <Animatable.Image
          animation="slideInDown"
          iterationCount={1}
          direction="alternative"
        >
        </Animatable.Image>
        <View style={{ padding: 20 }}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Cinemas')}
          >
            <Text style={styles.buttonText}>Cinemas</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('UpcomingMovies')}
          >
            <Text style={styles.buttonText}>Upcoming Movies</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Main;
