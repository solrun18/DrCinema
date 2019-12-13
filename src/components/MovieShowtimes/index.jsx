import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import styles from './style';
import { Linking } from 'expo';
import { getMovieDetailsById } from '../../actions/movieAction';
import shortid from 'shortid';


const MovieShowtimes = ({ showtimes }) =>{
  const data = showtimes.schedule.map(a =>({ ...a, id:shortid.generate()}))
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item: { time, purchase_url } }) => {
          return(
            <View style={styles.showtime}>
              <Text style={styles.time}>{time}</Text>
              <TouchableOpacity onPress={()=>{
                Linking.openURL(purchase_url)
              }}>
                <Text style={styles.purchase}>Kaupa Miða!</Text>
              </TouchableOpacity>
            </View>
            );
        }}
        keyExtractor={(showtime) => showtime.id}
      />
    </View>
  )
}
export default MovieShowtimes
