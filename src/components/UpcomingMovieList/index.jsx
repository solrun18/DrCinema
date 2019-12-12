import React from 'react';
import { ScrollView, Text, Image, FlatList, View, TouchableOpacity } from 'react-native';
import styles from './style';

const UpcomingMovieList = ({ upcomingMovies }) => {
  return (
    <ScrollView>
      <FlatList
        data={upcomingMovies.sort((b, a) => a.releaseDate.localeCompare(b.releaseDate))}
        extraData={upcomingMovies}
        style={styles.container}
        renderItem={({ item: { title, poster, releaseDate } }) => {
          return (
            <View style={styles.movieContainer}>
              <View>
                <Image style={styles.image} source={{ uri: poster }} />
              </View>
              <Text style={styles.text}>{title}</Text>
              <Text style={styles.text}>{releaseDate}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Horfa á stiklu!</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(upcomingMovie) => upcomingMovie.id}
      />
    </ScrollView>
  );
};


export default UpcomingMovieList;
