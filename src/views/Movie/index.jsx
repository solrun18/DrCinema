
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import styles from './style';
import { getMovieDetailsById } from '../../actions/movieAction'

const Movie = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>hallo from movie</Text>
    </View>
  )
}

const mapStateToProps = ({
  name,
  image,
  plot,
  duration,
  yearOfRelease,
  genres }) => ({
  name,
  image,
  plot,
  duration,
  yearOfRelease,
  genres });

export default connect(mapStateToProps)(Movie);
