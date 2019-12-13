import React from 'react';
import { Image, TouchableOpacity, View, Text, FlatList } from 'react-native';
import styles from './style';

const CinemaMovieList = ({ cinemaMovies, onPress }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={1}
        data={cinemaMovies}
        extraData={cinemaMovies}
        renderItem={({ item: { id, name, image, releaseYear, genres } }) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(id, name, image, releaseYear, genres)}
            >
              <View style={styles.movieContainer}>
                <View style={styles.header}>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.releaseYear}>{releaseYear}</Text>
                </View>
                <View style={styles.innerContainer}>
                  <Image
                    source={{ uri: image }}
                    style={styles.image}
                  />
                  <Text style={styles.genres}>{genres}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(cinemaMovie) => cinemaMovie.id}
      />
    </View>
  );
};
export default CinemaMovieList;
