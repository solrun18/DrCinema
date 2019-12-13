import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux'
import { Linking } from 'expo';
import { getMovieDetailsById } from '../../actions/movieAction';
import shortid from 'shortid';


const MovieShowtimes = ({ showtimes }) =>{
  const data = showtimes.schedule.map(a =>({ ...a, id:shortid.generate()}))
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item: { time, purchase_url } }) => {
          return(
            <View>
              <Text style={{fontSize: 20, color: 'black'}}>{time}</Text>
              <TouchableOpacity onPress={()=>{
                Linking.openURL(purchase_url)
              }}>
                <Text>Kaupa Miða!</Text>
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
