import React from 'react';
import { SafeAreaView, Text, Image, FlatList, View } from 'react-native';
import styles from './style';

const UpcomingMovieList = ({ upcomingMovies }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={upcomingMovies}
        extraData={upcomingMovies}
        style={styles.container}
        renderItem={({ item: { title, poster, releaseDate } }) => {
          return (
            <View>
              <View>
                <Image style={styles.image} source={{ uri: poster }} />
              </View>
              <Text style={styles.text}>{title}</Text>
              <Text style={styles.text}>{releaseDate}</Text>
            </View>
          );
        }}
        keyExtractor={(upcomingMovie) => upcomingMovie.id}
      />
    </SafeAreaView>
  );
};


export default UpcomingMovieList;
