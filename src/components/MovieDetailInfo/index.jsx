import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux'
import styles from './style';
import { getMovieDetailsById } from '../../actions/movieAction';

const MovieDetailInfo = ({ cinemaMovie }) =>{
  return (
    <SafeAreaView>
      <Text>{cinemaMovie.name}</Text>
      <Text>{cinemaMovie.releaseYear}</Text>
      <FlatList
        data={cinemaMovie.genres}
        extraData={cinemaMovie.genres}
        renderItem={({item: {name}}) => {
          return (
            <View>
              <Text>{name}</Text>
              <Text>{releaseYear}</Text>
            </View>
          )
        }}
        keyExtractor={(cinemaMovie) => cinemaMovie.id}
      />
    </SafeAreaView>
  )
}
