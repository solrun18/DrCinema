import React from 'react';
import { View, Text, Image, TouchableHighlight, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import logo from '../../resources/LOGO.png';
import slogan from '../../resources/Thinkbigreal.png';

class Main extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Animatable.Image
            animation="slideInDown"
            iterationCount={1}
            style={styles.logo}
            source={logo}
            direction="alternative" />
          <Animatable.Image
            animation="slideInDown"
            iterationCount={1}
            style={styles.slogan}
            source={slogan} />
          <View style={{ padding: 20 }}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Cinemas')}
            >
              <Text style={styles.buttonText}>Kvikmyndahús</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.props.navigation.navigate('UpcomingMovies')}
            >
              <Text style={styles.buttonText}>Væntanlegar í bíó</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Main;
