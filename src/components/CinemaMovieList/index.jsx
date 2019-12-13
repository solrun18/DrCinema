import React from 'react';
import { Image, TouchableOpacity ,ScrollView, View, Text, SafeAreaView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import CinemaMovie from '../CinemaMovie';
import styles from './style';

const CinemaMovieList = ({cinemaMovies, onPress}) => {
  return(
    <View style={{flex: 1 }}>
      <FlatList
        numColumns={2}
        data={cinemaMovies}
        extraData={cinemaMovies}
        renderItem={({ item: { id, name, image, releaseYear, genres } }) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(id, name, image, releaseYear, genres)}
            >
              <View style={styles.movieContainer}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{releaseYear}</Text>
                <Image
                  source={{ uri: image }}
                  style={styles.image}
                  />
                <Text style={{color:'red'}}>{genres}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(cinemaMovie) => cinemaMovie.id}
      />
    </View>
  )
}
export default CinemaMovieList;
